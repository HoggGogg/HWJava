const input = document.getElementById('xxx');
const resDiv = document.getElementById('result');

input.oninput = function () {
    resDiv.innerText = +this.value * 2.2;
}