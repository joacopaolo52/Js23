/* CONSTRUCTOR DE TIENDA*/

class Tienda {
    constructor (id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
          /* PRODUCTOS DE TIENDA*/
  
  const producto0 =  new Tienda(0, "Chicago Bulls Red", 330);
  const producto1 =  new Tienda(1, "Retskins Red", 400);
  const producto2 =  new Tienda(2, "Golden State Warriors", 300);
  const producto3 =  new Tienda(3, "Chicago Bulls Black", 370);
  const producto4 =  new Tienda(4, "Miami Heat Black", 330);
  const producto5 =  new Tienda(5, "Chicago Bulls Red & Black", 400);
  const producto6 =  new Tienda(6, "Jordan Red", 150);
  const producto7 =  new Tienda(7, "Nike White", 250);
  const producto8 =  new Tienda(8, "Jordan White", 200);
  const producto9 =  new Tienda(9, "Pyrex Red", 200);
  const producto10 =  new Tienda(10, "Jordan Red & White", 200);
  const producto11 =  new Tienda(11, "NY Blue & White", 250);
  
  
          /* ARRAY DE PRODUCTOS*/
  const gorras = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11];
  console.log(gorras);

          /* AGREGAR PRECIOS DE GORRAS[] */

const APG = (gorra, x) => {
        let precio = document.createElement("h5");
        precio.innerText = `Precio : $${gorra.precio}`;
        let divPadre;
        let button;
        if (x === "first") {
            divPadre = document.querySelector(`.gorras:${x}-child`);
            button = document.querySelector(`.addToCart:${x}-child`);
            divPadre.appendChild(precio);
        }
        else {
            divPadre = document.querySelector(`.gorras:nth-of-type(${x})`);
            button = document.querySelector(`.addToCart:nth-of-type(${x})`);
            divPadre.appendChild(precio);
        }
    }
    APG(gorras[0], "first");
    
    let x = 1;
    for (let i = 1; i < gorras.length; i++) {
        x++;
        APG(gorras[i], x);
    }

              /* AGREGAR NOMBRE DE GORRAS[] */

 const APN = (gorra, x) => {
         let nombre = document.createElement("h5");
         nombre.innerText = `${gorra.nombre}`;
         let divPadre;
         let button;
         if (x === "first") {
             divPadre = document.querySelector(`.gorras:${x}-child`);
             button = document.querySelector(`.gorrasIMG:${x}-child`);
             divPadre.appendChild(nombre);
         }
         else {
             divPadre = document.querySelector(`.gorras:nth-of-type(${x})`);
             button = document.querySelector(`.gorrasIMG:nth-of-type(${x})`);
             divPadre.appendChild(nombre);
         }
     }
     APN(gorras[0], "first");
    
      x = 1;
     for (let i = 1; i < gorras.length; i++) {
         x++;
         APN(gorras[i], x);
     }