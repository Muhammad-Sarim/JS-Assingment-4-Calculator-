function number(num){
    var inp = document.getElementById("input");
    inp.value += num
}

function calc(){
    var inp = document.getElementById("input");
    console.log(inp.value);
    inp.value = eval(inp.value);
}

function allClear(){
    var inp = document.getElementById("input");
    inp.value = ""
}

function oneClear(){
    var inp = document.getElementById("input")
    inp.value = inp.value.slice(0, -1)
}