// Timer Exercise

function countdown (num) {
    let counter = setInterval (function (){
        num--;
    
    if (num === 0) {
        clearInterval(counter);
        console.log('DONE!');
    }
    else {
        console.log(num);
    }
    }
    ,1000);
}

// randomGame Exercise

function randomGame () {
    let counts = 0;
    let randomNum;
    let selector = setInterval (function () {
        randomNum = Math.random();
        counts++
    
        if (randomNum > 0.75) {
            clearInterval(selector);
            console.log(counts);
        }
    }
    , 1000);
}
