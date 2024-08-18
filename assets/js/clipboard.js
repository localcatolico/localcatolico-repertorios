function copyPlaylistToClipboard(href) {
  navigator.clipboard.writeText(href);
  var element = document.getElementById("toast");
  element.classList.add("show");
}
