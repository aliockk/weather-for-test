const url='https://api.openweathermap.org/data/2.5/'
const key='9245d888aa89b4c1a06be8230dccd06b'

const setQuery=(e) =>{
    if(e.keyCode =='13'){
        getResult(searchBar.value)
    }


const getResult= (cityName) => {
    console.log(cityName);
}   

}

const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)