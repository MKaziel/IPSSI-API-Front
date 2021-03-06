$(document).ready(function () {
    $.ajax({
        dataType: "json",
        url: "http://localhost:8080/animal?access=845c4f3dd5ec02c3ff0caf3a1a255f9b",
        cors:true,
        success: function (data) {
            var body = document.getElementById("container");
            var animx = data.data;

            for (var i = 0; i < animx.length; i++) {
                let animal = animx[i];
                var div = document.createElement("div");
                div.setAttribute("class", "card");
                div.innerHTML = `<div class="card-header">
                    <img src="img/animal7.png" alt="rover" />  
                </div>
                <div class="card-body">
                    <span class="tag tag-teal" id="race">${animal.race}</span>
                    <h4 id="name">${animal.nom}</h4>
                    <p id="detail">${animal.description}</p>

                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Détails</button>
            
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    
                        <!-- Modal content-->
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">La déscription de l'animal</h4>
                        </div>
                        <div class="modal-body">
                            <label>Description</label>
                            <p>${animal.description}</p>
                            <label>Age</label><p>${animal.age}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Acheter</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>`;
                body.appendChild(div);
            }
        },
    });
});
