console.log("Page Load ON")
var urlA = window.location.pathname;

function show_urlData(urlA){
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/url_pages.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let url = JSON.parse(this.responseText);
            let host = 0;
            let active = [];
            
            switch (urlA) {
                case url[host].home:
                    
                    navegation(active);
                    console.log(`Home ${true}`);
                    break;
                case url[host].about:

                    active[0] = `active`;
                    navegation(active);
                    show_aboutData();
                    console.log(`About ${true}`);
                    break;
                case url[host].briefcase:

                    active[1] = `active`;
                    navegation(active);
                    show_portafolioData();
                    console.log(`Briefcase ${true}`);
                    break;
                case url[host].contactme:

                    active[2] = `active`;
                    navegation(active);
                    console.log(`Contactme ${true}`);
                    break;

                default:
                    console.log(`Default ${false}`)
                    break;
            }

            // console.log(active);
        }
    }
}

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
                    console.log(`open row in ${i+1}, ${item.name}. ${band}`);
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
                    console.log(`close row in ${i+1} and ${j}, ${item.name}. ${band}`)
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
                    console.log(`middle in ${i+1}, ${item.name}. ${band}`)
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

function show_portafolioData(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/pages.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);

            // console.log(datos);
            
            let pages = document.querySelector('#pages');
            pages.innerHTML = '';

            let i = 0;
            for(let item of datos){
                pages.innerHTML += `
                    <div class="col-sm py-1">
                        <div class="card bg-secondary">
                            <div class="card-header">
                                <h3 class="card-title">${item.name}</h3>
                            </div>
                            <div class="card-body">
                                <img src="../img/logo-pages/${item.name}.png" class="rounded-circle" height="100px" alt="${item.name}" title="${item.name}">
                                <h4 class="card-subtitle">${item.type}</h4>
                                <p class="card-text" id="keys${i}"></p>
                            </div>
                            <div class="card-footer">
                                <div class="btn-group">
                                    <a href="${item.url}" class="btn btn-success ">Ir a Página</a>    
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                let key = document.querySelector('#keys'+i);
                key.innerHTML = '';
                for(let j of item.keys){
                    key.innerHTML += `| ${j} | `; 
                }
                console.log(i, item.name);
                i++;
            }
        }
    }
}

function navegation(active){
    var navegacion = document.querySelector('#navegation');

    navegacion.innerHTML = '';
    navegacion.innerHTML += `
            <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./home.html">
                        Delta Lav
                        <img src="../img/logo/IconW.png" width="30px">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item "><a class="nav-link ${active[0]}" href="./about.html">Sobre Mí</a></li>
                            <li class="nav-item"><a class="nav-link ${active[1]}" href="./briefcase.html">Portafolio</a></li>
                            <!-- <li class="nav-item"><a class="nav-link" href="./help.html">Ayuda</a></li> -->
                            <li class="nav-item"><a class="nav-link ${active[2]}" href="./contactme.html">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    `;
}

window.onload = function(){
    var contenedor = document.getElementById('load');

    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = '0';
}

show_urlData(urlA);