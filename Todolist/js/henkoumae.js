'use strict';
{
  // 値を読み取る
  let newtasc = document.getElementById('newtasc');

  
  
  // 入力された値をリストに追加する
  let add = document.getElementById('add');
  add.addEventListener('click', () => {

    // TODOリストに表示する
    let list = document.getElementById('list');
    let li = document.createElement('li');
    let todolist = list.appendChild(li);
    
    // リストのボタンを作成する
    // let div = document.createElement('div');
    // list.insertBefore(div, list);




    

    // 追加された内容を読み取る
    todolist.innerHTML = newtasc.value;

  });
}