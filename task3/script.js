var form = document.getElementById("Ecreate");
form.addEventListener('submit', fSubmit);

function emailValidate() {
    // var email = document.Ecreate.email;
    // var mailformat = "";
    // if(email.value.match(mailformat))
    // {
    // return true;
    // }
    // else
    // {
    // alert("You have entered an invalid email address!");
    // email.focus();
    // return false;
    // }
    return true;
}

function fValidate(){

}

function fConsolidate(){
    var inObj = {
        name : document.getElementById("ename").value,
        id : document.getElementById("eid").value,
        email : document.getElementById("email").value,
        date : document.getElementById("jdate").value,
        role : document.getElementById("role").value,
        status : document.getElementById("status").value,
        experience : document.getElementById("exp").value,
        address : document.getElementById("addr").value,
        idproof : document.getElementById("idfile").value,
    }
    return inObj;
}

function debounce(){

}

function fSubmit(event) {
    event.preventDefault();
    // debounce();
    sbtn = document.getElementById("create")
    if(emailValidate()){
        var a = fConsolidate();
    }
    sbtn.classList.add("disabled");
    console.log(a);
}