function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; ++i) {
    var oldVS = lis[i].innerHTML;
    var oldV = parseInt(oldVS, 10);
    lis[i].innerHTML = (oldV + n).toString();
  }
}

function deepestChild() {
  
}