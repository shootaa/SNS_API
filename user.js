
//ここからユーザー登録
function info() {
  const name = document.getElementById('name').value;
  const bio = document.getElementById('bio').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirmation = document.getElementById('password_confirmation').value;

  const url = 'https://teachapi.herokuapp.com/sign_up';

  const user = {
    sign_up_user_params: {
      name: name,
      bio: bio,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
};







//ここからログイン
function logIn() {
  const email = document.getElementById('log_email').value;
  const password = document.getElementById('log_password').value;
  const passwordConfirmation = document.getElementById('log_password_confirmation').value;
  const url = 'https://teachapi.herokuapp.com/sign_up';
  const log = {
    sign_in_user_params: {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }
  };
  
    


  fetch(url, {
    method: 'POST',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
};



//ここからユーザー一覧　ヘッダーにトークン

//ここから投稿一覧　ヘッダーにトークン

//ここからユーザー編集　ヘッダーにトークン

//ここからユーザー削除　ヘッダーにトークン

//ここからユーザーのタイムライン　ヘッダーにトークン

//ここから投稿作成　ヘッダーにトークン

//ここから投稿編集　ヘッダーにトークン

//ここkら投稿削除　ヘッダーにトークン













