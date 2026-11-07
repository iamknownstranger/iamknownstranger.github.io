"""Check the published entry point without installing the legacy template."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

root = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids, self.refs, self.h1, self.titles = [], [], 0, 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.append(attrs["id"])
        for key in ("href", "src"):
            if attrs.get(key):
                self.refs.append(attrs[key])
        self.h1 += tag == "h1"
        self.titles += tag == "title"

html = (root / "index.html").read_text()
page = Page()
page.feed(html)
assert page.h1 == 1 and page.titles == 1, "Expected one page title and one primary heading"
assert len(page.ids) == len(set(page.ids)), "Duplicate element IDs"
for ref in page.refs:
    url = urlsplit(ref)
    if url.scheme or url.netloc:
        continue
    if url.path:
        assert (root / url.path.lstrip("/")).is_file(), f"Missing local asset: {ref}"
    if url.fragment:
        assert url.fragment in page.ids, f"Missing section: {ref}"
assert (root / ".nojekyll").exists()
assert "Software Developer Folio" not in html
print(f"Portfolio checks passed: {len(page.ids)} section IDs, {len(page.refs)} links/assets")
