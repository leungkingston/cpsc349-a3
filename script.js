let first=-1;
let second=-1;
let result=0;
var opLast = false;
var opBool = false;
var plusBool = false;
var minusBool = false;
var multBool = false;
var divBool = false;

function calcy(){
    const text = document.getElementById('textbox');
    if(opBool&&!opLast){
        second=text.value;
        if(second!=-1){
            if (plusBool){
                result = +first + +second;
            }
            else if(minusBool){
                result = first - second;
            }
            else if(multBool){
                result = first * second;
            }
            else if(divBool){
                result = first / second;
            }
            text.value = result;
        }
    }
    opLast = false;
    opBool = false;
    plusBool = false;
    minusBool = false;
    multBool = false;
    divBool = false;
    first=-1;
    second=-1;
}
function clearEvery(){
    opLast = false;
    opBool = false;
    plusBool = false;
    minusBool = false;
    multBool = false;
    divBool = false;
    const text = document.getElementById('textbox');
    text.value = '';

}
function changeNum(num){
    const text = document.getElementById('textbox');
    if (opLast){
        text.value = '';
        opLast=false;
    }
    text.value += num;
}
function doOp(operator){
    const text = document.getElementById('textbox');
    if (!opBool){
        opBool=true;
        opLast=true;
        first = text.value;
        if (operator=='+'){
            plusBool = true;
        }
        else if(operator=='-'){
            minusBool = true;
        }
        else if(operator=='x'){
            multBool = true;
        }
        else if(operator=='/'){
            divBool = true;
        }
        text.value += operator;
    }
}