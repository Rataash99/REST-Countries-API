let dropdown = document.getElementsByClassName('fa-angle-down')[0];
let all_continent = document.getElementsByClassName('all-continent')[0];
let asia = document.getElementsByClassName('asia')[0];
let europe = document.getElementsByClassName('europe')[0];
let africa = document.getElementsByClassName('africa')[0];
let north_america = document.getElementsByClassName('north_america')[0];
let south_america = document.getElementsByClassName('south_america')[0];
let australia = document.getElementsByClassName('australia')[0];
let antarctica = document.getElementsByClassName('antarctica')[0];
const url = "https://restcountries.com/v2/all";
let asia_arr = [];
let europe_arr = [];
let australia_arr = [];
let antarctica_arr = [];
let africa_arr = [];
let south_america_arr = [];
let north_america_arr = [];


data = fetch(url)
.then(res => res.json())
.then((data) => data)
.catch(err => console.log(err))

dropdown.addEventListener('click',() => {
    all_continent.classList.toggle('display-toggle')
})
all_continent.addEventListener('click', (e) => {
    // console.log(e)
    console.log(data)
    // for(let i in data){
    //     console.log(i)
    // }
    if(e.target.classList.contains('asia')){
        // for(let i of Object.keys(data)){
        // }
        // console.log(typeof data)
    }
})