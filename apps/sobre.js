console.log("App On");

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);

            let about = document.querySelector('#about');
            about.innerHTML = '';
            let hc = document.querySelector('#hc');
            hc.innerHTML = '';

            about.innerHTML = `<p>Soy <strong>${datos.name} ${datos.lastName}</strong> mejor conocido como <b>"Lav"</b>, un joven que quiere aprender a programar y desarrollar paginas web. En estos momentos me encuentro aprendiendo en <strong><a class="badge bg-success" href="https://www.sololearn.com/">SoloLearn</a></strong> lo básico para alcanzar lo que quiero.</p>`

            var i = 0, j = 1;
            for(let item of datos.tecnologias){
                hc.innerHTML += `
                    <div class="col-sm py-1">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                                <p class="card-text">${item.format}</p>
                            </div>
                        </div>
                    </div>`;
            }

            console.log(datos);
        }
    }
}

traerDatos();