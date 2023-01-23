const imageDialog = document.createElement("dialog") as HTMLDialogElement;
const image = document.createElement("img") as HTMLImageElement;
const closeBtn = document.createElement("button") as HTMLButtonElement;
closeBtn.innerText = "X";
closeBtn.style.position = "absolute";
closeBtn.style.top = "10px";
closeBtn.style.right = "10px";
closeBtn.addEventListener("click", () => {
  imageDialog.close();
});
image.style.maxWidth = "400px";
imageDialog.appendChild(image);
imageDialog.appendChild(closeBtn);
document.body.appendChild(imageDialog);

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "imageModelError") {
    alert(request.error);
  }
  if (request.type === "imageModelResult") {
    const { imageUrl } = request;
    if (!imageUrl) {
      return;
    }
    image.src = imageUrl;
    imageDialog.showModal();
  }
});
