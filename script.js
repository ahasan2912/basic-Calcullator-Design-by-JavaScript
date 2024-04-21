
function deleteMe(){
   let deletedigit = document.querySelector('#myResult');
   deletedigit.value = "";
}

function calculator(newValue){
    let number = document.querySelector('#myResult');
    number.value += newValue;
}

function Answer(){
    let a = document.querySelector('#myResult').value;
    let b = eval(a);
    document.querySelector('#myResult').value = b;
}
function singleDelete(){
    let number = document.querySelector('#myResult');
    number.value = number.value.slice(0, -1);
}