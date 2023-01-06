// funzione per la richiesta fetch
async function myFetch() {
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    let json = await response.json();
    return json.drinks;
}

// modale dinamica
var modalWrap = null;
const showModal = (description1, description2, description3, description4, ingredients) => {

    if (modalWrap != null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = ` 
        
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content p-3 mb-2 bg-black text-white">
                <div class="modal-header">
                    <h5 class="modal-title">Istruzioni</h5>
                    <button type="button" class="btn-close p-3 mb-2 bg-white text-dark" data-bs-dismiss="modal" aria-label="Close"></button>
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

// funzione per creare le carte dinamiche tramite un array filtrato
function createCards(json) {

    for (let i = 0; i < json.length; i++) {

        const product = document.createElement("div");
        product.className = "product";
        product.style.backgroundImage = "url(" + json[i].strDrinkThumb + ")";

        const productInfo = document.createElement("div");
        productInfo.className = "productInfo";

        const productName = document.createElement("p");
        productName.className = "productName";
        productName.id = "Cocktail";
        productName.appendChild(document.createTextNode(json[i].strDrink));
        productInfo.appendChild(productName);

        const ingredients = [];
        let ingredient = "value"
        let count = 1;

        while(ingredient != null) {
        
            ingredients.push(json[i]["strIngredient" + count]);
            ingredient = json[i]["strIngredient" + count];
            count++;
        };
        ingredients.pop();

        const div = document.createElement("div");
        const infoButton = document.createElement("button");
        infoButton.type = "button";
        infoButton.className = "btn btn-outline-light mt-3 mb-4";
        infoButton.addEventListener("click", function() {
            showModal(json[i].strInstructions, json[i].strInstructionsES, json[i].strInstructionsDE, json[i].strInstructionsIT, ingredients)
        });
        infoButton.appendChild(document.createTextNode("MAGGIORI INFO"));

        div.appendChild(infoButton);
        productInfo.appendChild(div);
        product.appendChild(productInfo);
        document.querySelector(".products").appendChild(product);
    }
}

// funzione per cancellare tutte le carte
function deleteCards() {

    const newProducts = document.createElement("div");
    newProducts.className = "products";
    const oldProducts = document.querySelector(".products");
    document.querySelector(".divProducts").replaceChild(newProducts, oldProducts);
}

// funzione che filtra gli elementi di un array
function filterCards(chars) {
    return function(value) {
        return value.strDrink.toUpperCase().includes(chars.toUpperCase())
    }
}

// all'evento 'keyup', si esegue la funzione 'searchCocktail'
document.getElementById("input").addEventListener('keyup', searchCocktail);

async function searchCocktail() {

    deleteCards();

    let chars = document.getElementById("input").value;
    let arr = await arrayRes;
    let result = arr.filter(filterCards(chars));

    createCards(result);
}

// il valore di ritorno della funzione si inserisce nella variabile
let arrayRes;
arrayRes = myFetch();

// funzione per creare le carte dinamiche con il json NON ancora filtrato
async function createCardsJson() {

    let json = await arrayRes;
    createCards(json);
}

createCardsJson();