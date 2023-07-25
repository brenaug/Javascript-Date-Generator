/* 

    -> Prox. Atualizações:
    - Adicionar dos meses 1-2
    - Adicionar formulário com range de dias, meses e anos criados enviados pelos usuários
    - Permitir outros tipos de copy to clipboard (ex: com id, com quebra de linha, etc)

*/


const quantityInput = document.getElementById('dataQuantity')
const button = document.getElementById('button')

/* GERAR DIA */

function generateDay(){
    diaMin = 1
    diaMax = 30
    
    generatedDay = Math.floor(Math.random() * (diaMax - diaMin) + diaMin);
    if(generatedDay < 10){
        generatedDay = "0" + generatedDay 
    }
}

/* GERAR MÊS */

function generateMes(){
    mesMin = 3
    mesMax = 12
    
    generatedMes = Math.floor(Math.random() * (mesMax - mesMin) + mesMin);
    if(generatedMes < 10){
        generatedMes = "0" + generatedMes
    }
}

/* GERAR ANO */

function generateAno(){
    anoMin = 2022
    anoMax = 2024
    
    generatedAno = Math.floor(Math.random() * (anoMax - anoMin) + anoMin);
}


/* handleClick */

function handleClick(){
    datas = []

    if(quantityInput.value <= 0){
        alert("Quantidade inválida, você precisa inserir pelo menos 1.")
        return
    }
    
    quantityInput.style.display = "none"
    document.getElementById('spanQuantity').style.display = "none"
    document.getElementById('table').style.display = "block"
    document.getElementById('re-doButton').style.display = "block"
    document.getElementById('copyright').style.display = "block"
    document.getElementById('clipboardButton').style.display = "flex"


    
    for(i=0; i < quantityInput.value; i++){
        generateDay(), generateMes(), generateAno()
        data = generatedDay + "/" + generatedMes + "/" + generatedAno
        datas.push(data)

        /* Showcase information to users */

        /* Create elements */
        const tr = document.createElement('tr')
        const tdId = document.createElement('td')
        const tdData = document.createElement('td')

        /* Getting TextNode to insert into td */

        const getId = i + 1;
        const id = document.createTextNode(getId)
        const dataText = document.createTextNode(data)

        tdId.appendChild(id)
        tdData.appendChild(dataText)

        tr.appendChild(tdId)
        tr.appendChild(tdData)

        const table = document.getElementById('table')
        table.appendChild(tr)
    }
    const buttonPressed = true

    if (buttonPressed == true){
        button.style.display = "none"
    }

}

function redo() {
    location.reload()
}

function handleClipboard (){
    clipboardCopy = []
    const map = datas.map(data => {
        clipboardCopy.push(data)
    })
    clipboardNoComa = clipboardCopy.toString().replace(/,/g, " ")
    navigator.clipboard.writeText(clipboardNoComa)
    console.log(datas)
    showMsg()
}


function showMsg (){
    const msgContainer = document.getElementById('msgContainer')

    msgContainer.classList.remove("showMsg")
    void msgContainer.offsetWidth; 
    msgContainer.classList.add("showMsg")
}