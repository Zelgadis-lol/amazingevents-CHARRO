import data from "./data.js";

// let detalle = document.querySelector("#detalle");
const queryString = window.location.search;

const params = new URLSearchParams(queryString)
const ID = params.get("id");

const evento = data.events.find(item => item._id == ID);

const fragment = document.createDocumentFragment();
const container = document.getElementsByTagName("main");

function creoDetalle(datos, contenedor) {
  contenedor[0].innerHTML = "";

  let div = document.createElement("div");
  div.className = "container p-0 detalle";
  div.innerHTML += `
        <div class="detimg d-flex justify-content-center">
					<img src="${datos.image}" class="img-fluid rounded-start" alt="...">
				</div>
				<div class="dettext">
					<div class="card-body" style="margin-bottom: 20px;">
						<h5 class="card-titleD bold d-flex justify-content-center">${datos.name}</h5>
						<p class="card-textD d-flex justify-content-center">${datos.description}</p>
					</div>
					<div class="details-deta d-flex justify-content-around ">
						<p>Date: ${datos.date}</p>
						<p>Category: ${datos.category}</p>
						<p>Place: ${datos.place}</p>
					</div>
					<div class="details-deta d-flex justify-content-around">
						<p>Capacity: ${datos.capacity}</p>
						<p>Assistance: ${datos.assistance}</p>
						<p>Price: ${datos.price}</p>
					</div>
				</div>
    `;
  fragment.appendChild(div);

  contenedor[0].appendChild(fragment);
}

creoDetalle(evento, container);