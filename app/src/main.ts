import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="fixed top-0 z-50 w-full max-w-[100vw]">
    <iframe src="Navbar.html" id="Navbar" class="min-w-full"></iframe>
  </div>
  <div id="Mainpage" class="m-16">
    <iframe src="Index.html" id="Subpage" class="min-w-full"></iframe>
  </div>
  <div class="m-8">
   <iframe src="Footnote.html" id="Footnote" class="min-w-full"></iframe>
  </div>
  `;

document
  .querySelector<HTMLIFrameElement>("#Navbar")
  ?.contentWindow?.addEventListener("load", () => {
    var Navbar = document.querySelector<HTMLIFrameElement>("#Navbar")!;
    Navbar.height = Navbar.contentWindow?.document.body.scrollHeight + "px";
    Navbar.contentDocument
      ?.querySelector<HTMLButtonElement>("#Contact")
      ?.addEventListener("click", () => {
        document.querySelector<HTMLDivElement>("#Mainpage")!.innerHTML =
          `<iframe src="Contact.html" id="Subpage" class="min-w-full"></iframe>`;
        document
          .querySelector<HTMLIFrameElement>("#Subpage")
          ?.contentWindow?.addEventListener("load", () => {
            var Subpage =
              document.querySelector<HTMLIFrameElement>("#Subpage")!;
            Subpage.height =
              Subpage.contentWindow?.document.body.scrollHeight + "px";
          });
      });
    Navbar.contentDocument
      ?.querySelector<HTMLButtonElement>("#Index")
      ?.addEventListener("click", () => {
        document.querySelector<HTMLDivElement>("#Mainpage")!.innerHTML =
          `<iframe src="Index.html" id="Subpage" class="min-w-full"></iframe>`;
        document
          .querySelector<HTMLIFrameElement>("#Subpage")
          ?.contentWindow?.addEventListener("load", () => {
            var Subpage =
              document.querySelector<HTMLIFrameElement>("#Subpage")!;
            Subpage.height =
              Subpage.contentWindow?.document.body.scrollHeight + "px";
          });
      });
    Navbar.contentDocument
      ?.querySelector<HTMLButtonElement>("#Structure")
      ?.addEventListener("click", () => {
        document.querySelector<HTMLDivElement>("#Mainpage")!.innerHTML =
          `<iframe src="Structure.html" id="Subpage" class="min-w-full"></iframe>`;
        document
          .querySelector<HTMLIFrameElement>("#Subpage")
          ?.contentWindow?.addEventListener("load", () => {
            var Subpage =
              document.querySelector<HTMLIFrameElement>("#Subpage")!;
            Subpage.height =
              Subpage.contentWindow?.document.body.scrollHeight + "px";
          });
      });
  });

document
  .querySelector<HTMLIFrameElement>("#Subpage")
  ?.contentWindow?.addEventListener("load", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Subpage")!;
    Subpage.height = Subpage.contentWindow?.document.body.scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Footnote")
  ?.contentWindow?.addEventListener("load", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Footnote")!;
    Subpage.height = Subpage.contentWindow?.document.body.scrollHeight + "px";
  });
