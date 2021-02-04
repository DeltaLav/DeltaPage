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
            
            let pages = document.querySelector('#pages');
            pages.innerHTML = '';

            let i = 0;
            for(let item of datos){
                pages.innerHTML += `
                    <div class="col-sm">
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
                for(j of item.keys){
                    key.innerHTML += `| ${j} | `; 
                }
                i++;
            }
        }
    }
}

traerDatos();