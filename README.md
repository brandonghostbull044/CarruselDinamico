
# Flip Card Carrusel

Un carrusel diferente para tu WEB.


## Caracterisaticas

- Salto entre cartas en bucle
- Consumo de datos desde archivo .json
- Responsivo
- Selleción de las tarjetas desde botones de cambio o botones contadores
- Consumo de datos desde archivo .json, para evitar modificar el código


## Screenshots

![App Screenshot](https://cdn.pixabay.com/photo/2024/01/09/17/07/17-07-25-951_1280.png)


## Modificación del archivo .json

El contenido y número de tarjetas se consume desde el archivo "datos.json", el cual consta de 11 claves:

    -"activeCardNumber". Determina el número de la tarjeta que estará activa por defecto. 
    Solo debe de haber un valor (mayor a  0).

    -"cardBackBackgroundColor". Determina el color de fondo de la parte trasera de la tarjeta. 
    Solo debe de haber un valor en hexadecimal, rgb o rgba.

    -"buttomColor". Determina el color de fondo del botón de redirección. 
    Solo debe de haber un valor en hexadecimal, rgb o rgba.

    -"counterColor". Determina el color de fondo de los circulos contadores de tarjetas. 
    Solo debe de haber un valor en hexadecimal, rgb o rgba.

    -"buttomChangeColor". Determina el color de fondo de los botones de cambio de tarjetas. 
    Solo debe de haber un valor en hexadecimal, rgb o rgba.

    -"buttomText". Determina el texto del botón de redirección, no debe sobrepasar los 11 caracteres o el texto se desbordará.

    -"titles". Es un diccionario con claves. Determina los titúlos para cada tarjeta y a su vez 
    determina el número de tarjetas que habrá. 

    -"descriptions". Es un diccionario con claves. 
    Determina las descripciones para cada tarjeta. Debe de haber el mismo número de claves que en "titles".

    -"backgroundImages". Es un diccionario con claves. Determina la imágen de fondo de la página, 
    el cual cambiará con cada cambio de tarjeta para cada tarjeta. Debe de haber el mismo número de claves que en "titles".

    -"cardImages". Es un diccionario con claves. Determina las imágenes de fondo para cada tarjeta. 
    Debe de haber el mismo número de claves que en "titulos".
    
    -"links". Es un diccionario con claves. Determina el link de redirección del botón, el cual 
    cambia con cada cambio de tarjeta. Debe de haber el mismo número de claves que en "titulos".

La clave "titles" determina el el número de tarjetas que habrá, por ende las claves "descriptions", "backgroundImages", "cardImages" y "links" deben de tener el mismo número de claves que la clave "titles". Para añadir una tarjeta adicional solo duplica el nombre de la clave "leftButtomCounter1" cambiando el número (debe ser el consecutivo a tarjeta aanterior). El órden de clada clave "leftButtomCounter" debe de estar en sincronía con el órden de las demás ya que se hará el cambio de contenido al cambiar de tarjeta en ese órden.

**Nota: Es importante no modificar las los nommbres de las claves, así como respeta la consecusión de las mismas, ya que si alguna clave no está en consecusión o es diferente el código no funcionará.**


## Demo

https://brandonghostbull044.github.io/FlipCardCarousel/


## Descarga

Descarga el código de este carrusel.

```bash
  git clone git@github.com:brandonghostbull044/FlipCardCarousel.git
```
    
## Soporte

Contactáctame a brandonleongonzalezdev@gmail.com


## Autor

- [@brandonghostbull044](https://www.github.com/brandonghostbull044)


