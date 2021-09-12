
var time = moment().format('LT');
//TODO: change hour back to moment before deploy
var hour = moment().hour();
// var hour = 10;
console.log(time);
console.log(`hour: ${hour}`)
var day = moment().format('dddd');
var monthAndDay = moment().format('MMMM Do');
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = `${day}, ${monthAndDay}`;
setColor();
addListeners();
loadSaved(localStorage);
function addListeners() {
    for (let i = 8; i < 18; i++){
        document.getElementById(`save${i}`).addEventListener(`click`, saveText);
    }
}


function saveText(e) {
    // var targetEl = e.target;
    // var targetTag = e.target.tagName;
    var targetId = e.target.closest('div').firstChild.nextElementSibling.nextElementSibling.attributes.id.value
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
        document.getElementById(keyNames[i]).textContent = keyValues[i]  
    }
}

function setColor() {
    for (let i=8; i < 18; i++) {
        let txtId = document.getElementById(`text${i}`)
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
