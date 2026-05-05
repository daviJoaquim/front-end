const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImage");
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

video.style.transform = "scaleX(-1)";
canvas.style.transform = "scaleX(-1)";

// Solicitar permissão para acessar a câmera 
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });

//atribuir uma função ao botão de captura

botao.addEventListener("click", () => {
    // Desenhar o quadro atual do vídeo na area do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    //como obter um url de dados
    const imageDataURL = canvas.toDataURL('image/png');
    //enviar imagem para um servidor
    enviarImagemParaServidor(imageDataURL);
});

function enviarImagemParaServidor(imageDataURL) {
    //simular o envio  salvando o dado no próprio computador
    console.log('enviando imagem para o servidor...');

    const base64String = imageDataURL.split(',')[1];

    fetch('http://dop3080-1247456:8000/images', {
        method: "POST",
        body: JSON.stringify({ image: base64String, mime_type: 'image/png' }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then( resposta => resposta.json())
        .then( dados => {
            console.log('Resposta do servidor: ', dados)
        })
        .catch( erro => {
            console.error('Erro ao anviar a mensagem: ', erro);
        })
};