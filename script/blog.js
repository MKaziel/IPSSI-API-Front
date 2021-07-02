$(document).ready(function () {
    $.ajax({
        dataType: "json",
        cors: true,
        url: `http://localhost:8080/article?access=845c4f3dd5ec02c3ff0caf3a1a255f9b`,
        success: function (data) {
            var body = document.getElementById("container");
            var articles = data.data;

            for (var i = 0; i < articles.length; i++) {
                let article = articles[i];
                var div = document.createElement("div");
                div.setAttribute("class", "card");
                div.innerHTML = `  
                <div class="blog-card">
                    <div class="meta">
                    <div class="photo" style="background-image: url(${article.illustration})"></div>
                    
                    </div>
                    <div class="description"></div>
                    <h1>${article.titre}</h1>
                    <p> ${article.contenue}</p>
                    <p class="read-more">
                        <a href="#">Read More</a>
                    </p>
                    </div>
                </div>`;
                body.appendChild(div);
            }
        },
    });
});
