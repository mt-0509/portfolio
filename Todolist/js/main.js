'use strict';
{
  // 値を読み取る
  let newtasc = document.getElementById('newtasc');

  // 入力された値をリストに追加する
  let add = document.getElementById('add');
  add.addEventListener('click', () => {

    if (newtasc.value !== '') {
      // TODOリストに表示する
      let list = document.getElementById('list');
  
      // div要素を作成
      let wrapper = document.createElement('div');
      wrapper.className = 'wrap';
      let divone = document.createElement('div');
      let divtwo = document.createElement('div');
   
      // 作成した要素に追加 ①
      list.appendChild(wrapper);
      wrapper.appendChild(divone);
      wrapper.appendChild(divtwo);
  
      // li.button要素の作成 ②
      let li = document.createElement('li');
      li.className = 'divoneli';
  
      let btnone = document.createElement('button');
      btnone.innerHTML = '削除';
      btnone.className = 'btnone';
      let btntwo = document.createElement('button');
      btntwo.innerHTML = '作業中';
      btntwo.className = 'btntwo';
  
      // ②を①に追加
      wrapper.insertBefore(li, divone);
      wrapper.insertBefore(btnone, divtwo);
      wrapper.insertBefore(btntwo, btnone);
  
      // inputで読み取った値を表示
      li.innerHTML = newtasc.value;
  
  
      // 作業中・完了ボタンの切替
      btntwo.addEventListener('click', () => {
        if (btntwo.innerHTML === '作業中') {
          btntwo.innerHTML = '完了';
        } else {
          btntwo.innerHTML ='作業中';
        }
      });
  
      // 削除ボタンを押すと削除される
      btnone.addEventListener('click', () => {
        list.removeChild(wrapper);
      });
  
      // チェックボックスの表示の切替
      let all = document.getElementById('r1');
      let working = document.getElementById('r2');
      let done = document.getElementById('r3');
  
      // 作業中
      working.addEventListener('click', () => {
        if (btntwo.innerHTML !== '作業中') {
          wrapper.classList.add('none')
        } else {
          wrapper.classList.remove('none')
        }
      });
  
      // 完了
      done.addEventListener('click', () => {
        if(btntwo.innerHTML !== '完了') {
          wrapper.classList.add('none');
        } else {
          wrapper.classList.remove('none')
        }
      });
  
      // 全て
      all.addEventListener('click', () => {
        wrapper.classList.remove('none');
      });
  
      document.getElementById('newtasc').value = '';
    
    }

  });

}

