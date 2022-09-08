let Pizzas = [
    { id:1,
     nombre:"Calabreza",
     ingredientes: ['tomate','queso','salame'],
     precio: 2000,
    },
  
    { id:2,
      nombre:"Atun",
      ingredientes: ['queso','atun','huevo duro','salsa','aceitunas','morron'],
      precio: 1000,
    },
  
    {id:3,
     nombre:"Alemana",
     ingredientes: ['muza','salsa','relleno de morron','relleno de panceta','aceitunas','salchichas'],
     precio: 1500,
    },
  
    {id:4,
      nombre:"Palta",
      ingredientes: ['queso cremoso','salsa de tomate','pico de gallo','palta'],
      precio: 1600,
    },
  
    {id:5,
      nombre:"Rucula y Crudo",
      ingredientes: ['queso','rucula','salsa de tomate','jamon crudo','queso rallado'],
      precio: 1200,
    },
  
    { id:6,
      nombre:"Muzzarella",
      ingredientes: ['muza','salsa','morron','oregano'],
      precio: 800,
    },
  ]



  const infoPizza = document.querySelector('.info-pizza')
  const input = document.querySelector('.seleccionar');
  const seleccionarBtn = document.querySelector('.seleccionar-b');
  const errorMessage = document.querySelector('.error-message')

  //nuevo array donde se guardan las pizzas filtradas en pizzaId
  let nuevoPizzas = []


  const pizzaId = () => {

    const filterId = input.value;

    if(!filterId.length){
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorNoneText();
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

      } else if(filterId < 1 || filterId > 6){
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorOptions()
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

      } else if(
        nuevoPizzas = Pizzas.filter(pizza => pizza.id === parseInt(filterId))
      ){
        errorMessage.style.visibility = 'hidden';
      }

      renderPizza(nuevoPizzas);
     
    }
      
      
   //se crea el html, recibe el array de pizzas original como parametro.
   const createHtmlPizza = pizzas => {
        return `<h2 class="title"><p>Variedad: </p>${pizzas.nombre}</h2>
        <h4 class="precio"><p>Precio: </p>$${pizzas.precio}</h4>`
    }

    const createHtmlErrorNoneText = () => {
        return `<h3 class="message">Por favor, elige una pizza!</h3>`
    }

    const createHtmlErrorOptions = () => {
        return `<h3 class="message">Tienen que ser solo opciones del 1 a 6!</h3>`
    }

  const renderPizza = pizza => infoPizza.innerHTML = pizza.map(pizzita => createHtmlPizza(pizzita))
     


  const init = () => {
    seleccionarBtn.addEventListener('click', pizzaId)
    errorMessage.style.visibility = 'hidden';
    
    }


  init();
