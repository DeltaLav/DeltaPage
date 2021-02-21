console.log("App ON")
// variable para comparar el hosting y ejecutar las rutas espesificas
var urlA = window.location.pathname;

/* Variable host para usar las rutas del JSON */
if(window.location.host === 'deltalav.github.io'){
    var host = 1;
}
else{
    var host = 0;
}

// muestra las url del JSON (urls.json)
function show_urlData(urlA, host){
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/urls.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let url = JSON.parse(this.responseText);
            let active = [], disabled = [];
            
            // metodos para cada ruta especifica
            switch (urlA) {
                case url[host].index.pathname:

                break;
                case url[host].home.pathname:
                    
                    active[0] = `active`;
                    disabled[3] = `disabled`;
                    template(url[host].home.title, active, disabled);
                    break;
                case url[host].about.pathname:

                    active[1] = `active`;
                    disabled[3] = `disabled`;
                    template(url[host].about.title, active, disabled);
                    show_aboutData();
                    break;
                case url[host].briefcase.pathname:

                    active[2] = `active`;
                    disabled[3] = `disabled`;
                    template(url[host].briefcase.title, active, disabled);
                    show_portafolioData();
                    break;
                case url[host].help.pathname:
                    
                    active[0] = `active`;
                    disabled[3] = `disabled`;
                    template(url[host].help.title, active, disabled);
                    test()
                    break;

                default:
                    console.log(`Default ${true}`);
                    break;
            }

            // console.log(active);
        }
    }
}

// muestra los datos contenidos en datos.json para el about.html
function show_aboutData(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            let birthday = datos.birthday;
            let age = calcAge(birthday);

            about = `<p>Soy <strong>${datos.name} ${datos.lastName}</strong> tengo ${age} años, un joven que quiere aprender a programar y desarrollar paginas web. En estos momentos me encuentro aprendiendo en <strong><a class="badge bg-success" href="https://www.sololearn.com/">SoloLearn</a></strong> lo básico para alcanzar lo que quiero.</p>`

            $('#about').html(about);

            
            let certificateImg = `
            
            `;
            var i = 0, j = 0;
            for(let item of datos.tecnologias){
                let certificate = '';

                if(item.certificate == true){
                    certificate = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                    `;
                }
                else{
                    certificate = '';
                }
                let card = `
                    <div class="card bg-secondary" style="width: 100%; ;height: 100%">
                        <div class="card-body">
                            <h6 class="card-title m-3">
                                <a href="${item.url}"><img src="../img/logo-tech/${item.name}.png" width="40px" alt="${item.name}"></a>
                                ${item.name} ${certificate} > <span class="badge bg-success">${item.level}</span></h6>
                            <p class="card-text">${item.format}</p>
                        </div>
                    </div>
                `;
                if(i == 0 || i%3 == 0){
                    $('#hc').append(`<div class="row p-1" id="row${j}">`)
                    console.log(`row ${j}`,true)

                    $(`#row${j}`).append(`<div class="col-sm m-2">${card}`)
                    console.log(`col ${i}`, true)
                    j++;
                }
                else{
                    $(`#row${j-1}`).append(`<div class="col-sm m-2">${card}`)
                    console.log(`col ${i}`, true)
                }
                i++;
                // console.log(item);
            }

            // console.log(datos);
        }
    }
}

// muestra los datos contenidos en pages.json para el briefcase.html
function show_portafolioData(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','../data/pages.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);

            // console.log(datos);

            let i = 0, j= 0;
            for(let item of datos){
                let card = `
                    <div class="card bg-secondary" style="width: 100%; ;height: 100%">
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
                `;
                if(i == 0 || i%3 == 0){
                    $('#pages').append(`<div class="row p-1" id="row${j}">`)
                    console.log(`row ${j}`,true)

                    $(`#row${j}`).append(`<div class="col-sm m-2">${card}`)
                    console.log(`col ${i}`, true)
                    j++;
                }
                else{
                    $(`#row${j-1}`).append(`<div class="col-sm m-2">${card}`)
                    console.log(`col ${i}`, true)
                }
                let key = document.querySelector(`#keys${i}`);
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

// muestra los datos contenidos en datos.json para el footer de los html
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

// genera navbar de los html
function navegation(active, disable){
    var navegacion = document.querySelector('#navegation');

    navegacion.innerHTML = '';
    navegacion.innerHTML += `
            <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./home.html">
                        Delta Lav
                        <img src="../img/logo/IconW.png" class="logo" width="30px">
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

// genera el footer de los html
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
                    <img src="../img/logo/IconW.png" class="logo" width="30px">
                </a>
            </div>
        </div>
    `;
    show_socialmediaData();
}

// genera el head y script de los html
function head_footer(title){
    var head = document.querySelector('#meta_data');
    head.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="icon" type="image/png" sizes="96x96" href="../img/logo/favicon-96x96.png">
        <link rel="stylesheet" href="../style/main.css">
        <!-- CSS Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <!-- JQUERY -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    `;
    var script = document.querySelector('#script');
    script.innerHTML = `
        <!-- JavaScript Bundle with Popper Bootstrap -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    `;
}

// funcion que comprime los head, navbar, footer y script
function template(title, active, disabled){
    head_footer(title);
    navegation(active, disabled);
    footer(active, disabled);
    console.log(`Template ON in ${title}`)
}

// calcula la edad del datos.json
function calcAge(birthday){
    let date = new Date;
    let age;
    if(date.getDay() >= birthday.day){
        if(date.getMonth() >= birthday.month){
            age = date.getFullYear() - birthday.year;
            return age;
        }
        else{
            age = date.getFullYear() - birthday.year
            return age-1;
        }
    }
    else{
        age = date.getFullYear() - birthday.year
        return age-1;
    }
}

// prepara la pagina mientras carga y hace invisible el spinner
window.onload = function(){
    var contenedor = document.getElementById('load');

    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = '0';
}

// funcion que se ejecuta
show_urlData(urlA, host);