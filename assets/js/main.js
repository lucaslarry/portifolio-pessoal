var divProjeto = document.getElementsByClassName("projeto");

for (var i = 0; i < divProjeto.length; i++) {
    (function (index) {
        divProjeto[index].addEventListener("click", function () {
            switch (index) {
                case 0:
                    window.open("https://github.com/lucaslarry/Facisa/tree/main/Python/Ouvidoria%20v3.0");
                    break;
                case 1:
                    window.open("https://github.com/lucaslarry/Facisa/tree/main/FrontEnd/ARC_MarketingPlace");
                    break;
                case 2:
                    window.open("https://github.com/lucaslarry/Calculadora-com-GUI");
                    break;
            }
        });
    })(i);
}