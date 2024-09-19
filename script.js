const countriescontainer = document.querySelector(".countries-container")


fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {
            // console.log(country);
            const countrycard = document.createElement("a");
            countrycard.classList.add("country-card")
            // countriescontainer.classList.add("countries-container")


            countrycard.innerHTML = `
     <img src="${country.flags.svg}" alt="">
                <div class="cardtxt">
                    <h3 class='card-title'>${country.name.common}</h3>
                    <p><b>Population : </b>${country.population.toLocaleString('en-IN') }</p>
                    <p><b>Region : </b>${country.region}</p>
                    <p><b>Capital : </b>${country.capital[0]}</p>
                </div>
`
            countriescontainer.append(countrycard)  
            
        });
    })
