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


var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;


 if(sPageURL != ''){
  firebase.database().ref('/user/' + sPageURL).once('value').then(function (shap) {
    document.getElementById('Email').innerHTML = shap.child("Name").val() + ' ' + shap.child("Famyli").val();
  });

 }
 else { 
   alert('Ошибка такого пользователя нет');
   document.location.href='autorization.html';
 }

document.getElementById('qr').onclick = function() {
  window.location.href = "qr.html?" + sPageURL;
}
  


document.getElementById('a').onclick = function(){
  firebase.database().ref('/user/'+ sPageURL).once('value').then(function (shap) {
    var email = shap.child('Email').val();
    resetPassword(email);
  });
}

function resetPassword(email){
  firebase.auth().sendPasswordResetEmail(email).then(() => {
    alert('Вам на почту направленно письмо для сброса пароля');
  })
  .catch(error => {
    console.error(error);
  })
}

//asdadj



let delte,twodelte;
const filli = document.querySelector('.qr-code-content');
firebase.database().ref('/historyqr/'+ sPageURL ).once('value').then(function (shap) {
  shap.forEach(element => {
          delte  = element.key;
          twodelte  = element.key;
            var neww = `
            <div class="profil__history" >
                <img  src="`+element.child("Qrid").val()+`" alt="" class="qr__code">
                <div class="data">
                    <h2 class="name__history ">`+element.child("Name").val()+`</h2>
                    <div class="link"><a class="link" href="`+element.child("Link").val()+`" target="_blank" >Посмотреть</a></div>
                    <button class="delete"  onclick = "fi()" >Удалить</button>
                </div>
                
            </div>`;
            document.querySelector('.message__history').style.display='none';
            filli.innerHTML+=neww;
            

          });
});    


function fi() {
  var check = confirm("Удалить Qr ?");
  if(check == true)
  {
    firebase.database().ref('/historyqr/' + sPageURL + '/' + delte).remove();
    firebase.database().ref('/qr/' + twodelte).remove();
    alert('Qr успешно удален');
  } 
  else {
    alert('Хорошо удалять не буду');
  }
}


  
    





