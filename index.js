let dropdown = document.getElementsByClassName('fa-angle-down')[0];
let all_continent = document.getElementsByClassName('all-continent')[0];
let countries = document.getElementsByClassName('countries')[0];
let asia = document.getElementsByClassName('asia')[0];
let europe = document.getElementsByClassName('europe')[0];
let africa = document.getElementsByClassName('africa')[0];
let americas = document.getElementsByClassName('americas')[0];
let oceania = document.getElementsByClassName('oceania')[0];
let country_data = document.getElementsByClassName('country-data')[0];
const url = "https://restcountries.com/v2/all";
const search_input = document.getElementById('search-input');
let form = document.querySelector('form');
let container = document.getElementsByClassName('container')[0];
let body = document.querySelector('body')
// console.log(body.hasChildNodes());

function info_of_particular_country(item){

    container.classList.toggle('display-remove');
    let info_container = document.createElement('div');
    let borders = [];
    info_container.classList.add = 'info-of-country';
    info_container.innerHTML = `
    <div class="back-button">
    <i class="fa-solid fa-arrow-left-long"></i>
    <p>Back</p>
</div>
<div class="particular-country-content">
    <img src=${item.flag} alt="" class="particular-country-flag">
    <div class="country-info">
        <h1 class="particular-country-name">${item.name}</h1>
        <div class="particular-country-data">
            <div class = 'left-data'>
                <p>Native Name: <span class = "native-name">${item.nativename}</span></p>
                <p>Population: <span class="particular-country-population">${item.population}</span></p>
                <p>Region: <span class="particular-country-region">${item.region}</span></p>
                <p>Sub Region: <span class="sub-region">${item.subregion}</span></p>
                <p>Capital: <span class="particular-country-capital">${item.capital}</span></p>
            </div>
            <div class="right-data">
                <p>Top Level Domain: <span class="top-level-domain">${item.topleveldomain}</span></p>
                <p>Currencies: <span class="currencies">${item.currencies}</span></p>
                <p>Languages: <span class="languages">${item.languages}</span></p>
            </div>
        </div>
        <div class="border-countries">
            <p class="border-countries-data">Border Countries: </p>
            <div class="present-borders-countries">
                <div class="boxes">bsbebbc</div>
                <div class="boxes">bcbdiess</div>
            </div>
        </div>
    </div>
</div>
    `
}
function fetch_countries_data() {
    fetch(url)
        .then(response => response.json())
        .then(res => {
            form.addEventListener('submit',(e) => {
                e.preventDefault();
                let is_Present = false;
                const str = search_input.value
                if(str !== ''){
                    const val = str[0].toUpperCase() + str.substring(1);
                    clear_child(countries);
                    res.forEach(ele => {
                        if(val == ele.name){
                            append_to_list(ele);
                            search_input.value = ''
                            is_Present = true;
                            return;
                        }
                    })
                    res.forEach(ele => {
                        if(val !== ele.name && !is_Present){
                            search_input.value = ''
                            append_to_list(ele);
                        }
                    })
                    return;
                }
                else if(str == ''){
                    clear_child(countries);
                    res.forEach(ele => {
                        append_to_list(ele);
                    })
                    return;
                }
            })
            all_continent.addEventListener('click', (e) => {
                all_continent.classList.toggle('display-toggle')
                if (e.target.classList.contains('asia')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Asia'){
                            append_to_list(ele)
                        }
                    })
                    return;
                }
                else if (e.target.classList.contains('africa')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Africa'){
                            append_to_list(ele)
                        }
                    })
                    return;
                }
                else if (e.target.classList.contains('europe')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Europe'){
                            append_to_list(ele)
                        }
                    })
                    return;
                }
                else if (e.target.classList.contains('americas')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Americas'){
                            append_to_list(ele)
                        }
                    })
                    return;
                }
                else if (e.target.classList.contains('oceania')){
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Oceania'){
                            append_to_list(ele)
                        }
                    })
                    return;
                }
                else if (e.target.classList.contains('all')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        append_to_list(ele)
                    })
                    return;
                }
            })
            clear_child(countries);
            res.forEach(ele => {
                append_to_list(ele)
            })
        })
        .catch(err => console.log(err))
}

function append_to_list(ele) {
    let div = document.createElement('div')
    div.classList.add('country-data');
    
    div.innerHTML = `<img class = 'flag-img' src=${ele.flag} alt="">
    <h3 class="country-flag">${ele.name}</h3>
    <p >Population: <span class="population">${ele.population}</span></p>
    <p >Region: <span class="region">${ele.region}</span></p>
    <p >Capital: <span class="capital">${ele.capital}</span></p>`
    
    countries.appendChild(div);
    country_data.addEventListener('click',info_of_particular_country(ele))
}
function clear_child(class_name) {
    while (class_name.hasChildNodes()) {
        class_name.removeChild(class_name.lastChild);
    }
}
dropdown.addEventListener('click', () => {
    all_continent.classList.toggle('display-toggle')
})
fetch_countries_data();
