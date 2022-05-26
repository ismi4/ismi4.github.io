function validateInputs() {
  let inputs = form.querySelectorAll(".control");
  let valid = [];
  inputs.forEach(function (i, j) {
    let checkAttr;
    if (i.getAttribute("type")) {
      checkAttr = i.getAttribute("type");
    } else {
      checkAttr = i.tagName;
    }

    switch (checkAttr) {
      case "text":
        let _thisVal = i.value;
        if (i.getAttribute("data-name") == "name") {
          if (!isNaN(i.value)) {
            _thisVal = "";
          }
        }
        if (_thisVal == "") {
          i.parentNode.classList.add("error");
          valid.push(i.getAttribute("name"));
        } else {
          i.parentNode.classList.remove("error");
        }
        break;
      case "tel":
        if (i.value == "" || isNaN(i.value)) {
          i.parentNode.classList.add("error");
          valid.push(i.getAttribute("name"));
        } else {
          i.parentNode.classList.remove("error");
        }
        break;
      case "email":
        let regEmail =
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (i.value == "" || !regEmail.test(i.value)) {
          i.parentNode.classList.add("error");
          valid.push(i.getAttribute("name"));
        } else {
          i.parentNode.classList.remove("error");
        }
        break;
      case "select":
        if (i[select.selectedIndex].value == "") {
          i.parentNode.classList.add("error");
          valid.push(i.getAttribute("name"));
        } else {
          i.parentNode.classList.remove("error");
        }
        break;
      default:
        if (i.value == "") {
          i.parentNode.classList.add("error");
          valid.push(i.getAttribute("name"));
        } else {
          i.parentNode.classList.remove("error");
        }
        break;
    }
  });

  if (valid.length > 0) {
    return false;
  } else {
    return true;
  }
}

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let checkValid = validateInputs();
  if (checkValid) form.submit();
});
