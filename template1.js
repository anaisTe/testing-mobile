// import {new_user} from './firebase_init.js';
import {register, authGoogle, authFacebook} from './logins.js'


export default () => { 
const new_root = document.createElement('div');

const root_Content= `
<div>
<input id="input_name" type="email" placeholder="email">
<input id="input_password" type="password" placeholder="password">
<br>
<button id="login">login</button>
<br>
<img src="image/google.png" id="goog" alt="icon_google" />
<br>
<img src="image/facebook.png" id="fb" alt="icon_fb" />
</div>`;

new_root.innerHTML = root_Content;

const btn_login = new_root.querySelector('#login');
btn_login.addEventListener('click',register );

const btn_goog = new_root.querySelector('#goog');
btn_goog.addEventListener('click', authGoogle);

const btn_Fb = new_root.querySelector('#fb');
btn_Fb.addEventListener('click', authFacebook);

return new_root
}