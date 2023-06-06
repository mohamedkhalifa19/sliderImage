let images = ["1","2","3","4","5"];
let img = document.images[0];
let i = 0;
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

prev.onclick  = function () {
    i--;
    if(i>=0 && i<images.length){
        img.src = images[i]+".jpg";
    }
    else
    i = 0;
}
next.onclick  = function () {
    i++;
    if(i>=0 && i<images.length){
        img.src = images[i]+".jpg";
    }
    else
    i = images.length -1;
}