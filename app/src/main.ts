import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <a name="Top"></a>
  <div class="fixed top-0 z-50 w-full max-w-[100vw]">
    <iframe src="Navbar.html" id="Navbar" class="min-w-full"></iframe>
  </div>
  <div id="Mainpage" class="p-16 mt-0">
    <iframe src="Index.html" id="Subpage" class="min-w-full"></iframe>
  </div>
  <div class="m-8">
   <iframe src="Footnote.html" id="Footnote" class="min-w-full"></iframe>
  </div>
  <div class="fixed bottom-5 z-50 right-5" id="Totop">
    <a href="#Top" class="">To top</a>
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
  .querySelector<HTMLIFrameElement>("#Subpage")
  ?.contentWindow?.addEventListener("resize", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Subpage")!;
    Subpage.height = Subpage.contentWindow?.document.body.scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Footnote")
  ?.contentWindow?.addEventListener("load", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Footnote")!;
    Subpage.height = Subpage.contentWindow?.document.body.scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Footnote")
  ?.contentWindow?.addEventListener("resize", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Footnote")!;
    Subpage.height = Subpage.contentWindow?.document.body.scrollHeight + "px";
  });

document.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var element = document.querySelector<HTMLDivElement>("#Totop")!;
  if (scrollY > 10) {
    element.hidden = false;
    element.style.opacity = Math.min(((scrollY - 10) / 100) * 100, 100) + "%";
  } else {
    element.hidden = true;
  }
});

var element = document.querySelector<HTMLDivElement>("#Totop")!;
element.hidden = true;
