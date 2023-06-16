let data = [
    {
      "id": 1,
      "name": "Billetera",
      "price": 85,
      "description":"Billetera ecológica de diseño único",
      "img": "images/productos/slide1.jpg",
      "color": " azul, naranja, negro, morado, guindo, lila.",
      "size": " 20cm largo x 10 cm alto (abierta)",
      "material": "Aguayo de lana de oveja.",
      "category":"billetera"
    },
    {
      "id": 2,
      "name": "Cartera de Mano",
      "price": 105,
      "description": "Cartera ecológica de diseño único",
      "img": "images/productos/slide3.jpg",
      "color": " Celeste, verde, fucsia, azul, naranja, negro, morado, blanco, guinda, lila, café",
      "size": " 26cm largo x 15 cm alto (abierta)",
      "material": " Aguayo de lana de oveja, Yute",
      "category":"cartera"
    },
    {
      "id": 3,
      "name": "Mochila",
      "price": 155,
      "img": "images/productos/slide4.jpg",
      "description": "Mochila resistente y sostenible para el día a día",
      "img": "images/productos/slide4.jpg",
      "color":"Plomo, naranja, celeste, fucsia, negro",
      "size": " 27cm largo x 23 cm alto (abierta)",
      "material": " Aguayo de Lana de oveja",
      "category":"mochila"
    },
    {
      "id": 4,
      "name": "Bolsita de Coca",
      "price": 70,
      "description": "Bolsita de coca hecha a mano con detalles auténticos",
      "img": "images/productos/slide2.jpg",
      "color": " Negro y franjas",
      "size": "20cm largo x 21 cm alto (abierta)",
      "material": "Aguayo de lana de oveja",
      "category":"coca"
    },
    {
      "id": 5,
      "name": "Polera",
      "price": 150,
      "description": "Polera de algodón orgánico con diseños inspirados en la cultura tradicional",
      "img": "images/productos/slide6.jpg",
      "color": "Blanco",
      "size": "Hombres tallas: XL L M S / Mujeres: L M S",
      "material":"Algodón",
      "category":"polera"
    }
  ];
  

  function generateProductCards(imagePath) {
  let html = '';
  
  data.forEach(product => {
    html += `
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="card shadow">
          <img src="${product.img}" class="card-img-top" alt="${product.name}" style="max-height: 300px;">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <button onclick={loadModal(${product.id})} href="#" class="btn btn-primary" data-toggle="modal" data-target="#modalProduct">Ver detalles</button>
          </div>
        </div>
      </div>
    `;
  });
  
  return html;
}



function loadModal(index) {
    const product = data.find(item => item.id === index);
    const modalContent = document.getElementById('modal-content');
  
    const modalHTML = `
      <div class="modal-header">
        <h5 class="modal-title text-white" id="modalProductLabel">Detalles del producto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex">
        <div class="col-sm-12 col-lg-6">
          <img src="/${product.img}" class="img-fluid modal-image" alt="${product.name}">
        </div>
        <div class="col-sm-12 col-lg-6 mt-2">
          <h4 class="text-primary">${product.name}</h4>
          <p class="font-weight-bold">Precio: BOB. ${product.price}</p>
          <p>${product.description}</p>
          <p class="font-weight-bold">Características:</p>
          <ul>
            <li>Material: ${product.material}</li>
            <li>Tamaño: ${product.size}</li>
            <li>Color: ${product.color}</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button onclick={senMessage('${product.name}')} type="button" class="btn btn-primary">Comprar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    `;
  
    modalContent.innerHTML = modalHTML;
  }
  
  
function senMessage (nombre){

  var phoneNumber = "59172897805";
  
  // Construye el mensaje personalizado solicitando más información sobre el accesorio
  var message = "Hola, estoy interesado en obtener más información sobre el accesorio '" + nombre + "'. ¿Podrías proporcionarme más detalles?";
  
  // Construye la URL de WhatsApp con el número de teléfono y el mensaje
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  
  // Abre la ventana de WhatsApp con el mensaje predefinido
  window.open(whatsappURL);
}

// Llamada a la función y asignación del resultado al div con id "listProduct"
function loadProducts() {
  document.getElementById('listProduct').innerHTML = generateProductCards('images/productos');
}

function loadCategory(category) {
  const accessory = document.getElementById('listProduct');
  document.getElementById('listProduct').innerHTML = "";
  accessory.classList.add('catalog-transition');
  setTimeout(() => {
  let html = '';
  data.forEach(product => {
    if(product.category == category){
      html += `
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="card shadow">
          <img src="${product.img}" class="card-img-top" alt="${product.name}" style="max-height: 300px;">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <button onclick={loadModal(${product.id})} href="#" class="btn btn-primary" data-toggle="modal" data-target="#modalProduct">Ver detalles</button>
          </div>
        </div>
      </div>
    `;
    }
  });
  document.getElementById('listProduct').innerHTML = html;
  accessory.classList.remove('catalog-transition');
  }, 300);
}

function modalImage(imagePath){
    let modalContent = document.getElementById('modalImage-content');
    modalContent.innerHTML = '';
  
    let img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Imagen ampliada';
    img.classList.add('img-fluid');
    img.classList.add('modal-image');
  
    modalContent.appendChild(img);
}

/**
 *       <button id="all-product" class="btn btn-pink mx-2 mt-2">Ver todos</button>
                    <button id="mochila-product" class="btn btn-pink-outline mx-2 mt-2 ">Mochilas</button>
                    <button id="billetera-product" class="btn btn-pink-outline mx-2 mt-2">Billeteras</button>
                    <button id="cartera-product" class="btn btn-pink-outline mx-2 mt-2">Carteras</button>
                    <button id="polera-product" class="btn btn-pink-outline mx-2 mt-2">Poleras</button>
                    <button id="coca-product" class="btn btn-pink-outline mx-2 mt-2">Bolsitas de Coca</button>
               
 */

document.getElementById('mochila-product').addEventListener('click', function() {
  loadCategory("mochila");
});

document.getElementById('billetera-product').addEventListener('click', function() {
  loadCategory("billetera");
});

document.getElementById('cartera-product').addEventListener('click', function() {
  loadCategory("cartera");
});

document.getElementById('polera-product').addEventListener('click', function() {
  loadCategory("polera");
});

document.getElementById('coca-product').addEventListener('click', function() {
  loadCategory("coca");
});

document.getElementById('all-product').addEventListener('click', function() {
  loadProducts();
});
              