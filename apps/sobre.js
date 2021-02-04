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

            var i = 0;
            for(let item of datos.tecnologias){
                // if(i == 0){
                //     if(item.certificate == true){
                //         hc.innerHTML += `
                //         <div class="row">
                //             <div class="col-sm">
                //                 <div class="card bg-secondary">
                //                     <div class="card-body">
                //                         <h6 class="card-title">${item.name} <svg xmlns="http://www.w3.org/2000/svg" alt="Certificate" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                //                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                //                             </svg> > <span class="badge bg-success">${item.level}</span></h6>
                //                         <p class="card-text">${item.format}</p>
                //                     </div>
                //                 </div>
                //             </div>
                //         `;
                //     }
                //     else{
                //         hc.innerHTML += `
                //         <div class="row">
                //             <div class="col-sm">
                //                 <div class="card bg-secondary">
                //                     <div class="card-body">
                //                         <h6 class="card-title">${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                //                         <p class="card-text">${item.format}</p>
                //                     </div>
                //                 </div>
                //             </div>
                //         `;
                //     }
                // }
                // if(i == 2){
                //     if(item.certificate == true){
                //         hc.innerHTML += `
                //             <div class="col-sm">
                //                 <div class="card bg-secondary">
                //                     <div class="card-body">
                //                         <h6 class="card-title">${item.name} <svg xmlns="http://www.w3.org/2000/svg" alt="Certificate" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                //                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                //                             </svg> > <span class="badge bg-success">${item.level}</span></h6>
                //                         <p class="card-text">${item.format}</p>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //         `;
                //     }
                //     else{
                //         hc.innerHTML += `
                //             <div class="col-sm">
                //                 <div class="card bg-secondary">
                //                     <div class="card-body">
                //                         <h6 class="card-title">${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                //                         <p class="card-text">${item.format}</p>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //         `;
                //     }
                //     i = 0;
                // }
                // else{
                //     if(item-certificate == true){
                //         hc.innerHTML += `
                //             <div class="col-sm py-1">
                //                 <div class="card bg-secondary">
                //                     <div class="card-body">
                //                         <h6 class="card-title">${item.name} <svg xmlns="http://www.w3.org/2000/svg" alt="Certificate" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                //                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                //                         </svg> > <span class="badge bg-success">${item.level}</span></h6>
                //                         <p class="card-text">${item.format}</p>
                //                     </div>
                //                 </div>
                //             </div>`;
                //     }
                //     else{
                //         hc.innerHTML += `
                //             <div class="col-sm py-1">
                //                 <div class="card bg-secondary">
                //                     <div class="card-body">
                //                         <h6 class="card-title">${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                //                         <p class="card-text">${item.format}</p>
                //                     </div>
                //                 </div>
                //             </div>`;
                //     }
                // }
                hc.innerHTML += `
                                <div class="col-sm py-1">
                                    <div class="card bg-secondary">
                                        <div class="card-body">
                                            <h6 class="card-title">${item.name} > <span class="badge bg-success">${item.level}</span></h6>
                                            <p class="card-text">${item.format}</p>
                                        </div>
                                    </div>
                                </div>`;
                i++;
                console.log(i);
            }

            console.log(datos);
        }
    }
}

traerDatos();