// export const userLogin =() =>{
//     let input_email = document.querySelector("#input_name").value;
//     let input_password = document.querySelector("#input_password").value;
 
//     logIn(input_email,input_password)
//      .then((res)=>console.log('si se pudo'))
//      .catch(()=>console.log("error1"))
// }
import {new_user, log_Goog, log_Fb} from './initial.js'


/*REGISTRO DE USUARIO--------------------------------*/
export const register = ()=>{
    let input_email =document.querySelector("#input_name").value;
    let input_password = document.querySelector("#input_password").value;
    
    new_user(input_email,input_password)
     .then((res)=> console.log(res.displayname))
     .catch(()=>console.log("error"))
}

/*REGISTRO GOOGLE--------------------------------*/
export const authGoogle = () =>{
    log_Goog()
    .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("user", user);
        
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("error: ", errorMessage);
        
        // ...
      });
}

export const authFacebook = () =>{
    log_Fb()
    .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("user", user);

        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("error: ", credential);

        // ...
      });
}