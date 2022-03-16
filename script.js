let d = document;
let inputPasswordString = d.getElementById("passwordString");
let buttonEnterPassword = d.getElementById("enterPassword");
let checkButtons = d.getElementById("check-buttons");
let buttonLaunch = d.getElementById("launch");
let levers = d.getElementById("levers");
let rocket = d.getElementById("rocket");
let passwordBase = "1";
//let passwordBase ="TrustNo1";

inputPasswordString.addEventListener("click", function (e){
    inputPasswordString.value = "";
});
buttonEnterPassword.addEventListener("click", function (e){
    let password = inputPasswordString.value;
    checkRightPassword(password);
});
let checkRightPassword = (password) => {
    if(password === passwordBase){
        unlockCheckbox();
        unlockRange();
        lockPasswordPanel();
        unlockLaunch();
    }
};

let unlockLaunch = () => {
    buttonLaunch.className = "launch-button-unlock";
    buttonLaunch.removeAttribute("disabled");
}

let unlockCheckbox = () => {
    let inputCheckbox = checkButtons.querySelectorAll("input");
    inputCheckbox.forEach(element => {
        element.removeAttribute("disabled")
    })
};
function unlockRange(){
    let inputRange = levers.querySelectorAll("input");
    inputRange.forEach(element =>{
        element.removeAttribute("disabled")
    })
};
 let lockPasswordPanel = () => {
       inputPasswordString.setAttribute("disabled", "disabled");
       buttonEnterPassword.setAttribute("disabled", "disabled");
 }

buttonLaunch.addEventListener("click", function (e){
if (checkMaxLevelRange() && checkActiveCheckbox()){
    setTimeout(function () {
        launchRocket();
    }, 3000);

}


})
let checkActiveCheckbox = () => {
     let inputCheckbox = checkButtons.querySelectorAll("input");
    for (let i = 0; i < inputCheckbox.length; i++) {
        const inputCheckboxElement = inputCheckbox[i];
        if (inputCheckboxElement.checked === false) {
            console.log("CheckNON");
            return false
        }
    }
    console.log("checkOk");
    return true
};

let checkMaxLevelRange = () => {
    let inputRange = levers.querySelectorAll("input");
    for (let i = 0; i < inputRange.length; i++) {
        const inputRangeElement = inputRange[i];
        if (inputRangeElement.value !== inputRangeElement.max) {
            console.log("rangeNON")
            return false
        }
    }
    console.log("rangeOk");
    return true
}
 let launchRocket = () => {

     rocket.animate([
         // keyframes
         { transform: 'translateY(-200px) translateX(300px)'}
     ], {
         // timing options
         duration: 6000,
         iterations: 1
     });

     // let start = Date.now();
     //
     // let timer = setTimeout(function() {
     //     let timePassed = Date.now() - start;
     //
     //     if (timePassed >= 3000) {
     //         clearTimeout(timer);
     //         return;
     //     }
     //
     //     draw(timePassed);
     //
     // });
     //
     // function draw(timePassed) {
     //     rocket.style.bottom = 215 + timePassed / 5 + 'px';
     //     rocket.style.left = 360 + timePassed / 8 + 'px';
     // }
 }
function testPass14() {
    let inputs = document.querySelectorAll('input');
    for (let item of inputs) {
        item.onchange = function () {
            console.log('HAhA pass the test No14');
        }
    }
}
testPass14();

