
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBl4H7neTA-oKqZyPTGF6UcEwf8fys0IBk",
    authDomain: "kwitter-8c4d5.firebaseapp.com",
    databaseURL: "https://kwitter-8c4d5-default-rtdb.firebaseio.com",
    projectId: "kwitter-8c4d5",
    storageBucket: "kwitter-8c4d5.appspot.com",
    messagingSenderId: "437213661423",
    appId: "1:437213661423:web:2ddb558e4a6e90dfe9331a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name=document.getElementById("user_name").nodeValue;
      firebase.database().ref("/").child(user_name).update({ purpose : "adding user"
    });

  }