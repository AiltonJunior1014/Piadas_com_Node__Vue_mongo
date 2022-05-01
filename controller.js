const express = require("express");
const app = express();

// definindo a rota raiz
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/exemplo.html");
});
// definindo a rota ajuda
app.get("/ajuda", function (req, res) {
    res.send("Página de ajuda!");
});

app.get("/piadaaleatoria", function(req,res){

    let num = Math.floor(Math.random() * 107)

    console.log(num);
    res.json(jchuck.result[num].value);

});

app.get("/piadacomfiltro/:filtro", function(req,res){

    let piadas=[];
    for (let p of jchuck.result)
        if (p.value.toLocaleLowerCase().includes(req.params.filtro))
            piadas.push(p);
    
    res.json(piadas);
});

app.get("/piadacomfiltro", function(req,res){

    let piadas=[];
    for (let p of jchuck.result)
        if (p.value.includes(req.query.filtro))
            piadas.push(p.value);

    res.json(piadas);
});

// executando o servidor
app.listen(8081, function () {
    console.log("Servidor na porta 8081");
});