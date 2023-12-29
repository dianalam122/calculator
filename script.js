let previousNum = '';
let currentNum = '';
let currentOp = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector('.clear');
    let smallDisplay = document.querySelector('.small');
    let bigDisplay = document.querySelector('.big');

    // arrayList
    let nums = document.querySelectorAll('.num');
    let ops = document.querySelectorAll('.op');
    
    let equal = document.querySelector('.equal');
    let dec = document.querySelector('.dec');

    nums.forEach((num) => num.addEventListener('click', function(e){
        currentNum += e.target.textContent;
        console.log('current num: ' + currentNum);
        smallDisplay.textContent += e.target.textContent;
        bigDisplay.textContent = e.target.textContent;
        ops.forEach((op) => op.style.backgroundColor = 'white');
    }))  

    ops.forEach((op) => op.addEventListener('click', function(e){
        ops.forEach((resetOp) => resetOp.style.backgroundColor = 'white');
        previousNum = currentNum;
        console.log('previous num:' + previousNum);
        currentNum = '';
        smallDisplay.textContent += e.target.textContent;
        op.style.backgroundColor = '#b4c8ea';
        currentOp = e.target.textContent;
    }))

    equal.addEventListener('click', function(e){
        operate();
    })


    function operate(){
        const body = document.body;
        const h1 = document.createElement('h1');
        body.append(h1);
        
        if(previousNum !== '' && 
        currentNum !== '' &&
        currentOp !== ''){

            let result;
            switch(currentOp){
                case '/':
                    result = parseFloat(previousNum) / parseFloat(currentNum);
                    break;
                case '*':
                    result = parseFloat(previousNum) * parseFloat(currentNum);
                    break;
                case '-':
                    result = parseFloat(previousNum) - parseFloat(currentNum);
                    break;
                case '+':
                    result = parseFloat(previousNum) + parseFloat(currentNum);
                    break;
                default:
                    h1.textContent = 'Invalid';
                    break;
            }
            bigDisplay.textContent = result;
            console.log('result: ' + result);
            previousNum = '';
            currentNum = result;
            currentOp = '';

            console.log('previous num: ' +  previousNum);
            console.log('current num: ' + currentNum);
            console.log('current op: ' + currentOp);

        }
    }
});