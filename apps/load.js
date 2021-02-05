console.log("Page Load ON")

function pageLoad(){
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
                            <li class="nav-item"><a class="nav-link" href="./about.html">Sobre Mí</a></li>
                            <li class="nav-item"><a class="nav-link" href="./briefcase.html">Portafolio</a></li>
                            <!-- <li class="nav-item"><a class="nav-link" href="./help.html">Ayuda</a></li> -->
                            <li class="nav-item"><a class="nav-link" href="./contactme.html">Contacto</a></li>
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

// url_data();
pageLoad();