'use strict';

const DB_MEMBER = [
                {username: 'tom', password: '456'}, 
                {username: 'stefan', password: '123'},
                {username: 'josef', password: 'qwertz'}
            ];

const USER = document.querySelector('#login .username');
const PASSWORD = document.querySelector('#login .password');
const SUBMIT = document.querySelector('input.submit');

let login = function() {
    let isUser = DB_MEMBER.map(function(e) { 
        return e.username; 
    }).indexOf(USER.value);

    if(isUser >= 0){
        if(DB_MEMBER[isUser].username == USER.value) {
            if(DB_MEMBER[isUser].password == PASSWORD.value) {
                window.location.replace('test.html');
            }else {
                console.log('Benutzer nicht bekannt oder Passwort falsch');
            }
        }
    }else {
        console.log('Benutzer nicht bekannt oder Passwort falsch');
    }
};

SUBMIT.addEventListener('click', function() {login()});
