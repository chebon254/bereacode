 const firebaseConfig = {
    apiKey: "AIzaSyD3vV9JX6N7-Xr87mAopGTDTsnoWVFBuu4",
    authDomain: "bereacoding.firebaseapp.com",
    databaseURL: "https://bereacoding-default-rtdb.firebaseio.com",
    projectId: "bereacoding",
    storageBucket: "bereacoding.appspot.com",
    messagingSenderId: "190196887690",
    appId: "1:190196887690:web:3e2de0d53570e773147d73",
    measurementId: "G-S25RV0F2R1"
  };

//   firebase.initializeApp(firebaseConfig);
//   const contactFormDB = firebase.database().ref('contactForm')
//   document.getElementById("contactForm").addEventListener('submit', submitForm);

//   function submitForm(event) {
//     event.preventDefault();
//     var nameid = getElementVal('name');
//     var emailid = getElementVal('email');
//     var messageContent = getElementVal('msgContent');
//     console.log(nameid, emailid, messageContent);

//   }
//   const getElementVal = (id)=>{
//     return document.getElementById(id).value;
//   }


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert-msg").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert-msg").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
Footer
