var form = document.getElementById("Ecreate");
form.addEventListener('submit', debounce(fSubmit));

// Email Validator
function emailValidate() {

    var email = document.getElementById("email");
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(email.value.match(mailformat))
    {
        return true;
    }

    else
    {
        alert("Enter a valid email ID!");
        email.focus();
        return false;
    }

    // return true;
}

// Placeholder for validators
function fValidate(){

    a = emailValidate();
    if(a) {
        return true;
    }

}

// Form value consolidation
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

// Submit Debounce

function debounce(func, timeout = 2000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }


// Change Submit Button Color
function btnColor(){
    sbtn = document.getElementById("create");
    sbtn.classList.add("disabled");
}

// Form Handler
function fSubmit(event) {
    // console.log(event);
    event.preventDefault();
    if(fValidate()){
        var a = fConsolidate();
        btnColor();
        console.log(a);
        return true;
    }
    return false;
}