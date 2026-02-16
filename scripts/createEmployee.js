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

console.log(employeeFormEle);

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("FormSubmitted");

  // CREATE NEW EMP OBJECT
  try {
    let newEmployeeData = {
      firstname: fisrtNameEle.value.trim(),
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

    let res = await fetch("http://localhost:5000/employee", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployeeData), // SEND EMP DATA IN JSON-FORMAT
    });
    console.log(res);
    window.location.href = "AllEmployee.html";
  } catch (error) {
    console.log(error);
    alert("Something Went Wrong ❌");
  }
});
