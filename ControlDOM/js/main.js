let right = document.getElementById('right');
let down = document.getElementById('down');
let spread = document.getElementById('spread');
let blur = document.getElementById('blur');
let opacity = document.getElementById('opacity');
let exampleCheck1 = document.getElementById('exampleCheck1');
let hover = document.getElementById('hover');
let button = document.getElementById('button');
let inout = document.getElementById('inout');
let gradient = document.getElementById('gradient');
let pile = document.getElementById('pile');
let checker = document.getElementById('checker');
let borders = document.getElementById('borders');
let rainbow = document.getElementById('rainbow');
let candy = document.getElementById('candy');
let flames = document.getElementById('flames');



let resulx = document.getElementById('resulx');
let resuly = document.getElementById('resuly');
let resuls = document.getElementById('resuls');
let resulb = document.getElementById('resulb');
let resulo = document.getElementById('resulo');
let visual = document.getElementById('visual');
let lab = document.getElementById('lab');

let color = document.getElementById('color');
let resulColor = document.getElementById('resulColor');

let boton = document.getElementById('boton');

right.addEventListener('input', function () {
    resulx.innerHTML = right.value;
    caja.style.boxShadow = right.value + 'px ' + down.value + 'px ' + blur.value + 'px ' + spread.value + 'px ' + color.value;
    visual.value = "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;
    lab.value= "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;
});

down.addEventListener('input', function () {
    resuly.innerHTML = down.value;
    caja.style.boxShadow = right.value + 'px ' + down.value + 'px ' + blur.value + 'px ' + spread.value + 'px ' + color.value;
    visual.value = "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;
    lab.value= "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;

});

spread.addEventListener('input', function () {
    resuls.innerHTML = spread.value;
    caja.style.boxShadow = right.value + 'px ' + down.value + 'px ' + blur.value + 'px ' + spread.value + 'px ' + color.value;
    visual.value = "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;
    lab.value= "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;

});

blur.addEventListener('input', function () {
    resulb.innerHTML = blur.value;
    caja.style.boxShadow = right.value + 'px ' + down.value + 'px ' + blur.value + 'px ' + spread.value + 'px ' + color.value;
    visual.value = "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;
    lab.value= "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;

});

opacity.addEventListener('input', function () {
    resulo.innerHTML = opacity.value;
    caja.style.boxShadow = right.value + 'px ' + down.value + 'px ' + blur.value + 'px ' + spread.value + 'px ' + color.value;
    visual.value = "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;
    lab.value= "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;

});

color.addEventListener('input', function () {
    resulColor.innerHTML = color.value;
    caja.style.boxShadow = right.value + 'px ' + down.value + 'px ' + blur.value + 'px ' + spread.value + 'px ' + color.value;
    visual.value = "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;
    lab.value= "box-shadow: " + right.value + "px " + down.value + "px " + blur.value + "px " + spread.value + "px " + color.value;

});

exampleCheck1.addEventListener('click', function () {
    exampleCheck1.innerHTML = inset.value;
    caja.style.boxShadow ='inset' + right.value + 'px ' + down.value + 'px ' + blur.value + 'px ' + spread.value + 'px ' + color.value;

});

hover.addEventListener('click', function(){
    caja.style.boxShadow = "0px 10px 13px -7px #000000";
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 0px 10px 13px -7px #000000";
});

sides.addEventListener('click', function(){
    caja.style.boxShadow = "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
});

button.addEventListener('click', function(){
    caja.style.boxShadow = "inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E";
});

mirrors.addEventListener('click', function(){
    caja.style.boxShadow = "inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA";
});
inout.addEventListener('click', function(){
    caja.style.boxShadow = "5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0)";
});
gradient.addEventListener('click', function(){
    caja.style.boxShadow = "0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 15px 5px rgba(0,0,0,0)";
});
pile.addEventListener('click', function(){
    caja.style.boxShadow = "5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF, 5px 5px 15px 5px rgba(0,0,0,0)";
});
checker.addEventListener('click', function(){
    caja.style.boxShadow = "10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000, 5px 5px 15px 5px rgba(0,0,0,0)";
});
borders.addEventListener('click', function(){
    caja.style.boxShadow = "  8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow:   8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D, 5px 5px 15px 5px rgba(0,0,0,0)";
});
rainbow.addEventListener('click', function(){
    caja.style.boxShadow = "7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0)";
});
candy.addEventListener('click', function(){
    caja.style.boxShadow = "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)";
});

flames.addEventListener('click', function(){
    caja.style.boxShadow = "4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, 5px 5px 15px 5px rgba(0,0,0,0)"; 
    caja.style.background = "#1C6EA4";
    visual.value = "box-shadow: 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, 5px 5px 15px 5px rgba(0,0,0,0)";
});