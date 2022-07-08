function emailValidate() {
    var email = document.Ecreate.email;
    var mailformat = "";
    if(email.value.match(mailformat))
    {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
    }
}

function fSubmit() {
    emailValidate();
}