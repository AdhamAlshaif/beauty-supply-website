function Validation() {
  if (
    document.forms["sign-up"]["first_name"].value == null ||
    document.forms["sign-up"]["first_name"].value == ""
  ) {
    alert("Please enter your first name.");
    return false;
  }
  if (
    document.forms["sign-up"]["last_name"].value == null ||
    document.forms["sign-up"]["last_name"].value == ""
  ) {
    alert("Please enter your last name.");
    return false;
  }
  if (
    document.forms["sign-up"]["email"].value == null ||
    document.forms["sign-up"]["email"].value == ""
  ) {
    alert("Please enter your email.");
    return false;
  }

  return true;
}
function Contact_Validation() {
  if (
    document.forms["contact"]["name"].value == null ||
    document.forms["contact"]["name"].value == ""
  ) {
    alert("Please enter your name.");
    return false;
  }

  if (
    document.forms["contact"]["email"].value == null ||
    document.forms["contact"]["email"].value == ""
  ) {
    alert("Please enter your email.");
    return false;
  }
  if (
    document.forms["contact"]["message"].value == null ||
    document.forms["contact"]["message"].value == ""
  ) {
    alert("Please enter your Qustion.");
    return false;
  }

  return true;
}

/*
Function to update the price for a check list cart (adapted from https://forum.code.org/t/checkboxes-to-create-a-cost-total-in-html/31038/3)
 */
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var items = document.getElementById("total");
var tax=document.getElementById("tax");
var amount=document.getElementById("full-price");

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", () => {
    var total = 0;
    var tax_money = 0;
    var order_total=0;

    for (var j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked) {
        total += parseFloat(checkboxes[j].dataset.price);
        tax_money+=parseFloat(checkboxes[j].dataset.price)*0.0875
        order_total +=parseFloat(checkboxes[j].dataset.price)+tax_money
      }
    }
    items.textContent = total.toFixed(2);
    tax.textContent = tax_money.toFixed(2)
    amount.textContent = order_total.toFixed(2)
  });
}


function Payment_Validation(){
  if (
    document.forms["pay"]["full-name"].value == null ||
    document.forms["pay"]["full-name"].value == ""
  ) {
    alert("Please enter your full name.");
    return false;
  }
  if (
    document.forms["pay"]["email"].value == null ||
    document.forms["pay"]["email"].value == ""
  ) {
    alert("Please enter your Email.");
    return false;
  }
  if (
    document.forms["pay"]["address"].value == null ||
    document.forms["pay"]["address"].value == ""
  ) {
    alert("Please enter your address.");
    return false;
  }
  if (
    document.forms["pay"]["city"].value == null ||
    document.forms["pay"]["city"].value == ""
  ) {
    alert("Please enter your city.");
    return false;
  }
  if (
    document.forms["pay"]["state"].value == null ||
    document.forms["pay"]["state"].value == ""
  ) {
    alert("Please enter your state.");
    return false;
  }
  if (
    document.forms["pay"]["zip"].value == null ||
    document.forms["pay"]["zip"].value == ""
  ) {
    alert("Please enter your zip code.");
    return false;
  }
  if (
    document.forms["pay"]["card-name"].value == null ||
    document.forms["pay"]["card-name"].value == ""
  ) {
    alert("Please enter your Name on card.");
    return false;
  }
  if (
    document.forms["pay"]["card-number"].value == null ||
    document.forms["pay"]["card-number"].value == ""
  ) {
    alert("Please enter your card number.");
    return false;
  }
  if (
    document.forms["pay"]["exp-month"].value == null ||
    document.forms["pay"]["exp-month"].value == ""
  ) {
    alert("Please enter your card expire month.");
    return false;
  }
  if (
    document.forms["pay"]["exp-year"].value == null ||
    document.forms["pay"]["exp-year"].value == ""
  ) {
    alert("Please enter your car expire year.");
    return false;
  }
  if (
    document.forms["pay"]["cvv"].value == null ||
    document.forms["pay"]["cvv"].value == ""
  ) {
    alert("Please enter your CVV code.");
    return false;
  }
  alert("Thank You!");

  return true;

}

function Contact() {
  if (
    document.forms["contact"]["name"].value == null ||
    document.forms["contact"]["name"].value == ""
  ) {
    alert("Please enter your first name.");
    return false;
  }
  if (
    document.forms["contact"]["email"].value == null ||
    document.forms["contact"]["email"].value == ""
  ) {
    alert("Please enter your email.");
    return false;
  }

  return true;
}