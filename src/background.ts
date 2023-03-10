import { createSketchFromImage } from "./replicate";

const disneyMenuItemId = "disneyMenuItem";
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== disneyMenuItemId) {
    return;
  }
  if (!(info.srcUrl && info.mediaType === "image")) {
    chrome.tabs.sendMessage(tab!.id!, {
      type: "imageModelError",
      error: "Not an image or no src"
    });
  }

  createSketchFromImage(info.srcUrl!)
    .catch((e) => {
      chrome.tabs.sendMessage(tab!.id!, {
        type: "imageModelError",
        error: e.message
      });
    })
    .then((imageUrl) => {
      chrome.tabs.sendMessage(tab!.id!, { type: "imageModelResult", imageUrl });
    });
});

chrome.contextMenus.create(
  {
    contexts: ["image"],
    title: "Create Disney Character",
    id: disneyMenuItemId
  }
);
