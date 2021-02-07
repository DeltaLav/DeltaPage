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
            /// Cambiar al subir
            let host = 1;
            let active = [], disabled = [];
            
            switch (urlA) {
                case url[host].home:
                    
                    active[0] = `active`;
                    disabled[3] = `disabled`;
                    navegation(active, disabled);
                    footer(active, disabled);
                    console.log(`Home ${true}`);
                    break;
                case url[host].about:

                    active[1] = `active`;
                    disabled[3] = `disabled`;
                    navegation(active, disabled);
                    footer(active, disabled);
                    show_aboutData();
                    console.log(`About ${true}`);
                    break;
                case url[host].briefcase:

                    active[2] = `active`;
                    disabled[3] = `disabled`;
                    navegation(active, disabled);
                    footer(active, disabled);
                    show_portafolioData();
                    console.log(`Briefcase ${true}`);
                    break;
                case url[host].help:
                    
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

function show_socialmediaData(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);

            let socialmedia = document.querySelector('#socialmedia');
            socialmedia.innerHTML = ``;

            for(let item of datos.social){
                socialmedia.innerHTML += `
                    <a href="${item.url}">
                        <img src="../img/socialmedia-icons/${item.name}.png" class="d-inline img-fluid" width="35px" alt="${item.name}">
                    </a>
                `;
                // console.log(item);
            }
        }
    }
}

function navegation(active, disable){
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
                            <li class="nav-item"><a class="nav-link ${active[1]} ${disable[1]}" href="./about.html">Sobre Mí</a></li>
                            <li class="nav-item"><a class="nav-link ${active[2]} ${disable[2]}" href="./briefcase.html">Portafolio</a></li>
                            <li class="nav-item"><a class="nav-link ${active[3]} ${disable[3]}" href="./help.html">Ayuda</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    `;
}

function footer(active, disabled){
    var footer = document.querySelector('#footer');

    footer.innerHTML = '';
    footer.innerHTML += `
        <div class="bg-secondary">
            <div class="container py-4">
                <div class="row font-monospace py-4">
                    <div class="col-lg py-1 text-center">
                        <h6>Redes Sociales</h6>
                        <div class="clearfix" id="socialmedia">
                            
                        </div>
                    </div>
                    <div class="col-sm py-1">
                        <h6 class="text-center">Links</h6>
                        <ul class="list-group">
                            <a href="./home.html" class="list-group-item list-group-item-action list-group-item-success ${active[0]} ${disabled[0]}">Home</a>
                            <a href="./about.html" class="list-group-item list-group-item-action list-group-item-success ${active[1]} ${disabled[1]}">Sobre Mí</a>
                            <a href="./briefcase.html" class="list-group-item list-group-item-action list-group-item-success ${active[2]} ${disabled[2]}">Portafolio</a>
                            <a href="./help.html" class="list-group-item list-group-item-action list-group-item-success ${active[3]} ${disabled[3]}">Help</a>
                        </ul>
                    </div>
                    <div class="col-sm py-1 text-center">
                        <h6>Features</h6>
                        <div>
                            <p>
                                Social Media Icons made by <a href="https://www.freepik.com" title="Freepik"><span class="badge rounded-pill bg-success">Freepik</span></a> from <a href="https://www.flaticon.com/" title="Flaticon"> <span class="badge rounded-pill bg-success">flaticon.com</span></a>
                                <img src="../img/icons/heart.png" class="d-inline" alt="Heart" width="20px">
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <a href="../index.html">
                    <img src="../img/logo/IconW.png" width="30px">
                </a>
            </div>
        </div>
    `;
    show_socialmediaData();
}

window.onload = function(){
    var contenedor = document.getElementById('load');

    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = '0';
}

show_urlData(urlA);