const editor = document.getElementById("editor");
const menu = document.getElementById("menu");


editor.addEventListener("keyup", (e) => {
  if (e.key === "/") {
    const range = window.getSelection().getRangeAt(0);
    const rect = range.getBoundingClientRect();

    menu.style.top = rect.bottom + "px";
    menu.style.left = rect.left + "px";

    menu.classList.remove("hidden");
  }

  // Hide menu
  if (e.key === "Escape" || e.key === " ") {
    menu.classList.add("hidden");
  }
});

// Handle menu click
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    const type = item.dataset.type;

    let html = "";

    if (type === "text") html = "<p>Text</p>";
    if (type === "h1") html = "<h1>Heading 1</h1>";
    if (type === "h2") html = "<h2>Heading 2</h2>";
    if (type === "h3") html = "<h3>Heading 3</h3>";

    if (type === "bullet") html = "<ul><li>List item</li></ul>";
    if (type === "numbered") html = "<ol><li>List item</li></ol>";
    if (type === "todo") html = "<p>☐ To-do item</p>";

    if (type === "image") html = "<p>[ Image placeholder ]</p>";
    if (type === "quote") html = "<blockquote>Quote</blockquote>";
    if (type === "code") html = "<pre><code>code here</code></pre>";

    editor.innerHTML += html;
    menu.classList.add("hidden");
  });
});