// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click",addWallet)
let amount = localStorage.getItem("amount") || 0
document.getElementById("wallet").innerText= amount
function addWallet(){
    let input = document.getElementById("amount").value;
     amount = Number(amount)+ Number(input);
     document.getElementById("wallet").innerText= amount
     localStorage.setItem("amount",amount)
      document.getElementById("amount").value = ""

}

document.getElementById("book_movies").addEventListener("click",bookMovies)

function bookMovies(){
    window.location.href="movies.html"
}