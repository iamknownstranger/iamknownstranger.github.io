import React, {Suspense, useContext, useEffect} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

const widthScreen = window.screen.width;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);
  const display = twitterDetails.display && twitterDetails.userName;

  useEffect(() => {
    if (!display) {
      return;
    }
    // If the embed iframe never appears (e.g. blocked by a tracking
    // blocker), show a hint instead of an empty section.
    const timer = setTimeout(() => {
      const twitterDiv = document.getElementById("twitter");
      if (twitterDiv && !twitterDiv.innerHTML.includes("iframe")) {
        twitterDiv.innerHTML = cantDisplayError;
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [display]);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
    return null;
  }
  return (
    <Suspense fallback={renderLoader()}>
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={{height: 400, width: widthScreen}}
            placeholder={renderLoader()}
            autoHeight={false}
            borderColor="#fff"
            key={isDark ? "1" : "2"}
            theme={isDark ? "dark" : "light"}
            noFooter={true}
          />
        </div>
      </div>
    </Suspense>
  );
}
