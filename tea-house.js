const images = document.getElementsByTagName('img');
console.log(images);

const card = document.getElementsByClassName('card');
console.log(card);

const htmlTag = document.getElementsByTagName('html')[0];
console.log(htmlTag);
htmlTag.setAttribute('data-theme', 'light')
console.log(htmlTag.getAttribute('data-theme'));


const button = document.getElementsByTagName('button')[0];
console.log(button.innerText);
