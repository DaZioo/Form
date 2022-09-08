function SendMessage() {
        const inputName = document.getElementById("name");
        const inputEmail = document.getElementById("email");
        const inputTel = document.getElementById("tel");
        if (inputName.value == "" && inputEmail.value == "" 
        	&& inputTel.value == "") {
          inputName.style.borderColor = "red";
          inputEmail.style.borderColor = "red";
          inputTel.style.borderColor = "red";
        }
      }