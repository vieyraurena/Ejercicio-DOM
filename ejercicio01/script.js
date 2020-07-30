function getNumRamdom(max, min){
  return Math.floor(Math.random() * (max - min) + min);
}

let element = document.querySelectorAll('.container p')
console.log(element);

function rgb(){
  for (let index = 0; index < element.length; index++){
    let red = getNumRamdom(256, 0);
    let green = getNumRamdom(256, 0);
    let blue = getNumRamdom(256, 0);
    element[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  } 
}

rgb();


