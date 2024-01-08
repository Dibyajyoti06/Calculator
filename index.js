const input = document.getElementById('input-Box');
let buttons = document.querySelectorAll('button');
let string = '';
let arr = Array.from(buttons);
arr.forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == 'AC') {
      input.value = '';
      string = '';
    } else if (e.target.innerHTML == 'DEL') {
      newString = string.slice(0, -1);
      string = newString;
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
