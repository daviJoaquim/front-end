function biblioteca(){
    const percy = {
        titulo: "Percy Jackson e o Ladrão de Raios",
        autor: "Rick Riordan",
        disponivel: true,
        imagem: "https://ocondadostore.com/wp-content/uploads/2020/06/Ladr%C3%A3o-de-Raios.jpg"
    };
            
    const harry = {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        disponivel: true,
        imagem: "https://a-static.mlcdn.com.br/1500x1500/livro-harry-potter-e-a-pedra-filosofal/magazineluiza/223260000/5e0050418707cbd107d78d3af402b1c0.jpg"
    }

    const aneis = {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        disponivel: true,
        imagem: "https://a-static.mlcdn.com.br/1500x1500/livro-o-senhor-dos-aneis-a-sociedade-do-anel/magazineluiza/223950800/ddb9ab025710760a431b9dd5196bd963.jpg"
    }

    const narnia = {
        titulo: "As Crônicas de Nárnia",
        autor: "C.S. Lewis",
        disponivel: true,
        imagem: "https://m.media-amazon.com/images/I/71yJLhQekBL._AC_UF1000,1000_QL80_.jpg"
    }

    const livros = [percy, harry, aneis, narnia];
    const resultados = document.querySelector("#resultadosBusca");

    function exibirLivros(livros){

        livros.forEach(livro => {
            const card = document.createElement("div");
            card.classList.add("card")
            
            const titulo = document.createElement("h3");
            titulo.textContent = livro.titulo;

            const imagem = document.createElement("img");
            imagem.src = livro.imagem;
            imagem.height = 200;

            const autor = document.createElement("p");
            autor.textContent = `Autor: ${livro.autor}`;

            const status = document.createElement("p");
            if (livro.disponivel == true){
                status.textContent = "Status: Disponível";
                status.classList.add("livro-disponivel")
            }
            else {
                status.textContent = "Status: Emprestado";
                status.classList.add("livro-emprestado")
            }

            const botaoReservar = document.createElement("button");
            botaoReservar.textContent = "Reservar Livro";

            if (livro.disponivel == true){
                botaoReservar.addEventListener("click", () => {
                    botaoReservar.textContent = "Reservado!";
                    status.textContent = "Status: Emprestado";
                    botaoReservar.disabled = true;
                    livro.disponivel = false;
                    ("livro-emprestado")
                    console.log(`Livro de cadastro: "${livro.titulo}" reservado com sucesso!`)
    });
}

            card.appendChild(imagem);
            card.appendChild(titulo);
            card.appendChild(autor);
            card.appendChild(status);
            card.appendChild(botaoReservar);
            resultados.appendChild(card);
        });     
    }

    exibirLivros(livros);
}   
