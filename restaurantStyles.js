function clearErrors() {
  for (var i = 0; i < document.forms[0].elements.length - 1; i++){
    if (i < 5){
      if (document.forms[0][i].parentElement.parentElement.className.indexOf("has-") != -1){
        document.forms[0][i].parentElement.parentElement.className = "form-group row";
      }
    }

    else {
      if (document.forms[0][i].parentElement.parentElement.parentElement.className.indexOf("has-") != -1){
        document.forms[0][i].parentElement.parentElement.parentElement.className = "form-group row";
      }
    }
  }
}

function resetForm() {
  clearErrors();

  for (var i = 0; i < document.forms[0].elements.length - 1; i++){
    if (i < 3){
      document.forms[0][i].value = "";
    }

    else if (i >= 5){
      document.forms[0][i].checked = false;
    }
  }
}

function validateForm() {
  clearErrors();

  for (var i = 0; i < document.forms[0].elements.length - 1; i++){
    var value = document.forms[0][i].value;

    switch(i){
      case 0:
        if (value == ""){
          alert("Please enter your name");
          document.forms[0][i].parentElement.parentElement.className = "form-group row has-error";
          document.forms[0][i].focus();
          return false;
        }
        break;

      case 1:
        if (value == ""){
          alert("Please enter a valid email");
          document.forms[0][i].parentElement.parentElement.className = "form-group row has-error";
          document.forms[0][i].focus();
          return false;
        }
        break;

      case 2:
        if (/([0-9]{3}\-){2}[0-9]{4}/.test(value) == false){
          alert("Please enter your phone number (Ex: 555-555-5555)");
          document.forms[0][i].parentElement.parentElement.className = "form-group row has-error";
          document.forms[0][i].focus();
          return false;
        }
        break;

      case 5:
      case 6:
        if (document.forms[0][5].checked == false && document.forms[0][6].checked == false){
          alert("Have you been to the restaurant before?");
          document.forms[0][i].parentElement.parentElement.parentElement.className = "form-group row has-error";
          document.forms[0][i].focus();
          return false;
        }
        break;

      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        if (document.forms[0][7].checked == false && document.forms[0][8].checked == false && document.forms[0][9].checked == false && document.forms[0][10].checked == false && document.forms[0][11].checked == false){
          alert("When is the best day to contact you?");
          document.forms[0][i].parentElement.parentElement.parentElement.className = "form-group row has-error";
          document.forms[0][i].focus();
          return false;
        }
        break;
    } //Switch
  } //for loop

  alert("Thank you for your inquiry! We'll be sure to contact you soon!");

  resetForm();
  return false;
}
