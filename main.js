const productos = [
    { nombre: "Laptop", descripcion: "Laptop de 14 pulgadas con 8GB de RAM", precio:"$200" },
    { nombre: "Teléfono", descripcion: "Teléfono móvil con pantalla de 6.1 pulgadas",precio:"$300" },
    { nombre: "Tablet", descripcion: "Tablet de 10 pulgadas con 64GB de almacenamiento", precio: "$500" },
    { nombre: "Monitor", descripcion: "Monitor de 24 pulgadas con resolución Full HD", precio: "$150" },
    { nombre: "Teclado", descripcion: "Teclado mecánico RGB con teclas retroiluminadas", precio: "$100" },
    { nombre: "Mouse", descripcion: "Mouse inalámbrico ergonómico con 16000 DPI", precio:"$35" },
    { nombre: "Impresora", descripcion: "Impresora láser a color con conectividad WiFi", precio:"$275" },
    { nombre: "Auriculares", descripcion: "Auriculares Bluetooth con cancelación de ruido", precio:"$75"},
    { nombre: "Cámara Web", descripcion: "Cámara web HD con micrófono integrado", precio: "12" },
    { nombre: "Disco Duro", descripcion: "Disco duro externo de 1TB con USB 3.0", precio: "12" },
    { nombre: "Altavoces", descripcion: "Altavoces estéreo con subwoofer y sonido envolvente", precio: "232123" },
    { nombre: "Smartwatch", descripcion: "Reloj inteligente con monitor de frecuencia cardíaca", precio: "321" },
    { nombre: "Router", descripcion: "Router WiFi de doble banda con 4 antenas", precio: "" },
    { nombre: "Tarjeta Gráfica", descripcion: "Tarjeta gráfica de 6GB con soporte para 4K", precio: "" },
    { nombre: "Cargador Portátil", descripcion: "Cargador portátil de 10000mAh con puerto USB-C", precio: "" }
];
 
function sortP(productos){
return productos.sort((a,b) => a.nombre > b.nombre ? 1 : -1);
 
}
 
function searchProductByName(productos,nameSearched){
return productos.filter((product) => product.nombre.toLowerCase().includes(nameSearched.toLowerCase())
 
)
}
 
function showProducts(productos){
document.getElementById('productContainer').innerHTML = ''
}

function showProducts(productos) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

   
     
    productos.forEach(product => {
        //Manipulacion de DOM
        const divP = document.createElement("div");
        divP.classList.add("patito");
        divP.innerHTML = `<h3>${product.nombre}</h3> <p>${product.descripcion}</p> <p>${product.precio}</p> 
        <button>comprar</button>`;
        productContainer.appendChild(divP);
        
    });
     

    }
 
    showProducts(productos);
 
// Funcion para buscar productos
 
document.getElementById('search').addEventListener('input', function(){
    const searchedName = this.value;
    const filterP = searchProductByName(productos, searchedName);

    showProducts(filterP);

    //funcion de producto no hallado


    document.getElementById('search').addEventListener('input', function (){
        const searchedName = this.value;
        if(searchedName.includes(fiterP)){

        }
        else{
            document.getElementById("search").innerHTML = "";
            const P = document.createElement("p");
            P.innerHTML = "no se encontro el producto";
            productContainer.appendChild(P);
        }
        
        
    })


})






