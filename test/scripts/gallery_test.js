function prevSlide(slide, slideContent) {
    if (slideContent.previousElementSibling !== null) {
        showSlide(slide, slideContent.previousElementSibling);
        return (slideContent.previousElementSibling);
    }
    return (slideContent);
}
function nextSlide(slide, slideContent) {
    if (slideContent.nextElementSibling !== null) {
        showSlide(slide, slideContent.nextElementSibling);
        return (slideContent.nextElementSibling);
    }
    return (slideContent);
}

function showSlide(slide, { src, alt }) {
    slide.querySelector("img").setAttribute("src", src);
    slide.querySelector("figcaption").innerText = alt;
}

function openModal(target) {
    if (target.tagName === "IMG") {
        const modal = document.getElementById("modal");
        modal.hidden = false;
        // This is the slide placeholder
        const slide = modal.querySelector(".slide");
        // This is a pointer to the current photo
        let slideContent = target;

        modal.querySelector("#prev_slide").addEventListener('click', e => { slideContent = prevSlide(slide, slideContent) });
        modal.querySelector("#next_slide").addEventListener('click', e => { slideContent = nextSlide(slide, slideContent) });
        showSlide(slide, slideContent.slides[0]);
    }
    // const slideContent = {
    //     ref: e.target,
    //     src: "../src/images/popeye_orig.jpg",
    //     caption: "Popeye the Sailorman"
    // };
}

{
    success: (data) => {
        execute
    },
    
}
