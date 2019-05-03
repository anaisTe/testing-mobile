// CREAR CUENTA-------------------------------
export const new_user = (email,password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

// CUENTA EN GOOGLE-------------------------------
export const log_Goog = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}

// CUENTA EN FACEBOOK-------------------------------
export const log_Fb = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}