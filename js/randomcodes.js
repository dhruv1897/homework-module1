function generateCode() {
    var code = "";
    var getCode = "";
    var btnvalue;
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$";
  
    for (i = 1; i <= 8; i++) {
      var char = Math.random() * str.length;
      code += str.charAt(char);
    }
    console.log("code", code);
    return code;
  }
  document.getElementById("codes").innerHTML = generateCode();
  
  function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true) {
      document.getElementById("submit").style.backgroundColor =
        "rgba(73, 119, 209,0.3)";
      document.getElementById("submit").style.color = "rgba(255,255,255,0.5)";
    } else {
      document.getElementById("submit").style.backgroundColor =
        "rgba(73, 119, 209, 1)";
      document.getElementById("submit").style.color = "rgba(255,255,255,1)";
    }
  }
  var codebox = document.getElementById("codes");
  codebox.addEventListener("input", evaluateCode);
  
  function evaluateCode() {
    getCode = document.getElementById("codes").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();
  
    if (charset1.length == charset2.length && charset1 == charset2) {
      disableButton(false);
    }
  }
  disableButton();
  
  
  function changeLabel() {
    
  }
  