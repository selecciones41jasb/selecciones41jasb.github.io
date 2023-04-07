//variables
var login_btn     = document.getElementById("login_btn"),
logout_btn      = document.getElementById("logout_btn"),
user_image      = document.getElementById("user_image"),
user_name_h1    = document.getElementById("user_name"),
login_panel   = document.getElementById("login-panel"),
user_panel   = document.getElementById("user-panel");
//iniciar con Github
var loginWithGithub = function(){

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        var provider = new firebase.auth.GithubAuthProvider();
        return  firebase.auth().signInWithPopup(provider);
    })
    .catch((error) => {

    });
}

//iniciar con google
var loginWithGoogle = function(){

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return  firebase.auth().signInWithPopup(provider);
        
    })
    .catch((error) => {
    });
}

//iniciar con facebook
var loginFacebook = function(){

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        var provider = new firebase.auth.FacebookAuthProvider();
        return  firebase.auth().signInWithPopup(provider);
    })
    .catch((error) => {
    });
 }

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        updateUser(user);
        user_panel.style.display = "inline-block"
    } else {
        login_panel.style.display = "inline-block"
    }
});


//agregar datos del usuario
var updateUser = function(user){
    user_name_h1.innerHTML = "Hola, " + user.displayName;
    user_image.src = user.photoURL;
    login_panel.style.display = "none"
  }

  var logout = function(){
    firebase.auth().signOut().then(function() {
      user_name_h1.innerHTML = "Acceso";
      user_image.src = "assets/images/JimeCoding.jpg";
      login_panel.style.display = "inline-block"
      user_panel.style.display = "none"
    }).catch(function(error) {
        // An error happened.
    });

  }