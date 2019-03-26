'use strict';

const DB_MEMBER = {username: 'stefan', password: '123'};

const USER = document.querySelector('#login .username');
const PASSWORD = document.querySelector('#login .password');
const SUBMIT = document.querySelector('input.submit');

let login = function() {
    if(DB_MEMBER.username == USER.value && DB_MEMBER.password == PASSWORD.value) {
        window.location.replace('test.html');
    }else { 
        console.log('Benutzer nicht bekannt oder Passwort falsch');
    }    
};

SUBMIT.addEventListener('click', function() {login()});
