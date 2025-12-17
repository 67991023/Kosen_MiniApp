import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <a name="Top"></a>
  <div class="fixed top-0 z-50 w-full max-w-[100vw] bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
    <iframe src="Navbar.html" id="Navbar" class="min-w-full"></iframe>
  </div>
  <div id="Mainpage" class="pt-20">
    <iframe src="Index.html" id="Index" class="min-w-full"></iframe>
    <iframe src="Structure.html" id="Structure" class="min-w-full"></iframe>
    <iframe src="Contact.html" id="Contact" class="min-w-full"></iframe>
  </div>
  <div class="bg-gray-900">
   <iframe src="Footnote.html" id="Footnote" class="min-w-full"></iframe>
  </div>
  <div class="fixed bottom-5 z-50 right-5" id="Totop">
    <a href="#Top" class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all text-xl font-bold">
      ↑
    </a>
  </div>
`;

// Apply dark mode on load to main page
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

// Listen for theme changes from iframes
window.addEventListener('message', (event) => {
  if (event.data.type === 'themeChange') {
    if (event.data.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList. remove('dark');
    }
  }
});

// ✅ FIX: Wait for DOM to be ready before hiding elements
setTimeout(() => {
  const totopElement = document.querySelector<HTMLDivElement>("#Totop");
  const contactElement = document.querySelector<HTMLIFrameElement>("#Contact");
  const structureElement = document.querySelector<HTMLIFrameElement>("#Structure");
  
  if (totopElement) totopElement.hidden = true;
  if (contactElement) contactElement.hidden = true;
  if (structureElement) structureElement.hidden = true;
}, 0);

document
  .querySelector<HTMLIFrameElement>("#Navbar")
  ?.contentWindow?.addEventListener("load", () => {
    var Navbar = document.querySelector<HTMLIFrameElement>("#Navbar")!;
    Navbar.height = Navbar.contentWindow?. document.body.scrollHeight + "px";
    
    // HOME BUTTON - Index
    Navbar.contentDocument
      ?.querySelector<HTMLButtonElement>("#Index")
      ?.addEventListener("click", () => {
        document.querySelector<HTMLIFrameElement>("#Index")!.hidden = false;
        document.querySelector<HTMLIFrameElement>("#Contact")!.hidden = true;
        document.querySelector<HTMLIFrameElement>("#Structure")!.hidden = true;
        var Subpage = document.querySelector<HTMLIFrameElement>("#Index")!;
        Subpage.height =
          Subpage.contentWindow?.document.body.scrollHeight + "px";
        window.scrollTo(0, 0);
      });
    
    // Contact Button
    Navbar.contentDocument
      ?.querySelector<HTMLButtonElement>("#Contact")
      ?.addEventListener("click", () => {
        document.querySelector<HTMLIFrameElement>("#Index")!.hidden = true;
        document.querySelector<HTMLIFrameElement>("#Contact")!.hidden = false;
        document. querySelector<HTMLIFrameElement>("#Structure")!.hidden = true;
        var Subpage = document.querySelector<HTMLIFrameElement>("#Contact")!;
        Subpage.height =
          Subpage.contentWindow?. document.body.scrollHeight + "px";
        window.scrollTo(0, 0);
      });
    
    // Structure Button
    Navbar.contentDocument
      ?.querySelector<HTMLButtonElement>("#Structure")
      ?.addEventListener("click", () => {
        document.querySelector<HTMLIFrameElement>("#Index")!.hidden = true;
        document. querySelector<HTMLIFrameElement>("#Contact")!.hidden = true;
        document.querySelector<HTMLIFrameElement>("#Structure")!.hidden = false;
        var Subpage = document. querySelector<HTMLIFrameElement>("#Structure")!;
        Subpage.height =
          Subpage.contentWindow?.document. body.scrollHeight + "px";
        window.scrollTo(0, 0);
      });
  });

document
  .querySelector<HTMLIFrameElement>("#Index")
  ?.contentWindow?.addEventListener("load", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Index")!;
    Subpage. height = Subpage.contentWindow?. document.body.scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Contact")
  ?.contentWindow?. addEventListener("load", () => {
    var Subpage = document. querySelector<HTMLIFrameElement>("#Contact")!;
    Subpage.height = Subpage.contentWindow?.document.body. scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Structure")
  ?.contentWindow?. addEventListener("load", () => {
    var Subpage = document. querySelector<HTMLIFrameElement>("#Structure")!;
    Subpage.height = Subpage.contentWindow?.document.body. scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Contact")
  ?.contentWindow?. addEventListener("resize", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Contact")!;
    Subpage. height = Subpage.contentWindow?.document.body.scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Structure")
  ?.contentWindow?. addEventListener("resize", () => {
    var Subpage = document. querySelector<HTMLIFrameElement>("#Structure")!;
    Subpage.height = Subpage.contentWindow?.document.body. scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Index")
  ?.contentWindow?. addEventListener("resize", () => {
    var Subpage = document. querySelector<HTMLIFrameElement>("#Index")!;
    Subpage.height = Subpage.contentWindow?.document.body. scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Footnote")
  ?.contentWindow?.addEventListener("load", () => {
    var Subpage = document.querySelector<HTMLIFrameElement>("#Footnote")!;
    Subpage.height = Subpage.contentWindow?. document.body.scrollHeight + "px";
  });

document
  .querySelector<HTMLIFrameElement>("#Footnote")
  ?.contentWindow?. addEventListener("resize", () => {
    var Subpage = document. querySelector<HTMLIFrameElement>("#Footnote")!;
    Subpage.height = Subpage.contentWindow?.document. body.scrollHeight + "px";
  });

document. addEventListener("scroll", () => {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var element = document.querySelector<HTMLDivElement>("#Totop")!;
  if (scrollY > 10) {
    element.hidden = false;
    element.style.opacity = Math.min(((scrollY - 10) / 100) * 100, 100) + "%";
  } else {
    element.hidden = true;
  }
});