const countriescontainer = document.querySelector(".countries-container")
const filterbyregion = document.querySelector("#filter-by-region")
const filterinput = document.querySelector(".search-fun input")
const darkbtn = document.querySelector(".darkbtn");
const body = document.querySelector("body")
let allCountriesData;


fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data)=>{
        Rendercard(data)
        allCountriesData = data;
      
    })



filterbyregion.addEventListener("change", (e) => {

    // console.log(e.target.value);
    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
        .then((res) => res.json())
        .then(Rendercard)
})



function Rendercard(data) {
    countriescontainer.innerHTML = ""
    data.forEach((country) => {
      
        const countrycard = document.createElement("a");
        countrycard.href = `/country.html?name=${country.name.common}`
        countrycard.classList.add("country-card")
        // countriescontainer.classList.add("countries-container")


        countrycard.innerHTML = `
     <img src="${country.flags.svg}" alt="">
                <div class="cardtxt">
                    <h3 class='card-title'>${country.name.common}</h3>
                    <p><b>Population : </b>${country.population.toLocaleString('en-IN')}</p>
                    <p><b>Region : </b>${country.region}</p>
                    <p><b>Capital : </b>${country.capital?.[0]}</p>
                </div>
`
        countriescontainer.append(countrycard)

    });
}
filterinput.addEventListener("input" , (e)=>{
        console.log(e.target.value);
    const filteredcountry = allCountriesData.filter((country1) => country1.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    Rendercard(filteredcountry)
    
})
darkbtn.addEventListener("click" , ()=>{
    console.log("lcii");
    body.classList.toggle("dark");
})

