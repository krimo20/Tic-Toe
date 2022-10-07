
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let box;
let win = document.getElementById("win");
let p = document.getElementById("p");
let circle = "circle"
let x = "x"
let wich;
let count = 1;
let array = [  ,  ,  ,  ,  , ,  , , , ];
let state="safe" ;
function slide (team) {
    win.setAttribute("class","win slide1")
    p.textContent=`Team ${team} Won`
}


function add (name) {
     ;
    if (count===1 ){ count+=1 ; 
        array[name]=circle;
        box.innerHTML = `<iconify-icon class="icon" icon="akar-icons:circle" style="color: #373737;"></iconify-icon>`
        }
       else { count=1;
        array[name]=x;
        box.innerHTML = `<iconify-icon icon="bi:x-lg" style="color: #373737;"></iconify-icon>`}
}
function check () {

    for (i=3;i<10;) {
        if (array[i-2]!=undefined && array[i-1]!=undefined && array[i]!=undefined  ) {
            if ( array[i-2]===array[i-1] && array[i-1]===array[i]) {
                if (array[i-2]==="circle") {slide("Circle")}
                else {slide("X")}
            }
        }
        i+=3;
    }
    for (int=1;int<10;) {
        if (array[int]!=undefined && array[int+3]!=undefined && array[int+6]!=undefined  ) {
            if ( array[int]===array[int+3] && array[int+3]===array[int+6]) {
                if (array[int]==="circle") {slide("Circle")}
                else {slide("X")}
            }
        }
        int+=1;
    }
   
if (array[1]!=undefined && array[5]!=undefined && array[9]!=undefined  ) {
    if ( array[1]===array[5] && array[5]===array[9]) {
        if (array[1]==="circle") {slide("Circle")}
        else {slide("X")}
    }
}
if (array[7]!=undefined && array[5]!=undefined && array[3]!=undefined  ) {
    if ( array[7]===array[5] && array[5]===array[3]) {
        if (array[7]==="circle") {slide("Circle")}
        else {slide("X")}
    }
}
}

box1.onclick = function () {
    box = box1;
    add(1);
    check ()
}
box2.onclick = function () {
        box = box2 ;
        add(2);
        check ()
}
box3.onclick = function () {
    box = box3 ;
    add(3);
    check ()
}
box4.onclick = function () {
    box = box4 ;
    add(4);
    check ()
}
box5.onclick = function () {
    box = box5 ;
    add(5);
    check ()
}
box6.onclick = function () {
    box = box6 ;
    add(6);
    check ()
}
box7.onclick = function () {
    box = box7 ;
        add(7);
        check ()
}
box8.onclick = function () {
    box = box8 ;
    add(8);
    check ()
}
box9.onclick = function () {
    box = box9 ;
        add(9);
        check ()
}



