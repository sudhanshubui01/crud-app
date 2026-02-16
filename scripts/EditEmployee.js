const employeeFormEle = document.getElementById("employee-form");
const firstNameEle = document.getElementById("firstname");
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

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getEditEmployee() {
  try {
    let resp = await fetch(`http://localhost:5000/employee/${id}`);
    let data = await resp.json();
    console.log(data);

    //PRE-Fill INPUT FIELDS
    firstNameEle.value = data.firstname;
    middleNameEle.value = data.middlename;
    lastNameEle.value = data.lastname;
    dobEle.value = data.dob;
    emailEle.value = data.email;
    maritalStatusEle.value = data.maritalstatus;
    phoneNoEle.value = data.phoneno;
    streetEle.value = data.address.street;
    countryEle.value = data.address.country;
    zipEle.value = data.address.zipcode;
    cityEle.value = data.address.city;
    stateEle.value = data.address.state;
  } catch (error) {
    console.log(error);
    alert("Something went wrong❌");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEditEmployee();
});

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  // CREATE NEW UPDATED EMP OBJECT
  let updatedEmployeeData = {
    firstname: firstNameEle.value.trim(),
    middlename: middleNameEle.value.trim(),
    lastname: lastNameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalstatus: maritalStatusEle.value,
    phoneno: phoneNoEle.value,
    address: {
      street: streetEle.value.trim(),
      city: cityEle.value.trim(),
      state: stateEle.value.trim(),
      country: countryEle.value.trim(),
      zipcode: zipEle.value.trim(),
    },
  };

  try {
    let resp = await fetch(
      `https://crud-app-js-xw67.onrender.com/employees/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployeeData),
      },
    );
    console.log(resp);
    window.location.href = "AllEmployee.html";
  } catch (err) {
    console.log(err);
  }
});
