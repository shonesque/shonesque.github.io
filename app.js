var config = {
    apiKey: "AIzaSyCowgpQ5gOi9BFlxFtneGtigu_HBDGqrPc",
    authDomain: "portfolio-d8844.firebaseapp.com",
    databaseURL: "https://portfolio-d8844.firebaseio.com",
    projectId: "portfolio-d8844",
    storageBucket: "portfolio-d8844.appspot.com",
    messagingSenderId: "498654877523"
  };
  firebase.initializeApp(config);
//reference subscribers collection
var subscribersRef = firebase.database().ref('subscribers');

// listen to submit  
document.getElementById('registerForm').addEventListener('submit', submitForm );


// submit form
function submitForm(e){
    e.preventDefault();

    var email = getInputVal('email');
// save email to Firebase
    saveSubs(email);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // clear form
    document.getElementById('registerForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save subs to FireBase
function saveSubs(email){
    var newSubsRef = subscribersRef.push();
    newSubsRef.set({
        email:email
    })
}