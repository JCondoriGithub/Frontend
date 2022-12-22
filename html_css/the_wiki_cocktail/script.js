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
            productName.appendChild(document.createTextNode(json.drinks[i].strDrink));
            productInfo.appendChild(productName);

            const ingredients = [];
            let ingredient = "value"
            let count = 1;

            while(ingredient != null) {
            
                ingredients.push(json.drinks[i]["strIngredient" + count]);
                ingredient = json.drinks[i]["strIngredient" + count];
                count++;
            };
            console.log(ingredients);
            ingredients.pop();

            const div = document.createElement("div");
            const infoButton = document.createElement("button");
            infoButton.type = "button";
            infoButton.className = "btn btn-outline-light mt-3 mb-4";
            infoButton.addEventListener("click", function() {
                showModal(json.drinks[i].strInstructions, json.drinks[i].strInstructionsES, json.drinks[i].strInstructionsDE, json.drinks[i].strInstructionsIT, ingredients)
            });
            infoButton.appendChild(document.createTextNode("MAGGIORI INFO"));

            div.appendChild(infoButton);
            productInfo.appendChild(div);
            product.appendChild(productInfo);
            document.querySelector(".products").appendChild(product);
        }
    })

var modalWrap = null;
const showModal = (description1, description2, description3, description4, ingredients) => {

    if (modalWrap != null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = ` 
        
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Istruzioni</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <h2 class="fs-5">English</h2>
                    <p>${description1}</p>
                    <hr>
                    <h2 class="fs-5">Español</h2>
                    <p>${description2}</p>
                    <hr>
                    <h2 class="fs-5">Deutsch</h2>
                    <p>${description3}</p>
                    <hr>
                    <h2 class="fs-5">Italiano</h2>
                    <p>${description4}</p>
                </div>
                <hr>
                <div class="modal-body">
                    <h2 class="fs-5">Ingredienti</h2>
                    <p>${ingredients.join(', ')}</p>
                </div>
                </div>
            </div>
        </div>
    `;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
}
