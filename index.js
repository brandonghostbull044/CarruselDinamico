const URLData = './datos.json';
const mainContainerSlider = document.getElementById('mainContainerSlider');
const leftButtomCounter = document.getElementsByClassName('leftButtomCounter');
const mainSliderTitle = document.getElementById('mainSliderTitle');
const mainSliderDescription =  document.getElementById('mainSliderDescription');
const mainContainerSliderLeft = document.getElementById('mainContainerSliderLeft');
const passButtomLeft = document.getElementById('passButtomLeft');
const passButtomRight = document.getElementById('passButtomRight');
const buttomChangeCard = document.getElementsByClassName('buttomChangeCard');
const card = document.getElementById("flipCardInner");
const buttom = document.getElementsByClassName('buttom');
const flipCardFront = document.getElementById('flipCardFront');
const flipCardBack = document.getElementById('flipCardBack');
const mainContainerSliderRightBottom = document.getElementById('mainContainerSliderRightBottom');
const buttomChangeCardContainer = document.getElementById('buttomChangeCardContainer');
const moreInfoButtomContainer = document.getElementById('moreInfoButtomContainer');
const mainContainerSliderRightTop = document.getElementById('mainContainerSliderRightTop');
const lista = [];
var deg = 0;
var front = true;

function definirNuevo(accion, Num) {
    const bActive = Number(document.querySelector('.active').getAttribute('id').substring(17)) - 1;
    if(accion == '-') {
        if((bActive -1) < 0) {
            return Num -1;
        } else {
            return bActive - 1;
        }
    } else if(accion == '+') {
        if((bActive + 1) > (Num - 1)) {
            return 0;
        } else {
            return bActive + 1;
        }
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function iniciar(URLData) {
    fetchData(URLData)
    .then((response) => {
        lista.push(response);
    })
    .then(() => {
        for (var i = 0; i < Object.values(lista[0].titles).length; i++) {
            objeto = document.createElement('div');
            objeto.setAttribute('id', Object.keys(lista[0].titles)[i]);
            objeto.classList.add('leftButtomCounter');
            objeto.classList.add(`${i == (lista[0].activeCardNumber - 1) ? 'active' : 'hover'}`);
            objeto.innerText =  `${i + 1}`;
            mainContainerSliderLeft.appendChild(objeto);
        }

        for (var i = 0; i < Object.values(lista[0].titles).length; i++) {
            leftButtomCounter[i].addEventListener('click', function(e) {

                const moreInfoButtom = document.getElementById('moreInfoButtom');
                const bActive = Number(document.querySelector('.active').getAttribute('id').substring(17));
                if(Number(e.target.id.substring(17)) > bActive) {
                    deg = deg + 360;
                } else if (Number(e.target.id.substring(17)) < bActive) {
                    deg = deg - 360;
                }
                card.setAttribute('style', `transform: rotateY(${deg}deg);`);
                e.target.classList.remove('hover');
                for(var i = 0; i < leftButtomCounter.length; i++) {
                    if (leftButtomCounter[i].classList.contains('active') && leftButtomCounter[i].id !=  e.target.id) {
                        leftButtomCounter[i].classList.remove('active');
                        leftButtomCounter[i].classList.add('hover');
                    }

                    mainContainerSlider.style.backgroundImage = `url(${lista[0].backgroundImages[e.target.id]})`;
                    mainSliderTitle.innerText = lista[0].titles[e.target.id];
                    mainSliderDescription.innerText = lista[0].descriptions[e.target.id];
                    moreInfoButtom.setAttribute('href', lista[0].links[e.target.id]);
                    e.target.classList.add('active');
                    setTimeout(function() {
                        flipCardFront.style.backgroundImage = `url(${lista[0].cardImages[leftButtomCounter[e.target.id].id]})`;
                    }, 300);
                }
            });
        }

        for (var i = 0; i < buttomChangeCard.length; i ++) {
            buttomChangeCard[i]. addEventListener('click', function(e) {

                const moreInfoButtom = document.getElementById('moreInfoButtom');
                const bActive = Number(document.querySelector('.active').getAttribute('id').substring(17)) - 1;
                if (e.target.id == 'passButtomLeft') {
                    const izquierdo = definirNuevo('-', leftButtomCounter.length);
                    deg = deg - 360;
                    card.setAttribute('style', `transform: rotateY(${deg}deg);`);
                    leftButtomCounter[bActive].classList.remove('active');
                    leftButtomCounter[bActive].classList.add('hover');
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].backgroundImages[leftButtomCounter[izquierdo].id]})`;
                    mainSliderTitle.innerText = lista[0].titles[leftButtomCounter[izquierdo].id];
                    mainSliderDescription.innerText = lista[0].descriptions[leftButtomCounter[izquierdo].id];
                    moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[izquierdo].id]);
                    leftButtomCounter[izquierdo].classList.remove('hover');
                    leftButtomCounter[izquierdo].classList.add('active');
                    setTimeout(function() {
                        flipCardFront.style.backgroundImage = `url(${lista[0].cardImages[leftButtomCounter[izquierdo].id]})`;
                    }, 300);
                } else {
                    const derecho = definirNuevo('+', leftButtomCounter.length);
                    deg = deg + 360;
                    card.setAttribute('style', `transform: rotateY(${deg}deg);`);
                    leftButtomCounter[bActive].classList.remove('active');
                    leftButtomCounter[bActive].classList.add('hover');
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].backgroundImages[leftButtomCounter[derecho].id]})`;
                    mainSliderTitle.innerText = lista[0].titles[leftButtomCounter[derecho].id];
                    mainSliderDescription.innerText = lista[0].descriptions[leftButtomCounter[derecho].id];
                    moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[derecho].id]);
                    leftButtomCounter[derecho].classList.remove('hover');
                    leftButtomCounter[derecho].classList.add('active');
                    setTimeout(function() {
                        flipCardFront.style.backgroundImage = `url(${lista[0].cardImages[leftButtomCounter[derecho].id]})`;
                    }, 300);
                }
            });
        }

        if (screen.width < 768) {
            const newNodeDiv = document.createElement('div');
            const newNodeA = document.createElement('a');
            const newNodeDiv2 = document.createElement('div');
            newNodeDiv.setAttribute('id', 'moreInfoButtomContainer');
            newNodeA.setAttribute('target', '_blank');
            newNodeA.setAttribute('id', 'moreInfoButtom');
            newNodeDiv2.setAttribute('class', 'buttonMore');
            newNodeDiv2.innerText = 'Read more';
            newNodeDiv.appendChild(newNodeA);
            newNodeA.appendChild(newNodeDiv2);
            mainContainerSliderRightTop.removeChild(moreInfoButtomContainer);
            mainContainerSliderRightBottom.insertBefore(newNodeDiv, buttomChangeCardContainer);
        }
        
        const moreInfoButtom = document.getElementById('moreInfoButtom');
        mainContainerSlider.style.backgroundImage = `url(${lista[0].backgroundImages[leftButtomCounter[(lista[0].activeCardNumber - 1)].id]})`;
        mainSliderTitle.innerText = lista[0].titles[leftButtomCounter[(lista[0].activeCardNumber - 1)].id];
        mainSliderDescription.innerText = lista[0].descriptions[leftButtomCounter[(lista[0].activeCardNumber - 1)].id];
        moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[(lista[0].activeCardNumber - 1)].id]);
        flipCardFront.style.backgroundImage = `url(${lista[0].cardImages[leftButtomCounter[(lista[0].activeCardNumber - 1)].id]})`;
        flipCardBack.style.backgroundColor = lista[0].cardBackBackgroundColor;
        moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[(lista[0].activeCardNumber - 1)].id]);
    })
}

iniciar(URLData);