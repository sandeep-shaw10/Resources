$(document).ready(function(){

    // All the jQuery scripts go here ...
    let loaded = true;


    //If loaded then call
    loaded && fetchApi();

    // Fetch Api
    async function fetchApi(){
        try{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.table(json))
        }catch(error){
            console.log(`Error: ${error}`)
        }
    }

  
});
