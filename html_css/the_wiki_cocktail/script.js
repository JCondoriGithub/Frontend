let button = document.getElementById("button");
let bottone = null;
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
fetch(url)
    .then(response => response.json())
    .then(json => {
        //console.log(json);
        
        for(let i = 0; i < json.drinks.length; i++) {

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
            infoButton.className = "infoButton";
            infoButton.appendChild(document.createTextNode("MAGGIORI INFO"));
            link.appendChild(infoButton);
            productInfo.appendChild(link);

            product.appendChild(productInfo);
            document.querySelector(".products").appendChild(product);
            infoButton.addEventListener('click', function(){
            fetch(`${url}s=${drinkName}`)
                .then(res=> res.json())
                .then(Json => {
                    console.log(Json);
                })
        })
    }
    })


/*function searchApi (button){
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"
    fetch(`${url}s=${button}`)
    .then(response => response.json())
    .then(json => {
        let toReturn = {}
        let array = json.drinks;
       toReturn = array.shift();
       console.log(toReturn);
        let toappend = document.getElementById("infoButton");
        toappend.addEventListener('onclick', function(){
            let cocktailName = document.getElementById("textId");
            let ALMENODAMMIUNDEFINED = toReturn.strDrink;
            console.log(ALMENODAMMIUNDEFINED)
        })


        
        //result.forEach((Element)=>{
            //let modal = document.getElementById()
        //})

        
    })
}
searchApi(button);



button.addEventListener('click', function(){
    bottone = document.getElementById("input").value;
    let nameToSosbuite = document.getElementById("Cocktail")
    nameToSosbuite.innerHTML = bottone
    searchApi(bottone);
})*/
