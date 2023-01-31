let n = 0;
let arrayImg = ["imagemain.jpg", "nextimage.jpg", "previousimage.jpg"];

function nextSlide() {
    if (n == 2) {
        n=0;
    }
    else {
        n++;
    }

    document.getElementById("slideShow").src = arrayImg[n];
}

function prevSlide() {
    if(n==0) {
        n = 2;
    }
    else{
        --n;
    }
    document.getElementById("slideShow").src = arrayImg[n];
}