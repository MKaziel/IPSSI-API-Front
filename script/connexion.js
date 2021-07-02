$(document).ready(function(){
    
    $("#ConnexionBouton").click(function(){
        var id = document.getElementById("Identifiant").value
        var mdp = document.getElementById("Motdepasse").value
        $.ajax({
            type:"POST",
            url:"http://localhost:8080/utilisateur/connexion?access=845c4f3dd5ec02c3ff0caf3a1a255f9b",
            dataType:"json",
            data:{'Identifiant' : id, 'Motdepasse' : mdp},
            cors:true,
            success:function(data){
                document.cookie = `connexionToken=${data.data};`
                document.location.href='./animauxListe'
            }
        });
    })
})