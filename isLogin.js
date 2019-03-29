'use strict';

const ISLOGIN = sessionStorage.getItem('login');
const URL = location.href;

let inSide = URL.includes('index');

let checkLogin = function() {
    if(ISLOGIN == 'yes') {
        console.log('Du bist eingeloggt');
        if(inSide) {
            goInside();
        }
    }else if(!inSide){
        location.replace('index.html');
        console.log('Du bist nicht mehr eingeloggt');
    }
};

checkLogin();