function getFirstSelector(selector){
  const selected = document.querySelector(selector) 
  return selected;
}

function nestedTarget(){
  return document.querySelector('div.target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }  
}

function deepestChild(){
  return document.getElementById('grand-node').querySelector('div')
}