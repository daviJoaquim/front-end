const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImage");
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

//solicitar acesso a câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play(); 
    })
    .catch( erro => {
        console.error("erro ao acessar a câmera " + erro);
    });

//atribuir uma função para o botão de captura

botao.addEventListener("click", () => {
    //Desenhar o quadro atual do vídeo na área do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height)

    //obter a imagem como umURL de dados
    const imageDataURL = canvas.toDataURL("imagem/png");
    //enviar a imagem para um servidor
    enviaImagemParaServidor(imageDataURL);
})

function enviaImagemParaServidor(imageDataURL){
    //simular o envio para um servidor slavando o dado no próprio computador
    console.log("Enviando imagems para o servidor...");

    fetch("/", {
        method: "POST",
        body: JSON.stringify({image: imageDataURL}),
        header: {
            "Content-Type": "application/json"
        } 
    })
        .then( resposta => resposta.json())
        .then( dados => {
            console.log("Resposta do servidor: ", dados);
        })
        .catch( erro => {
            console.error("Erro ao enviar a imagem: ", erro);
        })
}