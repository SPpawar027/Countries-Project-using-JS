const countryName = new URLSearchParams(window.location.search).get("name")
const backbtn = document.querySelector(".backbtn")
const img = document.querySelector(".country-detail-content img")
const countryHeading = document.querySelector(".country-detail-content h2")
const native = document.querySelector(".native")
const popu = document.querySelector(".popu")
const region = document.querySelector(".region")
const subRegion = document.querySelector(".subRegion")
const capt = document.querySelector(".capt")
const conti = document.querySelector(".conti")
const lang = document.querySelector(".lang")
const border2 = document.querySelector(".border2")
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
   .then((res) => res.json())
   .then(([country]) => {
      // console.log(Object.values(country.languages).join(" , "));

      img.src = country.flags.svg
      countryHeading.innerHTML = country.name.common

      if (country.name.nativeName) {
         native.innerHTML = Object.values(country.name.nativeName)[0].common
      }
      else {
         native.innerHTML = country.name.common
      }
      popu.innerHTML = country.population.toLocaleString('en-IN')
      region.innerHTML = country.region
      subRegion.innerHTML = country.subregion
      capt.innerHTML = country.capital
      conti.innerHTML = country.continents
      if(country.languages){
         lang.innerHTML = Object.values(country.languages).join(" , ")
      }
      if (country.borders) {
         country.borders.forEach(border => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
               .then(res => res.json())
               .then(([borderdata]) => {
                  const bordertag = document.createElement("a")
                  bordertag.innerHTML = borderdata.name.common
                  bordertag.href = `country.html?name=${borderdata.name.common}`
                  // console.log(bordertag);
                  border2.append(bordertag);
               })

         });
      }



   })
backbtn.addEventListener("click", () => {
   window.history.go(-1);
})

















