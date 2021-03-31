fetch(
  "https://stats.9gr.repl.co/github/website/analytics/addviews/" +
    atob("functionalmetatable.github.io" + window.location.pathname)
)
  .then((res) => res.json())
  .then((res) => {
    console.log(
      "[analytics]: added views, from server got " + JSON.stringify(res)
    );
  });
