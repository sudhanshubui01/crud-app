const employeeFormEle = document.getElementById("employee-form");
const fisrtNameEle = document.getElementById("firstname");
const middleNameEle = document.getElementById("middlename");
const lastNameEle = document.getElementById("lastname");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("phoneno");
const streetEle = document.getElementById("street");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipEle = document.getElementById("zipcode");

async function getEditEmployee() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(id);

  try {
    let resp = await fetch(`http://localhost:5000/employee/${id}`);
    let data = await resp.json();
    console.log(data);

    //PRE-Fill INPUT FIELDS
    fisrtNameEle.value = data.firstname;
    middleNameEle.value = data.middlename;
    lastNameEle.value = data.lastname;
    dobEle.value = data.dob;
    emailEle.value = data.email;
    maritalStatusEle.value = data.maritalstatus;
    phoneNoEle.value = data.phoneno;
    streetEle.value = data.address.street;
    countryEle.value = data.country;
    zipEle.value = data.zipcode;
    cityEle.value = data.city;
  } catch (error) {
    console.log(error);
    alert("Something went wrong❌");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEditEmployee();
});


employee