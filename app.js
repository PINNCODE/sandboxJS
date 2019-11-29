console.log('app lista');

// document.getElementById("elem1").textContent = "Hola Trujillo";

// var element = document.createElement('p');
// element.textContent = " Child ";

// document.body.appendChild(element);

// window.alert('oh shit')

// var canvas = document.createElement('canvas');

// canvas.width = 500;
// canvas.height = 250;

// var ctx = canvas.getContext('2d');

// ctx.font = '30px Cursive';
// ctx.fillText("Hola", 50, 50);

// document.body.appendChild(canvas);

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

svg.width = 500;
svg.height = 50;

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');

text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';

text.textContent = 'Hello world';

svg.appendChild(text);
document.body.appendChild(svg);

// var img = new Image();

// img.src = 'https://img-9gag-fun.9cache.com/photo/ayoE7VW_700bwp.webp';
// document.body.appendChild(img);

console.log(isNaN(1));

var charCode = " ".charCodeAt();
console.log(charCode);