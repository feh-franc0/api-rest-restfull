const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

//? Verbos HTTP

app.get("/clients", function(req,res) {
    res.json(data);
}); //* GET: Receber dados de um Resource.

app.get("/clients/:id", function(req,res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id = id);

    if(!client) return res.status(204).json();

    res.json(client);
}); //* GET: Receber dados de um Resource.

app.post("/clients", function(req,res) {
    const { name, email } = req.body;

    // rotina para salvar

    res.json({ name, email })
}); //* POST: Enviar dados ou informações para serem processados por um Resource.

app.put("/clients/:id", function(req,res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id = id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);
}); //* PUT: Atualizar dados de um Resource.

app.delete("/clients/:id", function(req,res) {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
}); //* DELETE: Deletar um Resourc

app.listen(3020, function(){
    console.log("Server is running");
});
