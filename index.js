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
const docenteCard = document.getElementById('docenteCard');
const lista = [];


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
    .then((response) => {
        for (var i = 0; i < Object.values(lista[0].titulos).length; i++) {
            objeto = document.createElement('div');
            objeto.setAttribute('id', Object.keys(lista[0].titulos)[i]);
            objeto.classList.add('leftButtomCounter');
            objeto.classList.add(`${i == 0 ? 'active' : 'hover'}`);
            objeto.innerText =  `${i + 1}`;
            mainContainerSliderLeft.appendChild(objeto);
        }


        for (var i = 0; i < Object.values(lista[0].titulos).length; i++) {
            leftButtomCounter[i].addEventListener('click', function(e) {
                e.target.classList.remove('hover');
                for(var i = 0; i < leftButtomCounter.length; i++) {
                    if (leftButtomCounter[i].classList.contains('active') && leftButtomCounter[i].id !=  e.target.id) {
                        leftButtomCounter[i].classList.remove('active');
                        leftButtomCounter[i].classList.add('hover');
                    }
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].imagenes[e.target.id]})`;
                    mainSliderTitle.innerText = lista[0].titulos[e.target.id];
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].imagenes[e.target.id]})`;
                    mainSliderDescription.innerText = lista[0].descripciones[e.target.id];
                    moreInfoButtom.setAttribute('href', lista[0].links[e.target.id]);
                    docenteCard.style.backgroundImage = `url(${lista[0].cardImages[e.target.id]})`;
                    e.target.classList.add('active');
                }
            });
        }


        function definirNuevo(accion) {
            const bActive = Number(document.querySelector('.active').getAttribute('id').substring(17, 18)) - 1;
            idN = Number(bActive);
            if(accion == '-') {
                if((idN -1) < 0) {
                    return 7;
                } else {
                    return idN - 1;
                }
            } else if(accion == '+') {
                if((idN + 1) > 7) {
                    return 0;
                } else {
                    return idN + 1;
                }
            }
        }


        for (var i = 0; i < buttomChangeCard.length; i ++) {
            buttomChangeCard[i]. addEventListener('click', function(e) {
                const izquierdo = definirNuevo('-');
                const derecho = definirNuevo('+');
                const bActive = Number(document.querySelector('.active').getAttribute('id').substring(17, 18)) - 1;
                if (e.target.id == 'passButtomLeft') {
                    console.log(leftButtomCounter[bActive]);
                    leftButtomCounter[bActive].classList.remove('active');
                    leftButtomCounter[bActive].classList.add('hover');

                    mainContainerSlider.style.backgroundImage = `url(${lista[0].imagenes[leftButtomCounter[izquierdo].id]})`;
                    mainSliderTitle.innerText = lista[0].titulos[leftButtomCounter[izquierdo].id];
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].imagenes[leftButtomCounter[izquierdo].id]})`;
                    mainSliderDescription.innerText = lista[0].descripciones[leftButtomCounter[izquierdo].id];
                    moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[izquierdo].id]);
                    docenteCard.style.backgroundImage = `url(${lista[0].cardImages[leftButtomCounter[izquierdo].id]})`;
                    leftButtomCounter[izquierdo].classList.add('active');
                } else {
                    leftButtomCounter[bActive].classList.remove('active');
                    leftButtomCounter[bActive].classList.add('hover');

                    mainContainerSlider.style.backgroundImage = `url(${lista[0].imagenes[leftButtomCounter[derecho].id]})`;
                    mainSliderTitle.innerText = lista[0].titulos[leftButtomCounter[derecho].id];
                    mainContainerSlider.style.backgroundImage = `url(${lista[0].imagenes[leftButtomCounter[derecho].id]})`;
                    mainSliderDescription.innerText = lista[0].descripciones[leftButtomCounter[derecho].id];
                    moreInfoButtom.setAttribute('href', lista[0].links[leftButtomCounter[derecho].id]);
                    docenteCard.style.backgroundImage = `url(${lista[0].cardImages[leftButtomCounter[derecho].id]})`;
                    leftButtomCounter[derecho].classList.add('active');
                }
            });
        }
    }) 
}

iniciar(URLData);