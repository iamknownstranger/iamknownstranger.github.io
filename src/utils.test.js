import {formatFileSizeDisplay, extractTextContent} from "./utils";

describe("formatFileSizeDisplay", () => {
  it("displays values under 1024 as KB", () => {
    expect(formatFileSizeDisplay(0)).toBe("0 KB");
    expect(formatFileSizeDisplay(512)).toBe("512 KB");
    expect(formatFileSizeDisplay(1023)).toBe("1023 KB");
  });

  it("converts values of 1024 and above to MB with one decimal", () => {
    expect(formatFileSizeDisplay(1024)).toBe("1 MB");
    expect(formatFileSizeDisplay(1536)).toBe("1.5 MB");
    expect(formatFileSizeDisplay(10240)).toBe("10 MB");
  });
});

describe("extractTextContent", () => {
  it("extracts text from paragraph tags", () => {
    expect(extractTextContent("<p>Hello</p><p>World</p>")).toBe("Hello World");
  });

  it("strips nested markup and paragraph attributes", () => {
    expect(
      extractTextContent('<p class="intro">Hello <strong>bold</strong></p>')
    ).toBe("Hello bold");
  });

  it("ignores content outside paragraph tags", () => {
    expect(extractTextContent("<h1>Title</h1><p>Body</p>")).toBe("Body");
  });

  it("returns an empty string for non-string input", () => {
    expect(extractTextContent(undefined)).toBe("");
    expect(extractTextContent(null)).toBe("");
    expect(extractTextContent(42)).toBe("");
  });
});
