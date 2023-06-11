let data = [
    {
      "id": 1,
      "name": "Cartera",
      "price": 100,
      "description": "Cartera artesanal hecha con materiales sostenibles",
      "img": "images/productos/slide1.jpg"
    },
    {
      "id": 2,
      "name": "Billetera",
      "price": 80,
      "description": "Billetera ecológica de diseño único",
    "img": "images/productos/slide3.jpg"
    },
    {
      "id": 3,
      "name": "Mochila",
      "price": 120,
      "img": "images/productos/slide4.jpg",
      "description": "Mochila resistente y sostenible para el día a día",
      "img": "images/productos/slide4.jpg"
    },
    {
      "id": 4,
      "name": "Bolsita de Coca",
      "price": 60,
      "description": "Bolsita de coca hecha a mano con detalles auténticos",
      "img": "images/productos/slide2.jpg"
    },
    {
      "id": 5,
      "name": "Polera",
      "price": 150,
      "description": "Polera de algodón orgánico con diseños inspirados en la cultura tradicional",
      "img": "images/productos/slide6.jpg"
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
          <p class="font-weight-bold">Precio: $${product.price}</p>
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