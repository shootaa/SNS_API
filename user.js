
//ここからユーザー登録
function info() {
  const name = document.getElementById('name').value;
  const bio = document.getElementById('bio').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password_confirmation = document.getElementById('password_confirmation').value;

  var url = 'https://teachapi.herokuapp.com/sign_up';

  const user = {
    sign_up_user_params: {
      name: name,
      bio: bio,
      email: email,
      password: password,
      password_confirmation: password_confirmation
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

//ここからユーザー一覧

//ここから投稿一覧

//ここからユーザー編集

//ここからユーザー削除

//ここからユーザーのタイムライン

//ここから投稿作成

//ここから投稿編集

//ここkら投稿削除













