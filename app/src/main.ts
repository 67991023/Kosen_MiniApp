import "./style.css";

fetch("Index.html").then((response) => {
  response.text().then((text) => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML = text;
  });
});
