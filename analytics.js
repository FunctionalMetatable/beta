link =
  "functionalmetatable.github.io" +
  window.location.pathname +
  (new URL(window.location.href).search || "");
fetch(
  "https://stats.9gr.repl.co/github/website/analytics/addviews/" + btoa(link)
)
  .then((res) => res.json())
  .then((res) => {
    console.log(
      "[analytics]: added views, from server got " + JSON.stringify(res)
    );
  });
