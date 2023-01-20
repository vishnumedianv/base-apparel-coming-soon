function check() {
  if (!document.getElementById("subscribe-email").checkValidity()) {
    //do stuff here ie. show errors

    document.getElementById("error").style.visibility = "visible";
    document.getElementById("error-text").style.visibility = "visible";
    document.getElementById("email-form-div").style["border-color"] = "red";
  } else {
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("error-text").style.visibility = "hidden";
    document.getElementById("email-form-div").style.border =
      "1px solid rgb(211, 211, 211)";
  }
}

function callMeIfValid() {
  //submit form or whatever
  alert("valid input");
}
