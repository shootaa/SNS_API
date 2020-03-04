
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
  const url = 'https://teachapi.herokuapp.com/sign_in';
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
  }).then((res) => {
    const json = res.json();
    return json;
  })
    .then(json => {
      console.log(json)
      console.log(json.token)
      localStorage.setItem('token', json.token)
      localStorage.setItem('ID', json.id)
      console.log(json.id)
    })
    .catch(error => console.error('Error:', error));
};

//ここからユーザー一覧　ヘッダーにトークン
function userList() {
  const page = document.getElementById('page').value;
  const limit = document.getElementById('limit').value;
  const query = document.getElementById('query').value;
  const url = 'https://teachapi.herokuapp.com/users';
  fetch(url + '/?page=' + page + '&limit=' + limit + '&query=' + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then(res => res.json())
    .then(json => {
      console.log(json)
    })
    .catch(error => console.error('Error:', error));
};

//ここからユーザー編集　ヘッダーにトークン
function userEdit() {
  const name = document.getElementById('name_edit').value;
  const bio = document.getElementById('bio_edit').value;
  const id = localStorage.getItem('ID');
  const url = ' https://teachapi.herokuapp.com/users/';
  const edit = {
    user_params: {
      name: name,
      bio: bio,
    }
  };
  fetch(url + id, {
    method: 'PUT',
    body: JSON.stringify(edit),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then(res => res.json())
    .then(json => {
      console.log(json)
    })
    .catch(error => console.error('Error:', error));
};


//ここからユーザー削除　ヘッダーにトークン
function userDelete() {
  const id = localStorage.getItem('ID');
  const url = ' https://teachapi.herokuapp.com/users/';
  fetch(url + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then(res => res.json())
    .then(json => {
      console.log(json)
    })
    .catch(error => console.error('Error:', error));
};



//ここから投稿作成　ヘッダーにトークン
function postCreate() {
  const text = document.getElementById('text').value;
  const url = 'https://teachapi.herokuapp.com/posts';
  const post = {
    post_params: {
      text: text
    }
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
};

//ここから投稿編集　ヘッダーにトークン
function postEdit() {
  const postId = document.getElementById('postId').value;
  const text = document.getElementById('textEdit').value;
  const url = ' https://teachapi.herokuapp.com/posts/';
  const post = {
    post_params: {
      text: text
    }
  };
  fetch(url + postId, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
};

//ここkら投稿削除　ヘッダーにトークン
function postDelete() {
  const postId = document.getElementById('postDelete').value;
  const url = 'https://teachapi.herokuapp.com/posts/';
  const post = {
    post_params: {
      text: text
    }
  };
  fetch(url + postId, {
    method: 'DELETE',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
};


//ここから投稿一覧　ヘッダーにトークン
function postList() {
  const page = document.getElementById('post_page').value;
  const limit = document.getElementById('post_limit').value;
  const query = document.getElementById('post_query').value;
  const url = 'https://teachapi.herokuapp.com/posts';


  fetch(url + '/?page=' + page + '&limit=' + limit + '&query=' + query, {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response))
    )
    .catch(error => console.error('Error:', error));
};

//ここからユーザーのタイムライン　ヘッダーにトークン










