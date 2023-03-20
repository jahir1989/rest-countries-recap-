const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data)) 

}

const displayCountries = countries => {
    // console.log(countries);
    const countriesHtml = countries.map(country => getCountryHtml(country))
    // console.log(countriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');

} 

const getCountryHtml = country => {
    const {name, flags, area, region} = country; // distrycturing
    return`
        <div class="country">
            <h2>${name.common}<h2/>
            <h5>Area: ${area}</h5>
            <h5>Region: ${region}</h5>
            <img src = "${flags.png}">
        </div>
    
    
    `
}

loadCountries();
