"use strict";

let wakeuptime = 7;
let noon = 12; 
let lunchtime = 12;
let naptime = lunchtime + 2; 
let partytime; 
let evening = 18;

let showCurrentTime = function() {
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    clock.innerText = clockTime;
};

let updateClock = function() {
    let time = new Date().getHours();
    let messageText;
    let image = "https://www.rover.com/blog/wp-content/uploads/2019/06/cat-2934720_1920-960x540.jpg";

    let timeEventJS = document.getElementById('timeEvent');
    let lolcatImageJS = document.getElementById('lolcatImage');

    if (time == partytime) {
        image = "https://www.catster.com/wp-content/uploads/2017/12/Kittens-celebrate-a-birthday-party.jpg";
        messageText = "it's party time!";
    }
    else if (time == wakeuptime) {
        image = "https://cdn.cnn.com/cnnnext/dam/assets/160121224634-kylo-ren-cat-adam-driver-large-169.jpg";
        messageText = "good morning";
    }
    else if (time == lunchtime) {
        image = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/people_foods_cats_can_eat_slideshow/1800x1200_people_foods_cats_can_eat_slideshow.jpg";
        messageText = "let's have some lunch!";
    }
    else if (time == naptime) {
        image = "https://up.gc-img.net/post_img/2015/03/AgQUkEMDkyzaO5x_q3DiY_2767.jpeg";
        messageText = "sleepy sleepy naptime";

    }
    else if (time < noon) {
        image = "https://live.staticflickr.com/2907/32857266511_c3d6011724_b.jpg";
        messageText = "good morning!";

    }
    else if (time >= evening) {
        image = "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/102117-cat-night-balcony.jpg";
        messageText = "good evening!";

    }
    else {
        image = "https://www.rover.com/blog/wp-content/uploads/2019/06/cat-2934720_1920-960x540.jpg";
        messageText = "good afternoon!";

    }
    
    console.log(messageText); 
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;
    
    showCurrentTime();
};

updateClock();

let oneSecond = 1000;
setInterval(updateClock, oneSecond);

let partyButton = document.getElementById('kalasknapp');

let partyEvent = function() {
    if (partytime < 0) {
        partytime = new Date().getHours();
        kalasknapp.innerText = "Avsluta kalas";
        kalasknapp.style.backgroundColor = "#0A8DAB";

    }
    else {
        partytime = -1;
        kalasknapp.innerText = "Tryck för kalas";
        kalasknapp.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

let wakeupTimeSelector = document.getElementById('vakna');
let lunchTimeSelector = document.getElementById('lunch');
let naptimeSelector = document.getElementById('vila');

let wakeupEvent = function() {
    wakeuptime = wakeupTimeSelector.value;
}

let lunchtimeEvent = function() {
    lunchtime = lunchTimeSelector.value;
}

let naptimeEvent = function() {
    naptime = naptimeSelector.value;
}

wakeupTimeSelector.addEventListener("change", wakeupEvent);
lunchTimeSelector.addEventListener("change", lunchtimeEvent);
naptimeSelector.addEventListener("change", lunchtimeEvent);



