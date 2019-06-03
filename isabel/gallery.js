/* ==========================================================================
   GALLERY
   ========================================================================== 

// Open the Modal
function openModal() {
    if (screen.width >= 600) {
        document.getElementById("myModal").style.display = "block";
    }
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}*/

/* ==========================================================================
   GALLERY 2
   ========================================================================== */

// Dynamic images

let images_data = [{
        "id": 1,
        "name": "img1.jpg"
    },
    {
        "id": 2,
        "name": "img2.jpg"
    },
    {
        "id": 3,
        "name": "img3.jpg"
    },
    {
        "id": 4,
        "name": "img4.jpg"
    },
    {
        "id": 5,
        "name": "img5.jpg"
    },
    {
        "id": 6,
        "name": "img6.jpg"
    },
    {
        "id": 7,
        "name": "img7.jpg"
    },

    {
        "id": 8,
        "name": "img8.jpg"
    },

];



let images = '';

images_data.forEach(function (data_item) {

    images += `
        <div class="window window_group mySlides">
            <div id="mydivheader" class="window_header">
                <div class="icon">
                    <img src="assets/img/ico/window_icon.png" alt="">
                </div>
                <div class="title">
                    <h2>Interact</h2>
                </div>
                <div class="actions">
                    <div class="action">_</div>
                    <div class="action">-</div>
                    <div class="action">x</div>
                </div>
            </div>
            <div class="window_content">
            <div class="fade" id="mySlides">
            <div class="numbertext">${data_item.id}</div>
            <img class="image" src="./assets/img/images/${data_item.name}" style="width:100%">
    </div>
            </div>
        </div> <!-- window -->

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
	`;
});

let images_dom = document.querySelector('.slideshow-container');
images_dom.innerHTML = images;


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    slides[slideIndex - 1].style.display = "block";
}