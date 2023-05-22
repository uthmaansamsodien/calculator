let result = document.querySelector('#output');
function display(value) {
    result.value += value;
}

document.querySelector('#clear').
addEventListener('click', ()=> {
    let output = result.value;
    result.value = output.slice(output.length)
})

document.querySelector('#backspace').
addEventListener('click',()=>   {
    let output = result.value;
    result.value = output.slice(0, -1)
} )
document.querySelectorAll('.operator').forEach((ops)=>{
    ops.addEventListener('click',(e)=>{
        result.value += e.target.innerText
    })
})

document.querySelector('#equal').
        addEventListener('click',()=>{
    result.value = eval(result.value).toFixed(2);
})
