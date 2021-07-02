$(document).ready(function(){
    $.ajax({
        dataType: "json",
        url: "http://localhost:8080/animal?access=845c4f3dd5ec02c3ff0caf3a1a255f9b",
        success: function(data){
            console.log(data);
            var body = document.getElementById("container")
            var animx = data.data

            for(var i=0; i<animx.length;i++){
                let animal = animx[i]
                console.log(animal);
                var div = document.createElement("div");
                div.setAttribute("class","card");
                div.innerHTML =
                `<div class="card-header">
                    <img src="img/animal7.png" alt="rover" />  
                </div>
                <div class="card-body">
                    <span class="tag tag-teal" id="race">${animal.race}</span>
                    <h4 id="name">${animal.nom}</h4>
                    <p id="detail">${animal.description}</p>
                    <button>Détails ...</button>
                    <button class="card-buton">Ajouter ...</button>
                </div>`
                body.appendChild(div);
            }
        }    
    })
})