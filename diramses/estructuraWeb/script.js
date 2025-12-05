let section2 = document.getElementById("section2");

let titulo = "mi titulo 2";


let texto = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sint illo, numquam vero obcaecati laboriosam
          reiciendis laudantium pariatur? Beatae nobis tempora veritatis at porro a laboriosam eum saepe provident ab!
`;

let img = "/Imagenes/main_image_star-forming_region_carina_nircam_final-5mb.webp";

let section3 = document.getElementById("section3");

let contenedor = document.getElementById("contenedor");

let articulo = document.createElement("article");

articulo.innerHTML= `
<div class="titulo">
    <h1>  ${titulo}  </h1>
</div>

<div class="texto">
    ${texto}
</div>

<div class="imagen">
    <img src="${img}">
</div>
`;

articulo.className = "articulo2";

section2.appendChild(articulo);

// Consumir el json

fetch("productos.json")
.then(response => response.json())
.then(data => {
    data.productos.forEach(p => {

        contenedor.innerHTML += `
        <div class= "card">

            <div class ="titulo">
                <h2> ${p.nombre} </h2>
            </div>

            <div class = "imagen">
                <img src = "${p.imagen}" >
        
            </div>

            <div class = "precio">
                <p> Precio: ${p.precio} € </p>
            
            </div>

            <div class="botones">
                <button>Comprar</button>
            </div> 
        
        </div>
        `;
        section3.appendChild(contenedor);

    }); //fin del forEach


    
})// fin del then

.catch(e => console.log(e))