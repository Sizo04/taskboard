let getData = document.querySelector(".getData");

getData.addEventListener("click", () => {
    let fac = document.querySelector("#facilityName").value;
    let del = document.querySelector("#delNum").value;
    console.log(`${fac} be advised ${del}`);
})