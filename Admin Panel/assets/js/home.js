const home = document.getElementById("home")
const cards = document.querySelector(".cards")

//adi fetch ile
// fetch("http://localhost:3000/users")
//     .then((res) => res.json())
//     .then((data) => {
//         data.forEach((user) => {
//             cardItem(user.name, user.job, user.img_url);
//         });
//     })
//     .catch(err=>console.log(err))

//funksiya ile fetch edirik

let url="http://localhost:3000/users"

async function GetAllFetch(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

//fetchdeki datalari gotururuk
async function Item() {
    const data =await GetAllFetch(url);
    data.forEach((user) => {
        cardItem(user.name, user.job, user.img_url);
    })
}

Item()

//hemin datalar ile card da elemenleri elave edirik
function cardItem(name, job, img_url) {
    cards.innerHTML += `<div class="card">
    <div class="card-img"><img src="${img_url}" alt=""></div>
    <p>${name}</p>
    <p>${job}</p>
    </div>`
}