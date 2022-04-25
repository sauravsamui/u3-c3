// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//http://www.omdbapi.com/?apikey=[yourkey]
//http://www.omdbapi.com/?i=tt3896198&apikey=3fd1ca8e

let amount = localStorage.getItem("amount") || 0;

document.getElementById("wallet").innerText = amount
document.getElementById("search").value=""
async function search() {
    try {
        let input = document.getElementById("search").value
      // const url = `http://img.omdbapi.com/?apikey=3fd1ca8e&t=${input}`
        const url =`https://www.omdbapi.com/?apikey=3fd1ca8e&s=${input}`
        let res = await fetch(url)
        let data = await res.json()
       return data.Search
       
    }
    catch (err) {
        console.log(err)
    }

}

let movies_div = document.getElementById("movies")
function displayMovie(data) {
    movies_div.innerHTML = null
   data.map(({Poster,Title})=>{
    let div = document.createElement("div")

    let image = document.createElement("img")
    image.src = Poster;

    let title = document.createElement("h2")
    title.innerText = Title;
    let movie = {
        Poster,
        Title,
    }
    let btn = document.createElement("button")
    btn.innerText = "Book Now"
    btn.setAttribute("class", "book_now")
    btn.addEventListener("click", () => {
        bookTicket(movie)
    })
    div.append(image, title, btn)
    movies_div.append(div)
   })

      
}

function bookTicket(movie){

    localStorage.setItem("movie",JSON.stringify(movie))
    window.location.href="checkout.html"
}

async function main(){
    let data =  await search()
    
    if(data==undefined){
        return
    }console.log(data)
    displayMovie(data)
}
let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(()=>{
        func()
    },delay)
 
}