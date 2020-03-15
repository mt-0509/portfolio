'use strict';

{
  // Fizz Buzz計算式
  document.querySelector('button').addEventListener('click', () => {
    
    for(let i = 1; i < 101; i++) {

      // inputに入力された値を代入
      let form1 = document.getElementById('fizznumber');
      let fizz =  form1.value;
      let form2 = document.getElementById('buzznumber');
      let buzz =  form2.value;

      let x = fizz;
      let y = buzz; 

      // documentに計算結果を表示する
      let output =  document.getElementById('output');
      let div = document.createElement('div');
      let result = output.appendChild(div);
  
      // 計算式
      if (!isNaN(x) && !isNaN(y)) { // 数字かどうか調べる
        if (i % (x * y) === 0) {
          result.innerHTML = `fizzBuzz${i}`;
        } else if (i % x === 0) {
          result.innerHTML = `fizz${i}`;
        } else if (i % y === 0) {
          result.innerHTML = (`Buzz${i}`);
        }
      } else {
        result.innerHTML = '数字を入力して下さい';
        return
      }
    }
  });
}