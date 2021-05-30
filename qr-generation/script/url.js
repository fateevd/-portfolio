
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
        
        firebase.database().ref('/qr/'+ sPageURL).once('value').then(function (shap) {
                if(shap.child("Name").val() != null){     
                        document.getElementById('Name').innerHTML = shap.child("Name").val(); 
                        document.getElementById('address').innerHTML = shap.child("Address").val(); 
                        document.getElementById('description').innerHTML = shap.child("De").val(); 
                        document.getElementById('imgLink').src = shap.child('URl').val();
                }
                else { 
                        alert('Страница не найдена');
                        window.location.href = "index.html";
                }
        });        
}
else {
        alert('Ошибка');
        document.location.href="index.html";
}



