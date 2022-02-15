var images = ['img0.jpg', 'img1.webp', 'img2.webp', 'img3.webp'];
var index = 0;
var img = document.getElementById('img');
var len = images.length;

setInterval(change, 2000);
function change() {
    index++;
    if( index >= len)
    {
        index = 0;
        img.src = images[index];
    }
    else{
        img.src = images[index]
    }
    
}