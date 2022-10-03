let dropdown = document.getElementsByClassName('fa-angle-down')[0];
let all_continent = document.getElementsByClassName('all-continent')[0];
let countries = document.getElementsByClassName('countries')[0];
let asia = document.getElementsByClassName('asia')[0];
let europe = document.getElementsByClassName('europe')[0];
let africa = document.getElementsByClassName('africa')[0];
let americas = document.getElementsByClassName('americas')[0];
let oceania = document.getElementsByClassName('oceania')[0];
const url = "https://restcountries.com/v2/all";
const search_input = document.getElementById('search-input');
let form = document.querySelector('form');
let main_content = document.getElementsByClassName('main-content')[0];
let container = document.getElementsByClassName('container')[0];
let color_mode = document.getElementsByClassName('color-mode')[0];
let body = document.querySelector('body');
let header = document.getElementsByClassName('header')[0];
let input = document.querySelector('input')
let continents = document.querySelector('#continents');
let p_data = document.getElementsByClassName('p-data')[0];

function info_of_particular_country(item) {

    main_content.classList.toggle('display-remove');
    let info_container = document.createElement('div');
    info_container.classList.add = 'info-of-country';
    let currencies = item.currencies[0].name;
    let borders = '';
    if(item.borders){
        let borders_arr = (item.borders);
        borders = borders_arr.toString();
    }
    let languages_arr = [];
    item.languages.forEach(ele => {
        languages_arr.push(ele.name)
    })
    let languages = languages_arr.toString();
    
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
    <p>Native Name: <span class = "native-name">${item.nativeName}</span></p>
                <p>Population: <span class="particular-country-population">${item.population}</span></p>
                <p>Region: <span class="particular-country-region">${item.region}</span></p>
                <p>Sub Region: <span class="sub-region">${item.subregion}</span></p>
                <p>Capital: <span class="particular-country-capital">${item.capital}</span></p>
                </div>
            <div class="right-data">
            <p>Top Level Domain: <span class="top-level-domain">${item.topLevelDomain[0]}</span></p>
            <p>Currencies: <span class="currencies">${currencies}</span></p>
            <p>Languages: <span class="languages">${languages}</span></p>
            </div>
            </div>
            <div class="border-countries">
            <p class="border-countries-data">Border Countries: </p>
            <div class="present-borders-countries"><span class = 'box'>${borders}</span></div>
            </div>
            </div>
            </div>
            `
    p_data.appendChild(info_container);
    let back_button = document.getElementsByClassName('back-button')[0];
    back_button.addEventListener('click', () => {
        remove_show(p_data);
        p_data.classList.toggle('display-remove');
    })
}

function remove_show(ele) {
    ele.classList.toggle('display-remove');
    clear_child(ele)
    main_content.classList.toggle('display-remove');
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

}
function country_information(res,country_data){
    for (let ele of country_data) {
        ele.addEventListener('click', (e) => {
            let content = ele.children[1].textContent;
            res.forEach(ele => {
                if (ele.name == content) {
                    info_of_particular_country(ele);
                }
            })
        })
    }    
}
    let country_data = document.getElementsByClassName('country-data');
    console.log(country_data)
    fetch(url)
        .then(response => response.json())
        .then(res => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let is_Present = false;
                const str = search_input.value
                if (str !== '') {
                    const val = str[0].toUpperCase() + str.substring(1);
                    clear_child(countries);
                    res.forEach(ele => {
                        if (val == ele.name) {
                            append_to_list(ele);
                            search_input.value = ''
                            is_Present = true;
                            return;
                        }
                    })
                    res.forEach(ele => {
                        if (val !== ele.name && !is_Present) {
                            search_input.value = ''
                            append_to_list(ele);
                        }
                    })
                    country_information(res,country_data)
                    return;
                }
                else if (str == '') {
                    clear_child(countries);
                    res.forEach(ele => {
                        append_to_list(ele);
                    })
                    country_information(res,country_data)
                    return;
                }
            })
            all_continent.addEventListener('click', (e) => {
                all_continent.classList.toggle('display-toggle')
                if (e.target.classList.contains('asia')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Asia') {
                            append_to_list(ele)
                        }
                    })
            country_information(res,country_data)
                    return;
                }
                else if (e.target.classList.contains('africa')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Africa') {
                            append_to_list(ele)
                        }
                    })
                    country_information(res,country_data)

                    return;
                }
                else if (e.target.classList.contains('europe')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Europe') {
                            append_to_list(ele)
                        }
                    })
                    country_information(res,country_data)

                    return;
                }
                else if (e.target.classList.contains('americas')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Americas') {
                            append_to_list(ele)
                        }
                    })
                    country_information(res,country_data)

                    return;
                }
                else if (e.target.classList.contains('oceania')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        if (ele.region == 'Oceania') {
                            append_to_list(ele)
                        }
                    })
                    country_information(res,country_data)

                    return;
                }
                else if (e.target.classList.contains('all')) {
                    clear_child(countries);
                    res.forEach(ele => {
                        append_to_list(ele)
                    })
                    country_information(res,country_data)
  
                    return;
                }
            })
            clear_child(countries);
            res.forEach(ele => {
                append_to_list(ele)
            })

            country_information(res,country_data)  

        })
        .catch(err => console.log(err))

function clear_child(class_name) {
    while (class_name.hasChildNodes()) {
        class_name.removeChild(class_name.lastChild);
    }
}

dropdown.addEventListener('click', () => {
    all_continent.classList.toggle('display-toggle')
})
