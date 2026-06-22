const btnAgregar = document.getElementById("btnAgregar");
const tablaBody = document.querySelector("#tabla tbody");
const totalGeneral = document.getElementById("totalGeneral");
const productoSelect = document.getElementById("productoSelect");
const productImage = document.getElementById("productImage");

const productImages = {
  "Manzanas": "https://www.bupasalud.com.co/sites/default/files/inline-images/fuji-red.jpg",
  "Platanos": "https://static.libertyprim.com/files/familles/banane-large.jpg?1569271725",
  "Espinacas": "https://fundacionmujeresempresarias.org/wp-content/uploads/2016/08/espinacas.png",
  "Zanahorias": "https://i.blogs.es/127977/carrots-2387394_1280-1-/1366_2000.jpg",
  "Tomates": "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
  "Pollo": "https://imarkt.co/wp-content/uploads/2021/02/Pollo-Entero-Unidad-iMarkt.co_.jpg",
  "Huevos": "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/por-que-los-huevos-tienen-forma-de-huevo.jpg",
  "Salmon": "https://soycomocomo.es/media/2016/02/salmon-600.gif",
  "Carne de res": "https://thefoodtech.com/wp-content/uploads/2020/05/carne-de-res.jpg",
  "Atun en lata": "https://www.futbolred.com/files/image_800_600/uploads/2024/07/09/668da56b249b5.jpeg",
  "Arroz": "https://www.gastronomiavasca.net/uploads/image/file/3900/arroz_basmati.jpg",
  "Avena en hojuelas": "https://nueceteria.com/wp-content/uploads/2025/04/avena-hojuelas.jpg",
  "Pasta": "https://i.blogs.es/4dff8b/pasta-mantequilla/840_560.jpg",
  "Papa": "https://noticias.upc.edu.pe/wp-content/uploads/2022/05/Foto-Dia-Nacional-de-la-Papa-05.jpg",
  "Leche": "https://incalec.org/storage/2021/07/milk-and-glass-scaled.jpg",
  "Queso": "https://mahesoprofesional.com/wp-content/uploads/2021/06/origen-queso.jpg",
  "Aceite de oliva": "https://almazaralaorganic.com/wp-content/uploads/2024/12/aceite-de-oliva.jpeg",
  "Lentejas": "https://vimafoods.com/wp-content/uploads/2024/09/lentejas_2.webp",
  "Frijoles": "https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-frijoles-mexicanos.jpg",
  "Harina": "https://nomen.es/wp-content/uploads/2023/05/harinas-trigo.jpg"
};

productoSelect.addEventListener("change", function() {
  const producto = this.value;
  const imgUrl = productImages[producto] || "";
  productImage.src = imgUrl;
  productImage.alt = producto;
});

productoSelect.dispatchEvent(new Event('change'));

btnAgregar.addEventListener("click", () => {
  const nombre = productoSelect.value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor complete todos los campos.");
    return;
  }

  agregarProducto(nombre, cantidad, precio);
  limpiar();
});

function agregarProducto(nombre, cantidad, precio) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
            <td>${nombre}</td>

            <td>
                <button class="menos">-</button>
                <span class="cant">${cantidad}</span>
                <button class="mas">+</button>
            </td>

            <td>
                $<span class="precio">${precio}</span>
                <button class="editarPrecio">E</button>
            </td>

            <td>$<span class="total">${(cantidad * precio).toFixed(
              2
            )}</span></td>

            <td><button class="eliminar">X</button></td>
        `;

  tablaBody.appendChild(tr);
  recalcularTotal();
}

function limpiar() {
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
}

tablaBody.addEventListener("click", function (e) {
  const fila = e.target.closest("tr");

  if (e.target.classList.contains("mas")) {
    let cant = fila.querySelector(".cant");
    cant.textContent = parseInt(cant.textContent) + 1;
  }

  if (e.target.classList.contains("menos")) {
    let cant = fila.querySelector(".cant");
    let actual = parseInt(cant.textContent);
    if (actual > 0) cant.textContent = actual - 1;
  }

  if (e.target.classList.contains("editarPrecio")) {
    let precioSpan = fila.querySelector(".precio");
    const nuevo = prompt("Nuevo precio:", precioSpan.textContent);
    if (nuevo !== null && !isNaN(parseFloat(nuevo))) {
      precioSpan.textContent = parseFloat(nuevo);
    }
  }

  if (e.target.classList.contains("eliminar")) {
    fila.remove();
  }

  actualizarFila(fila);
  recalcularTotal();
});

function actualizarFila(fila) {
  const cant = parseInt(fila.querySelector(".cant").textContent);
  const precio = parseFloat(fila.querySelector(".precio").textContent);

  const total = fila.querySelector(".total");
  total.textContent = (cant * precio).toFixed(2);

  if (cant === 0) {
    fila.classList.add("low-stock");
  } else {
    fila.classList.remove("low-stock");
  }
}

function recalcularTotal() {
  let suma = 0;

  const totales = document.querySelectorAll("#tabla tbody .total");

  totales.forEach((t) => {
    const valor = parseFloat(t.textContent);
    if (!isNaN(valor)) {
      suma += valor;
    }
  });

  totalGeneral.textContent = "Total general: $" + suma.toFixed(2);
}