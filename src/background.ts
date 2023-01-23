import { createHighRes } from "./replicate";

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!(info.srcUrl && info.mediaType === "image")) {
    chrome.tabs.sendMessage(tab!.id!, {
      type: "imageModelError",
      error: "Not an image or no src",
    });
  }

  createHighRes(info.srcUrl!)
    .catch((e) => {
      chrome.tabs.sendMessage(tab!.id!, {
        type: "imageModelError",
        error: e.message,
      });
    })
    .then((imageUrl) => {
      chrome.tabs.sendMessage(tab!.id!, { type: "imageModelResult", imageUrl });
    });
});

chrome.contextMenus.create(
  {
    contexts: ["image"],
    title: "Make Sketch",
    id: "sketchModel",
  },
  () => {
    console.log("created context menu!");
  }
);
