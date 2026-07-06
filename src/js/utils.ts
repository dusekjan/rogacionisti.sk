export function updateYear() {
    const year = document.querySelector("#year")!;
    year.textContent = new Date().getFullYear().toString();
}

export function initImageDialog() {
    const images = document.querySelectorAll<HTMLImageElement>("img.zoomable");

    images.forEach(img => {
        img.addEventListener("click", () => openImageDialog(img.src, img.alt));
    });
}

function openImageDialog(src: string, alt: string) {
    const dialog = document.createElement("dialog");
    dialog.id = "image-dialog";

    const dialogImg = document.createElement("img");
    dialogImg.src = src;
    dialogImg.alt = alt;
    dialog.append(dialogImg);

    // Kliknutí na obrázek i mimo obsah (backdrop) dialog zavře
    dialog.addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => dialog.remove());

    document.body.append(dialog);
    dialog.showModal();
}
