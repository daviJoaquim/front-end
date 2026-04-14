const url= "https://jsonplaceholder.typicode.com.br/users";

fetch(url).then(resposta => {
    if (!resposta.ok){
        throw new Error("Erro na rede: " + resposta.status)
    }
    return resposta.json();
})
.then(dados => {
    console.log("Dados recebidos: \n", dados )
})
.catch( erro => console.error("Houve um probelma com a requisição: " + erro))