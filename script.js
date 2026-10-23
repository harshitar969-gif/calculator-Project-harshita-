let current = document.getElementById('current');
let prev = document.getElementById('prev');
let expression = '';

function append(val){
    if(current.innerText === '0' && val !== '.') expression = '';
    expression += val;
    let displayVal = expression.replaceAll('*','×').replaceAll('/','÷');
    current.innerText = displayVal;
    prev.innerText = expression;
}
function clearAll(){
    expression = '';
    current.innerText = '0';
    prev.innerText = '';
}
function deleteOne(){
    expression = expression.slice(0,-1);
    current.innerText = expression || '0';
    prev.innerText = expression;
}
function calculate(){
    try{
        let evalExp = expression.replaceAll('%','/100');
        let result = eval(evalExp);
        prev.innerText = expression + ' =';
        current.innerText = result;
        expression = result.toString();
    }catch{
        current.innerText = 'Error';
        expression = '';
    }
}