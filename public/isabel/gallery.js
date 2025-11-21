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

// Images

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
        "name": "Santander_WideRoom_01.png"
    },

    {
        "id": 4,
        "name": "img3.jpg"
    },
    {
        "id": 5,
        "name": "img4.jpg"
    },
    {
        "id": 6,
        "name": "img5.gif"
    },
    {
        "id": 7,
        "name": "img6.png"
    },

    {
        "id": 8,
        "name": "img7.gif"
    },

    {
        "id": 9,
        "name": "img8.jpeg"
    },

    {
        "id": 10,
        "name": "img9.jpg"
    },

    {
        "id": 11,
        "name": "img11.png"
    },

    {
        "id": 12,
        "name": "1994IsabelSummerschool.jpg"
    },

    {
        "id": 13,
        "name": "audiencia1.jpg"
    },

    {
        "id": 14,
        "name": "Cyberaula.png"
    },

    {
        "id": 15,
        "name": "dcp00493.jpg"
    },

    {
        "id": 16,
        "name": "Discapacidad.jpg"
    },

    {
        "id": 17,
        "name": "Global360.gif"
    },

    {
        "id": 18,
        "name": "iba02-3.png"
    },

    {
        "id": 19,
        "name": "Isabel10thAnniversary.png"
    },

    {
        "id": 20,
        "name": "red13.gif"
    },

    {
        "id": 21,
        "name": "SKM_C224e_I15082114020_0001.jpg"
    },

    {
        "id": 22,
        "name": "SKM_C224e_I15082114401_0001.jpg"
    },

    {
        "id": 23,
        "name": "SKM_C224e_I15082114570_0001.jpg"
    },

    {
        "id": 24,
        "name": "UtrialWL4.jpeg"
    },

    {
        "id": 25,
        "name": "Bled-VNC.jpg"
    },

    {
        "id": 26,
        "name": "Global_Info_Day_2007.jpg"
    },

    {
        "id": 27,
        "name": "Global_Info_Day_2007-2.jpg"
    },
    {
        "id": 28,
        "name": "TheValley_ ThePlace_01.jpg"
    },
    {
        "id": 29,
        "name": "Santander_WideRoom_02.png"
    },
    {
        "id": 30,
        "name": "Oxford_The Hive.jpg"
    },
    {
        "id": 31,
        "name": "TheValley_ ThePlace_02.jpg"
    },

];



let images = '';

images_data.forEach(function (data_item) {

    images += `
        <div class="window window_gallery mySlides">
            <div id="mydivheader" class="window_header">
                <div class="icon">
                    <img src="assets/img/ico/window_icon.png" alt="">
                </div>
                <div class="title">
                    <h2>Photos</h2>
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

            <div class="gallery_buttons">
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
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