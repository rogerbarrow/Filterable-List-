//get Input Element
let filterInput = document.getElementById('filterInput');

//add event listner
filterInput.addEventListener('keyup', filterNames);

function filterNames(){

//Get value of Input

let filterValue = document.getElementById('filterInput').value.toUpperCase();

//Get names UL

let ul = document.getElementById('names');

// get list from ul
let li = ul.querySelectorAll('li.collection-item');

//loop through collectin

for(let i = 0;i < li.lenght;i++){

  let a = li[i].getElementsByTagName('a')[0];
//if Match

if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){

  li[i].style.display = '';

} else {
  li[i].style.display = 'none';
}

}

}