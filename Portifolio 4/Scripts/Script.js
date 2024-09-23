const item = document.getElementById("input-item");
const botaosalvaritem = document.getElementById("salvaritem");
const listadecompras = document.getElementById("listadascompras");
let contador = 0;

botaosalvaritem.addEventListener("click", adicionaritem)

function adicionaritem(evento) {
    evento.preventDefault()
    
    const itemdalista = document.createElement("li");
    const containeritemlista = document.createElement("div");
    containeritemlista.classList.add("containerlistacompras");

    /*-------------------------------*/
    const alinhamento = document.createElement("div");
    alinhamento.classList.add("listacompras");
    /*-------------------------------*/

    const containernomedoitem = document.createElement("div");

    const containercheckbox = document.createElement("div");
    containercheckbox.classList.add("container-checkbox");
    

    const checkboxinput = document.createElement("input");
    checkboxinput.type = "checkbox";
    checkboxinput.classList.add("checkbox-input");
    checkboxinput.id = "checkbox-" + contador++;

    const checkboxlabel = document.createElement("label");
    checkboxlabel.setAttribute("for", checkboxinput.id);

    const checkboxcustomizado = document.createElement("div");
    checkboxcustomizado.classList.add("checkbox-customizado");

    
    checkboxlabel.appendChild(checkboxinput);
    checkboxlabel.appendChild(checkboxcustomizado);

    containercheckbox.appendChild(checkboxlabel);
    containernomedoitem.appendChild(containercheckbox);

    /*-----*/
    alinhamento.appendChild(checkboxinput)
    alinhamento.appendChild(containernomedoitem)
    /*------- */

    const nomedoitem = document.createElement("p");
    nomedoitem.innerText = item.value;
    containernomedoitem.appendChild(nomedoitem);

    const containerbotoes = document.createElement("div");
    const botaoremover = document.createElement("button");
    botaoremover.classList.add("buttonacao");
/* qualquer coisa apaga essa parte*/
    const botaoeditar = document.createElement("button");
    botaoeditar.classList.add("buttonacao");

    const imagemremover = document.createElement("img");
    imagemremover.src = "/icones/Excluir (1).svg";
    imagemremover.alt = "remover";
    /*e essa */
    const imagemeditar = document.createElement("img");
    imagemeditar.src = "/icones/Edição.svg";
    imagemeditar.alt = "editar";
 
    botaoremover.appendChild(imagemremover);
    containerbotoes.appendChild(botaoremover);
    /*e essa*/
    botaoeditar.appendChild(imagemeditar);
    containerbotoes.appendChild(botaoeditar);

    containeritemlista.appendChild(containernomedoitem);
    containeritemlista.appendChild(containerbotoes);
    itemdalista.appendChild(containeritemlista);
    listadecompras.appendChild(itemdalista);
}