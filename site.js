const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const progress = document.getElementById("progress");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("open")) {
      return;
    }

    if (navLinks.contains(event.target) || navToggle.contains(event.target)) {
      return;
    }

    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

const updateProgress = () => {
  if (!progress) {
    return;
  }

  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.max = 100;
  progress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
};

window.addEventListener("load", updateProgress);
window.addEventListener("scroll", updateProgress, { passive: true });

const setupCodeBlocks = () => {
  const blocks = document.querySelectorAll(".article pre");

  blocks.forEach((pre, index) => {
    if (pre.parentElement && pre.parentElement.classList.contains("code-shell")) {
      return;
    }

    const label = pre.dataset.codeLabel || `Snippet ${index + 1}`;
    const shell = document.createElement("div");
    shell.className = "code-shell";

    const toolbar = document.createElement("div");
    toolbar.className = "code-toolbar";

    const codeLabel = document.createElement("div");
    codeLabel.className = "code-label";
    codeLabel.textContent = label;

    const copyButton = document.createElement("button");
    copyButton.className = "code-copy";
    copyButton.type = "button";
    copyButton.setAttribute("aria-label", `Copy ${label}`);
    copyButton.textContent = "Copy";

    copyButton.addEventListener("click", async () => {
      const text = pre.innerText;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const range = document.createRange();
          range.selectNodeContents(pre);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand("copy");
          selection.removeAllRanges();
        }

        copyButton.textContent = "Copied";
        copyButton.classList.add("is-copied");
        window.setTimeout(() => {
          copyButton.textContent = "Copy";
          copyButton.classList.remove("is-copied");
        }, 1600);
      } catch (error) {
        copyButton.textContent = "Copy failed";
        window.setTimeout(() => {
          copyButton.textContent = "Copy";
        }, 1600);
      }
    });

    toolbar.append(codeLabel, copyButton);
    pre.parentNode.insertBefore(shell, pre);
    shell.append(toolbar, pre);
  });
};

setupCodeBlocks();
