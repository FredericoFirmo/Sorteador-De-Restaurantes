const local = document.getElementById("restaurante");
var roleta = document.getElementsByClassName('roleta');
var url = "http://127.0.0.1/Restaurant/";


function Sortear()
{
    //reset para a tela inicial
    local.textContent = "Clique no botão!";
    document.getElementById('qrcode').src = "./img/dado.png";

    //ativar animação
    roleta[0].style.animation = "loading 3s linear";

    //desativar animação
    setTimeout(function(){roleta[0].style.animation = "";},3000);

    setTimeout(function(){

        //requisição http
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();

        //obter o restaurante e o link de acesso ao site
        var locais = xhttp.responseText;
        var obj = JSON.parse(locais);
        local.textContent = obj.LocalSelecionado;
        var conteudo = obj.LinkURL;
        
        //gerar o qrcode com o link de acesso
        var GoogleCharts = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=';
        var imagemQRCode = GoogleCharts + conteudo;
        document.getElementById('qrcode').src = imagemQRCode;
        document.getElementById('link').href = conteudo;
    },3000);

}
