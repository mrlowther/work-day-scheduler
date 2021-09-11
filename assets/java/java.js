
var time = moment().format('LT');
//TODO: change hour back to moment before deploy
// var hour = moment().hour();
var hour = 10;
console.log(time);
console.log(`hour: ${hour}`)
//day, month dayNo 
var day = moment().format('dddd');
var monthAndDay = moment().format('MMMM Do');
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = `${day}, ${monthAndDay}`;

// console.log(document.getElementById(`text13`))
//getTimeBlock();
// var blockObj = document.getElementById(`8`);
// var blockId = `id`;
// var blockIdName = blockObj[blockId];
// console.log(blockObj);
// console.log(blockIdName)
// var textObj = document.getElementById(`text8`);
// var textId = 'id'
// var textIdName = textObj[textId];
// console.log(textObj);
// console.log(textIdName);
// var btn = document.getElementById(`save8`);
// console.log(btn)
setColor();
addListeners();
loadSaved(localStorage);
// Object.keys(localStorage).forEach((key) => {
//     var keyIdx = 0
//     console.log(localStorage.getItem(key))
//     console.log(localStorage.key(keyIdx));
//     keyIdx = keyIdx + 1; 

// })

function addListeners() {
    for (let i = 8; i < 18; i++){
        document.getElementById(`save${i}`).addEventListener(`click`, saveText);
    }
}


function saveText(e) {
    // var targetEl = e.target;
    // var targetTag = e.target.tagName;
    var targetId = e.target.closest('div').firstChild.nextElementSibling.nextElementSibling.attributes.id.value
    // var 
    var userText = e.target.closest('div').firstChild.nextElementSibling.nextElementSibling.value
    // console.log(targetEl)
    // console.log(targetTag)
    console.log(targetId)
    console.log(userText)
    localStorage.setItem(targetId, userText)
}

function loadSaved(s) {
    var keyNames = Object.keys(s);
    var keyValues = Object.values(s);
    for (let i = 0; i < s.length; i++) {
        // if(keyValues[i] == '') {
        //     localStorage.removeItem(keyNames[i])
        // }
        document.getElementById(keyNames[i]).textContent = keyValues[i]
        
    }
    // Object.keys(s).forEach((key) => {
    //     console.log(s.getItem(key));
    // })
    // Object.values(s).forEach((value) => {
    //     console.log(s.getItem(value))
    // })
}

function setColor() {
    for (let i=8; i < 18; i++) {
        let txtId = document.getElementById(`text${i}`)
        //document.getElementById(txtId).classList.remove("past", "present", "future");
        if (i == hour) {
            txtId.classList.add("present");
        }
        else if (i < hour) {
            txtId.classList.add("past");
        }
        else if (i > hour) {
            txtId.classList.add("future");
        }
    }
}  
