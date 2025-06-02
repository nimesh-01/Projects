let c = document.getElementById('mode');
const cline = document.getElementsByClassName('line');
const nod = document.getElementsByClassName("atag");
const svg = document.getElementsByClassName("paths");
const but = document.getElementsByClassName('but');
const circle = document.getElementsByClassName('circle');
const sline = document.getElementsByClassName('straight');
const m = document.getElementById('mode');
const main = document.getElementById('main');
const menu = document.getElementById('menus');
c.addEventListener('click', () => {
    if (c.style.backgroundColor == "rgb(42, 42, 42)") {
        c.style.backgroundColor = "white";
        document.body.style.backgroundColor = "rgb(250,250,246)";
        document.body.style.color = "black";
        m.style.borderColor = "black";
        m.style.backgroundColor = "white";
        m.children[0].setAttribute('fill', 'black');
        m.children[1].setAttribute('fill', 'white');
        main.style.borderColor = "black";
        menu.setAttribute('stroke', 'black');

        for (let i = 0; i < cline.length; i++) {
            cline[i].style.backgroundColor = "black";
        }
        for (let i = 0; i < nod.length; i++) {
            nod[i].style.color = "black";
        }
        for (let j = 0; j < svg.length; j++) {
            svg[j].setAttribute('fill', 'black');
        }
        for (let j = 0; j < but.length; j++) {
            but[j].style.backgroundColor = "black";
            but[j].style.color = "white";
        }
        for (let j = 0; j < circle.length; j++) {
            circle[j].style.border = "1px solid black";
        }
        for (let j = 0; j < sline.length; j++) {
            sline[j].style.backgroundColor = "black";
        }
    }
    else {
        c.style.backgroundColor = "black";
        document.body.style.backgroundColor = "rgb(44,44,44)";
        document.body.style.color = "rgb(255, 255, 255)";
        m.style.borderColor = "white";
        m.style.backgroundColor = "#2a2a2a";
        m.children[0].setAttribute('fill', 'transparent');
        main.style.borderColor = "white";
        menu.setAttribute('stroke', 'white');
        for (let i = 0; i < cline.length; i++) {
            cline[i].style.backgroundColor = "white";
        }
        for (let i = 0; i < nod.length; i++) {
            nod[i].style.color = "white";
        }
        for (let j = 0; j < svg.length; j++) {
            svg[j].setAttribute('fill', 'white');
        }
        for (let j = 0; j < but.length; j++) {
            but[j].style.backgroundColor = "white";
            but[j].style.color = "black";
        }
        for (let j = 0; j < circle.length; j++) {
            circle[j].style.border = "1px solid white";
        }
        for (let j = 0; j < sline.length; j++) {
            sline[j].style.backgroundColor = "white";
        }
    }
})