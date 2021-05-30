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


    
  



document.getElementById('generation-qr').onclick = function() {
let nam = document.getElementById('name').value;
let address = document.getElementById('address').value;
let description = document.getElementById('description').value;
const file = document.getElementById('imgI').files[0];
    if(nam != ''){
        if(address != ''){
            if(description != ''){
                const ref = firebase.storage().ref()

                 const name = new Date() + '-' + file.name

                const metadata = {
                contentType:file.type
                }
                const task = ref.child(name).put(file,metadata)
                task
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(url => {
                    let id = firebase.database().ref('/qr/').push({
                        Name: nam,
                        Address: address,
                        De: description,
                        URl: url
                    }).key; 
                    const link = "https://qr-generation-324f0.web.app/skaner.html";
                let qr_code = "https://api.qrserver.com/v1/create-qr-code/?data=" +  link +"?"+ id + "&size=250x250";
                document.getElementById('img').src = qr_code;
                let linkhistory = link +"?"+ id;
                history(id,qr_code,linkhistory,nam);
                })       
            }
            else{
                alert("Ошибка, вы не указали описание");
            }
        } 
        else{
            alert("Ошибка, вы не указали адрес");
        }
    } 
    else{
        alert("Ошибка, вы не указали название");
    }
}

var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

function history(id,qr_code,linkhistory,Name) {
    firebase.database().ref('/ user /' + sPageURL).once('value').then(function (shap) {
        let email = shap.child("Email").val();
        firebase.database().ref('/historyqr/'+ sPageURL +'/'+ id).set({
            Qrid:qr_code,
            Name: Name,
            Link: linkhistory,
            Email: email
            
        })
      });
    document.getElementById('name').value ='';

    document.getElementById('address').value ='';

    document.getElementById('description').value ='';

    document.getElementById('imgI').value ='';

}

document.getElementById('downs').onclick = function() { 
    const aa = document.getElementById('img').src;
    saveUrlAsFile( aa, 'image.jpeg');
}


function saveUrlAsFile(url, fileName) {    
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.click();
}


document.getElementById('thing').onclick = function(){
    document.getElementById("input__data__two").style.display="block";
    document.getElementById("input__data").style.display="none";

}

document.getElementById('map').onclick = function(){
    document.getElementById("input__data__two").style.display="none";
    document.getElementById("input__data").style.display="block";

}


document.getElementById('generation-qr-things').onclick = function() {
    const idvk = document.getElementById('IDVK').value; 
    if(idvk != '')
    {
        let link = "https://vk.me/moneysend/";
        let qr_code = "https://api.qrserver.com/v1/create-qr-code/?data=" +  link + idvk + "&size=250x250";
        document.getElementById('img').src = qr_code;
        document.getElementById('IDVK').value = '';
    }
    else
    {
        alert("Вы не указали свой ID");
    }
}









