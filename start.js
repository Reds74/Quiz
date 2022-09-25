let quiz = [
    {
        pergunta: 'Qual o nome do primeiro avião de Santos Dumont?',
        respTrue: '14 Bis',
        respFalse: '14 Bass'
    },
    {
        pergunta: 'A Lua é um satélite...',
        respTrue: 'Natural da Terra',
        respFalse: 'Artificial da Terra'
    },
    {
        pergunta: 'Quantos séculos há em um milênio?',
        respTrue: '10 séculos',
        respFalse: '100 séculos'
        
    },
    {
        pergunta: 'Em qual pólo fica a Antártica?',
        respTrue: 'Pólo Sul',
        respFalse: 'Pólo Norte'
    }
    
]

const addElemt = () => {
    let div = document.getElementById('quiz-quiz');
    let novoDivs = '';
    for (let i = 0; i < quiz.length; i++) {
        novoDivs+= `${i+1}) ${quiz[i].pergunta} <br />
        <input type="radio" name="quiz${i}" value="${quiz[i].respTrue}">
        ${quiz[i].respTrue} <br />
        <input type="radio" name="quiz${i}" value="${quiz[i].respFalse}">
        ${quiz[i].respFalse}
        <hr />`;
    }
    div.innerHTML =  novoDivs;  
}
let verificarResp = (id, value) => {
    for (let i = 0; i < quiz.length; i++){
        if(id == i){
            if(quiz[i].respTrue ==value){
                return true;
            }
        }
    }
    return false;
}
const verificar = () => {
    let questTrue = "";
    let questFalse = "";
    let respTrue = 0;
    let respFalse = 0;
    let div = document.getElementById('quiz-quiz');
    const tm = quiz.length;
    for(let i = 0; i < tm; i++){
        let refRadios = document.getElementsByName(`quiz${i}`);
        for (let x = 0; x < refRadios.length; x++){
            if(refRadios[x].checked){
                if(verificarResp(i, refRadios[x].value)){
                    respTrue++;
                    questTrue+= `${i+1}°, `;
                } else{
                    respFalse++;
                    questFalse+= `${i+1}°, `;
                }
            }
        }
    }
    questTrue = questTrue.substr(0, (questTrue.length - 2));
    questFalse = questFalse.substr(0, (questFalse.length - 2));
    let divResp = document.getElementById('resp');
    questTrue = `Total de acertos:${respTrue}<br /> Perguntas acertadas:<br />${questTrue}`;
    questFalse = `Total de erros:${respFalse}<br /> Perguntas erradas:<br />${questFalse}`
    divResp.innerHTML = `${questTrue} <hr /> ${questFalse}`;
}

addElemt();
