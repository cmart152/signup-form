document.querySelector("button").onclick = function(){
  let password = document.querySelector('.password');
  let cpassword = document.querySelector('.cpassword');
  let incorrectPassword = document.getElementById('red-text')
  const regEx = /(?=^.{7,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

  if (incorrectPassword != null) {
    password.classList.remove("invalid");
    cpassword.classList.remove("invalid");
    incorrectPassword.remove()
  }

  if (password.value != cpassword.value) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Passwords do not match";
    newDiv.style.color = "red"
    newDiv.classList.add("uber-small-font")
    newDiv.setAttribute('id', 'red-text')
    document.getElementById("confirm").appendChild(newDiv);
    password.classList.add("invalid");
    cpassword.classList.add("invalid");
    return false
  } else if (regEx.test(password.value)  == false) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Password does not match required pattern";
    newDiv.style.color = "red"
    newDiv.classList.add("uber-small-font")
    newDiv.setAttribute('id', 'red-text')
    document.getElementById("confirm").appendChild(newDiv);
    password.removeAttribute("placeholder")
    cpassword.removeAttribute("placeholder")
    password.classList.add("invalid");
    cpassword.classList.add("invalid");
    return false
  }
}