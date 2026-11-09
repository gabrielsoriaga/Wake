// Initialize title, descriptions
const img = document.querySelector(".image img");
const imgLabel = document.querySelector(".image p");
const infoCity = document.querySelector(".info .city");
const infoName = document.querySelector(".info h3");
const infoDesc = document.querySelector(".info .desc")
const infoMap = document.querySelector(".info .google-maps-btn");

const locationContent = {
    "1": {
        image: "../Website Visuals/alforsancableparkimg.jpg",
        city: "KHALIFA CITY",
        name: "AL FORSAN PARK",
        info: "A purpose-built cable wakeboarding setup where riders are pulled around the lake without a boat. Ask about beginner coaching, equipment rental, and current session times when booking.",
        map: "https://maps.app.goo.gl/JtCmcRBkysaw9hTh7"
    },
    "2": {
        image: "../Website Visuals/maya.jpg",
        city: "ABU DHABI COAST",
        name: "AL MAYA ISLAND",
        info: "The protected waters around Al Maya are a scenic setting for boat-based watersports. Wakeboarding is operator-dependent, so arrange a session and island transfer before making the trip.",
        map: "https://maps.app.goo.gl/UxA1DHvwapc5XEDg9"
    },
    "3": {
        image: "../Website Visuals/yasbeach.jpg",
        city: "YAS ISLAND",
        name: "YAS BEACH",
        info: "A convenient city-side watersports base with calm coastal views. Contact the current beach operator to confirm wakeboarding availability, age rules, and sea conditions before visiting.",
        map: "https://maps.app.goo.gl/4kUp5kkGhTUHJ8X5A"
    }
}

let index = 1;

function displayLocation() {
    const locationNum = index;
    const content = locationContent[locationNum]

    img.src = content.image;
    imgLabel.textContent = content.name;
    infoCity.textContent = content.city;
    infoName.textContent = content.name;
    infoDesc.textContent = content.info;    
    infoMap.href = content.map;

}

function toggleNext(event) {
    index++;
    displayLocation()
}

function toggleBack(event) {
    index--;
    displayLocation()
}