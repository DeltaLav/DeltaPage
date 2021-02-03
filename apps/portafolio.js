console.log("App On");

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/pages.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);

            console.log(datos);
        }
    }
}

traerDatos();