function weitePassword(){
    var passsword = generatePassword();
    var passwordText = document.querySelector('#passsword');

    passwordText.value = 'password';
}

function generatePassword(){
    var passwordOptions = createPasswordOptions();
}
function createPasswordOptions(){
    var passwordLength = createPasswordLength();

    var specialCharacters = confirm('Click OK to confirm including special characters.');
}

function createPasswordLength(){
    var passwordLength = prompt(
    'how long would you like your password to be? (Required to be between 10 - 128 characters');

    createPasswordLength();
}

if  (passwordLength < 10 || passwordLength > 128) {
    alert(
        'please try again, password length must be 10 - 128 characters in length.'
    );
    createPasswordLength()
}

