

/** Задание 3

const url = "wss://echo-ws-service.herokuapp.com";
const inpBtn = document.querySelector(".inp__btn");
const inp = document.querySelector(".inp");
const divText = document.querySelector(".div__text");
const map = document.querySelector("#map");
const btnMap = document.querySelector(".inp__btn__map");
const statusMap = document.querySelector("#status");
let websocket = new WebSocket(url);

function writeScreen (mess){
    let create = document.createElement("div");
    create.className = `txt`;
    create.innerHTML = mess;
    divText.appendChild(create)
}


inpBtn.addEventListener("click", ()=>{
    writeScreen(inp.value);
    websocket.send(inp.value);
    websocket.onmessage = function(evt){
        writeScreen("Сервер: " + evt.data)
    }
    inp.value = "";
})
const error = ()=>{
    statusMap.textContent = "Невозможно получить ваше местоположение";
}
const success = (position) =>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    statusMap.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    map.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    map.textContent = 'Ссылка на карту';
}
btnMap.addEventListener("click", ()=>{
    map.href = "";
    map.textContent = "";
    if(!navigator.geolocation){
        statusMap.textContent = 'Geolocation не поддерживается вашим браузером';
    }else{
        statusMap.textContent = 'Определение местоположения...';
        navigator.geolocation.getCurrentPosition(success, error)
    }
})

 */




/** 2 Задание
let a = window.screen.height;
let b = window.screen.width;
const alertBtn = document.querySelector(".button__alert");
alertBtn.addEventListener("click", ()=>alert("Высота и ширина экрана равны: "+a + " " +b))
 */

/** 1 Задание 
const btn = document.querySelector(".btn");
const firstImg = document.querySelector(".first__img");
const secondImg = document.querySelector(".second__img")
btn.addEventListener("click", nextImg);
function nextImg() {
    firstImg.classList.toggle("first__img__active")
    secondImg.classList.toggle("second__img__active")
}
*/