console.log("Script de la sesion Web07");

// getElementBy Id :  Seleccionar y obtener una referencia a un elemento HTML.
document.getElementById("title").innerHTML = "El elote en CDMX cuesta $30.00"

function handleTitle(){
    document.getElementById("title").style.color = "red";
}

function changeColor(color){
    document.getElementById("description").style.color = color;
}

function changeColorTextUsingThis(color, elementRef){
    console.log(elementRef);
    elementRef.style.color = color;

    // El elemento HTML no tiene un id asignado
    // documento.getElementByUD(?)
}

function changeColorUsingClass(){
    // getElementsByClassName: seleccionar y devolver una colleción de elementos de HTML que tienen un atributo de clase específico.
    const collection = document.getElementsByClassName("title-article");
    console.log(collection);

    for( index = 0; index < collection.length; index++ ){
        console.log("Elemento Modificado: " + collection[index].innerHTML);
        collection[index].style.color = '#9FE2BF';
    }
}

    // lo anterior podemos sustituirlo invicando la sig. función
    // changeColorOfCollection(collection, "black") ;


    function changeColorUsingTag(){
        // opción 1: ir a todos los paragraps y agreggarla una clase. Ej. class="paragraph-style"
        // const collection = document.getElementsByClassName("title-article");
        const collection = document.getElementsByTagName("p");
        changeColorOfCollection(collection, "black") ;
     }
     
     function changeColorOfCollection( collection, color ){
         console.log( collection );
         console.log( collection.length ); 
     
         for( index = 0; index < collection.length; index++ ){
             console.log("Elemento modificado: " + collection[index].innerHTML);
             collection[index].style.color = color;
         }
     }