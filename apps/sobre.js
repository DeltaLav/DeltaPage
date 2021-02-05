console.log("App On");

function show_aboutData(){

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

            var i = 0, j = 2, band = false;
            for(let item of datos.tecnologias){
                if((i == 0 || i%3 == 0) && band == false){
                    hc.innerHTML += `
                    <div class="row">
                        <div class="col py-1">
                            <div class="card bg-secondary">
                                <div class="card-body">
                                    <h6 class="card-title">
                                        <a href="${item.url}"><img src="../img/logo-tech/${item.name}.png" width="40px" alt="${item.name}"></a>
                                        ${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                                    <p class="card-text">${item.format}</p>
                                </div>
                            </div>
                        </div>
                    `;

                    band = true;
                    console.log("open row in "+i, band, item.name);
                }
                if(j == 0 && band == false){
                    hc.innerHTML += `
                        <div class="col py-1">
                            <div class="card bg-secondary">
                                <div class="card-body">
                                    <h6 class="card-title">
                                        <a href="${item.url}"><img src="../img/logo-tech/${item.name}.png" width="40px" alt="${item.name}"></a>
                                        ${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                                    <p class="card-text">${item.format}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;

                    j = 3;
                    band = true;
                    console.log("close row in "+i+" "+j, band, item.name)
                }
                if(band == false){
                    hc.innerHTML += `
                        <div class="col py-1">
                            <div class="card bg-secondary">
                                <div class="card-body">
                                    <h6 class="card-title">
                                        <a href="${item.url}"><img src="../img/logo-tech/${item.name}.png" width="40px" alt="${item.name}"></a> ${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                                    <p class="card-text">${item.format}</p>
                                </div>
                            </div>
                        </div>`;

                    band = true;
                    console.log("medio "+i, band, item.name)
                }
                
                band = false;
                i++;
                j--;
                // console.log(item);
            }

            // console.log(datos);
        }
    }
}

show_aboutData();