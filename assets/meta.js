export default class meta {
  constructor(document, window) {
    this.document = document;
    this.window = window;
  }
  loadScript(url) {
    const e = this.document.createElement("script");
    e.src = url;
    this.document.head.appendChild(e);
  }
  loadStyle(url) {
    const e = this.document.createElement("link");
    e.rel = "stylesheet";
    e.href = url;
    this.document.head.appendChild(e);
  }
  loadLink(rel, href) {
    const e = this.document.createElement("link");
    e.rel = rel;
    e.href = href;
    this.document.head.appendChild(e);
  }
  initialize() {
    const window = this.window;
    const document = this.document;
    // load jquery and stuff
    this.loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
    this.loadStyle("https://functionalmetatable.github.io/assets/style.css");
  }
  error() {
    this.window.location.replace(
      "https://functionalmetatable.github.io/error?utm source=" +
        this.window.location.href
    );
  }
}
