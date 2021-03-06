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
    let email = getInputValues('email');
    let gender = getInputValues('gender');
    let gitHub= getInputValues('git_user');
    let linkedIn = getInputValues('linked_user');
    let phone = getInputValues('phone');
    let stack = getInputValues('stack');

    // saveInfoToFirebase
    saveInfoToFirebase(name,email,gender,gitHub,linkedIn,phone,stack);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3.5 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
        window.open('https://eldoretjavascript.netlify.com');
    },4500)
 

    
}
// get the form inputs
const getInputValues = (id) => {
    return document.getElementById(id).value;
}

// saveInfoToFirebase
const saveInfoToFirebase = (name,email,gender,gitHub,linkedIn,
    phone,stack) => {
    const pushToFirebase = registerRef.push();
    // set the info to an object
    pushToFirebase.set({
        name,
        email,
        gender,
        gitHub,
        phone,
        linkedIn,
        stack
    })
}