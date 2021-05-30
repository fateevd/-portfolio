var firebaseConfig = {
    apiKey: "AIzaSyAGI2tHpvVREZUzyCUqcVsVs8UqJhYxXA0",
    authDomain: "qr-generation-324f0.firebaseapp.com",
    databaseURL: "https://qr-generation-324f0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "qr-generation-324f0",
    storageBucket: "qr-generation-324f0.appspot.com",
    messagingSenderId: "14604468026",
    appId: "1:14604468026:web:0376835ebfeaf02dd19a03",
    measurementId: "G-CNKPC34QSF"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();



document.getElementById('sinup').onclick = function (){
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    if(login != ''){
      ayt(login,password); 
    }
    else{
      alert('Ошибка, поля пустые заполните их')
    }
       
} 

function ayt (login,password){
  firebase.auth().signInWithEmailAndPassword(login, password)
  .then((userCredential) => {
    window.location.href = 'profil.html?' + userCredential.user.uid;
  })
  .catch((error) => {
  alert("Ошибочка");
  });
}





document.getElementById('reg').onclick = function myfi() {
    document.getElementById('text__data__auth').style.display='none';
    document.getElementById('data__user').style.display='block';
}


document.getElementById('back').onclick = function myfu() {
    document.getElementById('text__data__auth').style.display='block';
    document.getElementById('data__user').style.display='none';
}




document.getElementById('sinnup').onclick = function() { 
let email   = document.getElementById('Email').value;
let nam = document.getElementById('Name').value;
let famyli = document.getElementById('Famyli').value;
let pas = document.getElementById('passwordi').value;
let pastwo = document.getElementById('pastwo').value;
   if(email != ''){
     if(nam != ''){
       if(famyli != ''){
         if(pas != ''){
           if(pastwo != ''){
             if(pas == pastwo){
              firebase.auth().createUserWithEmailAndPassword(email, pas)
              .then((userCredential) => {
              let IDUser = userCredential.user.uid;
              firebase.database().ref('/user/' + IDUser ).set({
                Email: email,
                Name: nam,
                Famyli: famyli
              }).then(function() {
                window.location.href="profil.html?"+ IDUser;
              });
            })
            .catch((error) => {
             alert("Ошибочки");
            });
             }else {alert('Пароли не совпадают');}
           }else {alert('Пароль подтверждения пустой');}
         }else {alert('Пароль пустой');}
       }else {alert('Фамилия пустая');}
     }else {alert('Имя пустое');}
   }else {alert('Email пустой');}
}

document.getElementById('reset').onclick = function(){
  var email = document.getElementById('login').value;
  if(email != ''){
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      alert('Вам на почту направленно письмо для сброса пароля');
    })
    .catch(error => {
      console.error(error);
    })
  }
  else{
    alert('Укажите почту которую хотите восстановить');
  }
}



 

