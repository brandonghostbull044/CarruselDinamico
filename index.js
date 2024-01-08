const URLData = './datos.json';
const mainContainerSlider = document.getElementById('mainContainerSlider');
const leftButtomCounter = document.getElementsByClassName('leftButtomCounter');
const mainSliderTitle = document.getElementById('mainSliderTitle');
const mainSliderDescription =  document.getElementById('mainSliderDescription');
const moreInfoButtom = document.getElementById('moreInfoButtom');
const mainContainerSliderLeft = document.getElementById('mainContainerSliderLeft');
const passButtomLeft = document.getElementById('passButtomLeft');
const passButtomRight = document.getElementById('passButtomRight');
const buttomChangeCard = document.getElementsByClassName('buttomChangeCard');
const card = document.getElementById("flipCardInner");
const buttom = document.getElementsByClassName('buttom');
const lista = [];
var deg = 0;

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
            objeto.classList.add(`${i == 0 ? 'active' : 'hover'}`);
            objeto.innerText =  `${i + 1}`;
            mainContainerSliderLeft.appendChild(objeto);
        }

        for (var i = 0; i < Object.values(lista[0].titles).length; i++) {
            leftButtomCounter[i].addEventListener('click', function(e) {
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
                }
            });
        }

        for (var i = 0; i < buttomChangeCard.length; i ++) {
            buttomChangeCard[i]. addEventListener('click', function(e) {
                const bActive = Number(document.querySelector('.active').getAttribute('id').substring(17)) - 1;
                if (e.target.id == 'passButtomLeft') {
                    const izquierdo = definirNuevo('-', leftButtomCounter.length);
                    deg = deg - 180;
                    card.setAttribute('style', `transform: rotateY(${deg}deg);`);
                    leftButtomCounter[bActive].classList.remove('active');
                    leftButtomCounter[bActive].classList.add('hover');
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].backgroundImages[leftButtomCounter[izquierdo].id]})`;
                    mainSliderTitle.innerText = lista[0].titles[leftButtomCounter[izquierdo].id];
                    mainSliderDescription.innerText = lista[0].descriptions[leftButtomCounter[izquierdo].id];
                    moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[izquierdo].id]);
                    leftButtomCounter[izquierdo].classList.remove('hover');
                    leftButtomCounter[izquierdo].classList.add('active');
                } else {
                    const derecho = definirNuevo('+', leftButtomCounter.length);
                    deg = deg + 180;
                    card.setAttribute('style', `transform: rotateY(${deg}deg);`);
                    leftButtomCounter[bActive].classList.remove('active');
                    leftButtomCounter[bActive].classList.add('hover');
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].backgroundImages[leftButtomCounter[derecho].id]})`;
                    mainSliderTitle.innerText = lista[0].titles[leftButtomCounter[derecho].id];
                    mainSliderDescription.innerText = lista[0].descriptions[leftButtomCounter[derecho].id];
                    moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[derecho].id]);
                    leftButtomCounter[derecho].classList.remove('hover');
                    leftButtomCounter[derecho].classList.add('active');
                }
            });
        }
        mainContainerSlider.style.backgroundImage = `url(${lista[0].backgroundImages[leftButtomCounter[0].id]})`;
        mainSliderTitle.innerText = lista[0].titles[leftButtomCounter[0].id];
        mainSliderDescription.innerText = lista[0].descriptions[leftButtomCounter[0].id];
        moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[0].id]);
    })
}

iniciar(URLData);