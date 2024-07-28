const formData = document.getElementById("mainForm");
formData.addEventListener("submit", handleFormSubmit);

const username = document.getElementsByName("uname")[0];
const password = document.getElementsByName("pwd")[0];

//If we have a bigger form writting all fecting one by one feild name is hectic on predefined class solves this problem that is  FORMDATA class

function handleFormSubmit(event) {
  //event defines all the properties of the submit event and prevent is one of them
  event.preventDefault(); //Prevetns the reload of the page
  const userDetails = { Username: username.value, Password: password.value };
  console.log("UserName:", username.value);
  console.log("Password:", password.value);
  console.log("Id and Password", userDetails);
  //This approach will also work
  const dataForm = new FormData(formData); //created and object of a class
  //Should be defined after the function is form is submitted then only it will take values otherwise it will be empty
  //Variabel accessing using class and the object
  console.log();
  console.log("User Name: ", dataForm.get("uname"));
  console.log("Password: ", dataForm.get("pwd"));
  const newStorage = {};
  dataForm.forEach((val, index) => {
    newStorage[index] = val;
  });
  console.log(newStorage);
  console.log("Form Submitted");
}
