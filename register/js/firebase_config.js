// web configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7AvBmwVeg3WHkDmhU8quVhaabD-ZiqmI",
    authDomain: "eldoretjs-register.firebaseapp.com",
    databaseURL: "https://eldoretjs-register.firebaseio.com",
    projectId: "eldoretjs-register",
    storageBucket: "eldoretjs-register.appspot.com",
    messagingSenderId: "304066260240",
    appId: "1:304066260240:web:bd517dc6e509fe4b17c995"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   create a reference to register collection
const registerRef = firebase.database().ref('register');

// listen to submit event
document.getElementById('submitUser').addEventListener('submit',registerUser);

// registerUser function
function registerUser(e){
    e.preventDefault();

    // getInputValues
    let name = getInputValues('name');
 
    
}
// get the form inputs
const getInputValues = (id) => {
    return document.getElementById(id).value;
}