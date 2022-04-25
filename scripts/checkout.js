// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let total=0;
let movie_div= document.getElementById("movie")
let amount = localStorage.getItem("amount")||0;
//console.log(amount)
document.getElementById("wallet").innerText=amount

let movie = JSON.parse(localStorage.getItem("movie"))||[];

 let image = document.createElement('img')
 image.src = movie.Poster;

 let title = document.createElement("h2")
 title.innerText=movie.Title
 
 movie_div.append(image,title)

 document.getElementById("confirm").addEventListener("click",submit)
 function submit(){
    let amount = localStorage.getItem("amount")||0;
   let tickets = document.getElementById('number_of_seats').value
    
    total = Number(tickets) * Number(100);
   console.log(total)
   amount = Number(amount) - total ;
   console.log(amount)
    if(amount<0){
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking successful!")
        localStorage.setItem("amount",amount)
        window.location.reload()
        document.getElementById('number_of_seats').value=""
        document.getElementById("user_name").value=""
    }
    
 }