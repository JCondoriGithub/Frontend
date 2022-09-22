fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

    .then(response => response.json())
    .then(json => {
        const result = json;
        console.log(result);

        
    })