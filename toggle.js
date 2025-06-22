const styleId = "universal-dark-mode-style";

if (!document.getElementById(styleId)) {
  const link = document.createElement("link");
  link.id = styleId;
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = chrome.runtime.getURL("darkmode.css");
  document.head.appendChild(link);
} else {
  document.getElementById(styleId).remove();
}
