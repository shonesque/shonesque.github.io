import css from './css/style.css';
import config from './js/config.js';   

console.log('config');
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