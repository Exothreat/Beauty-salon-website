{
    function openGallery(imgs) {
        let expandImg = document.getElementById("expandedImg");
        let photoblock = document.querySelector(".photoView");

        expandImg.src = imgs.src;
        expandImg.parentElement.style.display = "flex";

        photoblock.addEventListener("click", () => {
            photoblock.style.display = "none";
        });
    }
}
