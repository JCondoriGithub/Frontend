let button = document.getElementById("button");
let bottone = null;
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
fetch(url)
    .then(response => response.json())
    .then(json => {

        for (let i = 0; i < json.drinks.length; i++) {

            const product = document.createElement("div");
            product.className = "product";
            product.style.backgroundImage = "url(" + json.drinks[i].strDrinkThumb + ")";

            const productInfo = document.createElement("div");
            productInfo.className = "productInfo";

            const productName = document.createElement("p");
            productName.className = "productName";
            productName.id = "Cocktail";
            let drinkName = json.drinks[i].strDrink;
            productName.appendChild(document.createTextNode(json.drinks[i].strDrink));
            productInfo.appendChild(productName);

            const link = document.createElement("a");
            link.href = "#";
            const infoButton = document.createElement("div");
            infoButton.id = "infoButton";
            infoButton.className = "infobutton";
            infoButton.type = "button";
            infoButton.addEventListener("click", function() {showModal('Instructions', json.drinks[i].strInstructions)});
            infoButton.appendChild(document.createTextNode("MAGGIORI INFO"));
            link.appendChild(infoButton);
            productInfo.appendChild(link);

            product.appendChild(productInfo);
            document.querySelector(".products").appendChild(product);
            infoButton.addEventListener('click', function () {
                fetch(`${url}s=${drinkName}`)
                    .then(res => res.json())
                    .then(Json => {
                        console.log(Json);
                    })
            })
        }
    })


var modalWrap = null;
const showModal = (title, description) => {

    if (modalWrap != null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = ` 
        
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${description}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
}