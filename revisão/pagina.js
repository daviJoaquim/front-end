function pagina(){

    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "tarefaInput";
    input.placeholder = "Digite uma tarefa";

    const botao = document.createElement("button");
    botao.id = "btnAdicionar";5
    botao.textContent = "Adicionar";

    const lista = document.createElement("ul");
    lista.id = "listaTarefas";

    document.body.appendChild(titulo);
    document.body.appendChild(input);
    document.body.appendChild(botao);
    document.body.appendChild(lista);
    
    botao.addEventListener("click", ()=>{
        //criar novo elemento da lista
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();

        if(texto == ""){
            alert("Digite algo");
            return;
        }

        novaTarefa.textContent = texto;//adiciona texto ao elemento da lista
        novaTarefa.classList.add('destaque');//adiciona a classe "destaque" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());//adiciona atributo personalizado
        novaTarefa.style.color = "#333"; //muda a cor do texto

        lista.appendChild(novaTarefa);//adicona elemento 

        novaTarefa.addEventListener("click", ()=>{
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo: ", tarefa);
            novaTarefa.classList.remove("destaque");
            novaTarefa.classList.add("removido");
            novaTarefa.innerHTML += " (removida)";
            setTimeout(() => {lista.removeChild(novaTarefa);}, 1000);

            input.value = "";
    });

});}	