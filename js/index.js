let timeDeys = 10;
let randomObject = null;
let randomDecision = [12,19,91];
let timeDeysRecord =localStorage.getItem('record');
let currentRecord = timeDeysRecord ? parseInt(timeDeysRecord) : 0;

const startPlay = document.getElementById("start");
const reshanieYes = document.getElementById("Yes");
const reshanieNo = document.getElementById("No");
const restartPlay = document.getElementById("restart");
const cartaElm= document.getElementById('carta');
const timeRecord = document.getElementById('timeRecord');
document.getElementById('timeRecord').innerHTML ="Ваш рекорд: "+ Math.floor(timeDeysRecord / 365) + "лет " + Math.floor((timeDeysRecord % 365) / 30) + "месяцев " + Math.floor((timeDeysRecord % 360) % 30) + "дней ";
//начать заново
function restart() {
    timeRecord.style.display = "none";
    timeDeys = 10;
    time.innerHTML = Math.floor(timeDeys / 365) + "лет " + Math.floor((timeDeys % 365) / 30) + "месяцев " + Math.floor((timeDeys % 360) % 30) + "дней ";
    army.innerHTML = 50;
    people.innerHTML = 50;
    diplomacy.innerHTML = 50;
    gold.innerHTML = 50;

    restartPlay.style.display = "none";
    reshanieYes.style.display = "block";
    reshanieNo.style.display = "block";
    cartaElm.style.height="85%"
    decision()
}
//старт игры
function start() {
    timeRecord.style.display = "none";
    startPlay.style.display = "none";
    reshanieYes.style.display = "block";
    reshanieNo.style.display = "block";
    decision()
}
//порожение
function defeat() {
    document.getElementById('myImage')
        .src = "img/game_over.png";
    document.getElementById('message')
        .innerHTML = "Ты проиграл!"
    document.getElementById('name')
        .innerHTML = "Смерть";
    restartPlay.style.display = "block";
    reshanieYes.style.display = "none";
    reshanieNo.style.display = "none";
    timeRecord.style.display = "block";
   cartaElm.style.height="95%";
   timeRecording();
}
//проверка на порожение
function defeatСheck() {
    document.getElementById('army')
    let armym = parseInt(army.innerHTML);
    if (armym <= 0 || armym >= 100) {
        defeat()
        
    }

    document.getElementById('people')
    let peoplem = parseInt(people.innerHTML);
    if (peoplem <= 0 || peoplem >= 100) {
        defeat()
        
    }

    document.getElementById('diplodiplomacy')
    let diplomacym = parseInt(diplomacy.innerHTML);
    if (diplomacym <= 0 || diplomacym >= 100) {
        defeat();
    }

    document.getElementById('gold')
    let goldm = parseInt(gold.innerHTML);
    if (goldm <= 0 || goldm >= 100) {
        defeat();
    }
}
// время
function timegems() {
    document.getElementById('time')

    timeDeys += randomObject["time"]
    time.innerHTML = Math.floor(timeDeys / 365) + "лет " + Math.floor((timeDeys % 365) / 30) + "месяцев " + Math.floor((timeDeys % 360) % 30) + "дней "
}
//рекорд
function timeRecording(){
    if (timeDeys> currentRecord ) {
        currentRecord =timeDeys;
        localStorage.setItem('record', currentRecord);
        document.getElementById('timeRecord').innerHTML = "Ваш рекорд: "+Math.floor(timeDeys / 365) + "лет " + Math.floor((timeDeys % 365) / 30) + "месяцев " + Math.floor((timeDeys % 360) % 30) + "дней ";
        playerRecording();
    }
}
//случайное событие
function decision() {
    let randomIndex = Math.floor(Math.random() * element.length);
    if ( randomDecision.indexOf(randomIndex)== -1) {
        randomDecision.shift();
        randomDecision.push(randomIndex)
       // console.log(element[randomIndex], " : ", randomIndex)
        randomObject = element[randomIndex];
        document.getElementById('myImage')
            .src = randomObject["img"];
        document.getElementById('message')
            .innerHTML = randomObject["text"];
        document.getElementById('name')
            .innerHTML = randomObject["name"];
    } else {
        decision();
    }

}

// состояние королевства
function stateKingdomYes() {
    document.getElementById('army')
    let armym = parseInt(army.innerHTML);
    army.innerHTML = armym + randomObject["armyYes"];

    document.getElementById('people')
    let peoplem = parseInt(people.innerHTML);
    people.innerHTML = peoplem + randomObject["peopleYes"];

    document.getElementById('diplodiplomacy')
    let diplomacym = parseInt(diplomacy.innerHTML);
    diplomacy.innerHTML = diplomacym + randomObject["diplomacyYes"];

    document.getElementById('gold')
    let goldm = parseInt(gold.innerHTML);
    gold.innerHTML = goldm + randomObject["goldYes"];

    timegems();
    decision();
}
function stateKingdomNo() {
    document.getElementById('army')
    let armym = parseInt(army.innerHTML);
    //console.log(armym + randomObject["armyNo"])
    army.innerHTML = armym + randomObject["armyNo"];

    document.getElementById('people')
    let peoplem = parseInt(people.innerHTML);
    //console.log(peoplem + randomObject["peopleNo"])
    people.innerHTML = peoplem + randomObject["peopleNo"];

    document.getElementById('diplodiplomacy')
    let diplomacym = parseInt(diplomacy.innerHTML);
    //console.log(diplomacym + randomObject["diplomacyNo"])
    diplomacy.innerHTML = diplomacym + randomObject["diplomacyNo"];

    document.getElementById('gold')
    let goldm = parseInt(gold.innerHTML);
   // console.log(goldm + randomObject["goldNo"])
    gold.innerHTML = goldm + randomObject["goldNo"];
    timegems();
    decision();
}
//решение
function Yes() {
    stateKingdomYes();
    defeatСheck();
}

function No() {
    stateKingdomNo();
    defeatСheck();
}
let element = [
    {
        img: "img/advisor.png",
        text: "Милорд, На нас напали Гоблины! Может попробуем договориться с их вожакам?",
        name: "Советник",
        time: 7,
        armyYes: 0,
        armyNo: 0,
        peopleYes: 0,
        peopleNo: -20,
        diplomacyYes: +20,
        diplomacyNo: 0,
        goldYes: -30,
        goldNo: 0
    },
    {
        img: "img/advisor.png",
        text: "Милорд, в последние время, в наших землях развилось много Драконов. Давайте наймём группу авантюристов, для борьбы с этими Тварями.",
        name: "Советник",
        time: 7,
        armyYes: 0,
        armyNo: 0,
        peopleYes: +45,
        peopleNo: -25,
        diplomacyYes: +0,
        diplomacyNo: 0,
        goldYes: -30,
        goldNo: -5
    },
    {
        img: "img/advisor.png",
        text: "Милорд, в последние время у нас холодные отношения с Эльфами из Зеленолесья. Давайте отправим небольшой подарок.",
        name: "Советник",
        time: 7,
        armyYes: 0,
        armyNo: 0,
        peopleYes: 0,
        peopleNo: +5,
        diplomacyYes: +20,
        diplomacyNo: -20,
        goldYes: -30,
        goldNo: 0
    },
    {
        img: "img/knight.png",
        text: "Милорд, у эльфов более подготовленная армия чем, у нас. Может наймём пару командиров, чтобы перенять опыт.",
        name: "Военачальник",
        time: 20,
        armyYes: +20,
        armyNo: -10,
        peopleYes: 0,
        peopleNo: 0,
        diplomacyYes: -10,
        diplomacyNo: +10,
        goldYes: -10,
        goldNo: 0
    },
    {
        img: "img/knight.png",
        text: "Племена Россов просят помощи, в войне против Людоящеров. Отправим им, наших парней?",
        name: "Военачальник",
        time: 20,
        armyYes: -10,
        armyNo: +10,
        peopleYes: 0,
        peopleNo: 0,
        diplomacyYes: +10,
        diplomacyNo: -10,
        goldYes: 0,
        goldNo: 0
    },
    {
        img: "img/knight.png",
        text: "Милорд, наша армия слаба, нужно провести набор новобранцев.",
        name: "Военачальник",
        time: 30,
        armyYes: +30,
        armyNo: -10,
        peopleYes: -20,
        peopleNo: +10,
        diplomacyYes: 0,
        diplomacyNo: 0,
        goldYes: -10,
        goldNo: +5,
    },
    {
        img: "img/knight.png",
        text: "Милорд, есть идея как пополнить казну. Давайте наймём каперов “Северный Флот”, для торговой войны с Амакирской Торговой Компанией",
        name: "Военачальник",
        time: 20,
        armyYes: +5,
        armyNo: 0,
        peopleYes: 0,
        peopleNo: +0,
        diplomacyYes: -15,
        diplomacyNo: 0,
        goldYes: +15,
        goldNo: -5,
    },
    {
        img: "img/peasant.png",
        text: "Милорд, в деревнях голодают люди! Может закупите партию хлеба в соседних землях?",
        name: "Старейшина деревень",
        time: 12,
        armyYes: 0,
        armyNo: 0,
        peopleYes: +10,
        peopleNo: -5,
        diplomacyYes: 0,
        diplomacyNo: 0,
        goldYes: -10,
        goldNo: +5
    },
    {
        img: "img/nobleman.png",
        text: "Нам дворянам, не нравиться служить в армии! Давайте, отменим срочную службу для дворян.",
        name: "Дворянин",
        time: 27,
        armyYes: -10,
        armyNo: +10,
        peopleYes: 0,
        peopleNo: 0,
        diplomacyYes: +10,
        diplomacyNo: -20,
        goldYes: 0,
        goldNo: 0
    },
    {
        img: "img/advisor.png",
        text: "Милорд, народ купается в деньгах, а казна пуста. Может поднимем налоги?",
        name: "Советник",
        time: 7,
        armyYes: 0,
        armyNo: 0,
        peopleYes: -20,
        peopleNo: +30,
        diplomacyYes: 0,
        diplomacyNo: 0,
        goldYes: +30,
        goldNo: -10
    },
    {
        img: "img/trader.png",
        text: "Что, на счёт торговли с гоблинами? У них много дфорфийского золота, а у нас много старого оружия.",
        name: "Торговец ",
        time: 20,
        armyYes: -10,
        armyNo: +20,
        peopleYes: 0,
        peopleNo: 0,
        diplomacyYes: -20,
        diplomacyNo: 0,
        goldYes: +30,
        goldNo: 0
    },
    {
        img: "img/Dwarves.png",
        text: "У нас простаивают кузни. Может, вы закажите у нас оружие по скидки?",
        name: "Дворф",
        time: 60,
        armyYes: +30,
        armyNo: +0,
        peopleYes: 0,
        peopleNo: 0,
        diplomacyYes: +0,
        diplomacyNo: -10,
        goldYes: -20,
        goldNo: +5,
    },
    {
        img: "img/Dwarves.png",
        text: "Заключим союз против Орков? Королевство Бейлов будет платить вам золотом, а вы будите защищать наши земли.",
        name: "Дворф",
        time: 21,
        armyYes: -30,
        armyNo: +30,
        peopleYes: 0,
        peopleNo: 0,
        diplomacyYes: +30,
        diplomacyNo: -10,
        goldYes: +10,
        goldNo: 0,
    },
    {
        img: "img/trader.png",
        text: "У крестьян скопилось много зерна. Может повысим налог на хранение?",
        name: "Торговец ",
        time: 10,
        armyYes: 0,
        armyNo: 0,
        peopleYes: -20,
        peopleNo: +10,
        diplomacyYes: 0,
        diplomacyNo: 0,
        goldYes: +30,
        goldNo: -20
    },
    {
        img: "img/Dwarves.png",
        text: "Нам Дворфам, не нравиться присутствие Амакирской Торговой Компании. Может, заключим торговый союз?",
        name: "Дворф",
        time: 5,
        armyYes: 0,
        armyNo: 0,
        peopleYes: 0,
        peopleNo: 0,
        diplomacyYes: -15,
        diplomacyNo: +15,
        goldYes: +15,
        goldNo: -15,
    }
]