var curimage = 0;
var frequency = 2000;
function changeLevel(){
    if(document.getElementById("nivel").value == "1"){
        frequency = 1000;
    } else if(document.getElementById("nivel").value == "2"){
        frequency = 2000;
    }else if(document.getElementById("nivel").value == "3"){
        frequency = 3000;
    } else if(document.getElementById("nivel").value == "4"){
        frequency = 4000;
    } else if(document.getElementById("nivel").value == "5"){
        frequency = 5000;
    } else if(document.getElementById("nivel").value == "6"){
        frequency = 6000;
    } else if(document.getElementById("nivel").value == "7"){
        frequency = 7000;
    }
}

changeLevel();

 //document.getElementById("lvl").innerHTML=("Level: " +level);

function showSlideNum() {
    // document.getElementById('caption').innerHTML= curimage;
    var nameOfBreed = document.getElementById('caption');
    if (curimage == 1) {
        nameOfBreed.innerHTML= ("Model X | SUV");
    } else if (curimage == 2) {
        nameOfBreed.innerHTML= ("Cyber Truck");
    } else if (curimage == 3) {
        nameOfBreed.innerHTML= ("Model S");
    } else if (curimage == 4) {
        nameOfBreed.innerHTML= ("Model X");
    } else if (curimage == 5) {
        nameOfBreed.innerHTML= ("Model S | Cyber Sedan");
    } else if (curimage == 6) {
        nameOfBreed.innerHTML= ("Pickup Truck");
    } else if (curimage == 7) {
        nameOfBreed.innerHTML= ("Roadster");
    } else if (curimage == 8) {
        nameOfBreed.innerHTML= ("ATV");
    } else if (curimage == 9) {
        nameOfBreed.innerHTML= ("Truck Semi");
    }
}
// function showSlideNum() {
//     var x = document.getElementById("myImg").alt;
//     document.getElementById("demo").innerHTML = x;
// }

function showNext() {
    curimage++;
    if (curimage>9) {
        curimage--;
        alert('This is the last picture!!');
    }
    document.images.slide.src='images/car'+curimage+'.jpg';
    showSlideNum();
}

function showPrev() {
    curimage--;
    if (curimage<0){
        curimage++;
    alert('There is no more picture before this one, click Next to see more Pictures!');
        }

        document.images.slide.src='images/car'+curimage+'.jpg';
        showSlideNum();
}

function clearImage() {
    curimage=0;
    showSlideNum();

}

function setfrequency(newFrequency){
    frequency=newFrequency;
    alert(frequency);

}

function showAuto(){
    curimage++;
    if (curimage>9) {
    curimage=0
    }

    document.images.slide.src='images/car'+curimage+'.jpg';
    showSlideNum();
    setTimeout('showAuto()', frequency);
}

function showStop() {
    document.location=document.location;
}
