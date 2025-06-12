let currentNum = +localStorage.getItem('number');
currentNum +=1;
localStorage.setItem('number', currentNum);

document.getElementById('target').innerText = currentNum;