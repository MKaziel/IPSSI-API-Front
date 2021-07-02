$(document).ready(function () {
    $.ajax({
        dataType: "json",
        url: "http://localhost:8080/produit?access=845c4f3dd5ec02c3ff0caf3a1a255f9b",
        cors:true,
        success: function (data) {
            console.log(data);
            var body = document.getElementById("container");
            var produits = data.data;

            for (var i = 0; i < produits.length; i++) {
                let produit = produits[i];
                console.log(produits);
                var div = document.createElement("div");
                div.setAttribute("class", "card");
                div.innerHTML = ` <div class="card-header">
                <img src="img/article1.jpg" alt="rover" />
                </div>
                <div class="card-body">
                    <span class="tag tag-teal">${produit.nom}</span>
                    <h4>
                    ${produit.type_animal}
                    </h4>
                    <p>
                    ${produit.description}
                    </p>
                
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Détails</button>
            
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    
                        <!-- Modal content-->
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">La déscription de l'article</h4>
                        </div>
                        <div class="modal-body">
                            <label>Nom</label>
                            <p>${produit.nom}</p>
                            <label>Description</label>
                            <p>${produit.description}</p>
                            <label>Prix</label>
                            <p>${produit.prix}</p>
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
