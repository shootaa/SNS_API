

cconst name = document.getElementById('name');
const bio = document.getElementById('bio');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confirmation= document.getElementById('password_confirmation');

//ここからユーザー登録//
var url = 'https://teachapi.herokuapp.com/sign_up';
const sign_up_user_params = [name,bio,email,password,password_confirmation];

fetch(url, {
  method: 'POST', 
  body: JSON.stringify(sign_up_user_params), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));




//ここからログイン

//ここからユーザー一覧

//ここから投稿一覧

//ここからユーザー編集

//ここからユーザー削除

//ここからユーザーのタイムライン

//ここから投稿作成

//ここから投稿編集

//ここkら投稿削除













