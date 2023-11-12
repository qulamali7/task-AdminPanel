const AdminPanel = document.getElementById("AdminPanel")
const table = document.querySelector("table")

//adi fetch ile
// fetch("http://localhost:3000/users")
//     .then((res) => res.json())
//     .then((data) => {
//         data.forEach((user) => {
//             cardItem(user.id,user.name, user.job, user.img_url);
//         });
//     })
//     .catch(err=>console.log(err))

//funksiya ile fetch cagiririg
async function GetAdminFetch() {
    try {
        const res = await fetch("http://localhost:3000/users")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

//burda ise fetchdeki datalari ayri gotururuk
async function Item() {
    const data = await GetAdminFetch();
    data.forEach((user) => {
        cardItem(user.id, user.name, user.job, user.img_url);
    })
}

Item()

//burda innerhtml ile elmentleri elave edirik
function cardItem(id, name, job, img_url) {
    table.innerHTML += `<tr>
    <td>${id}</td>
    <td><div class="table-img"><img src="${img_url}" alt=""></div></td>
    <td>${name}</td>
    <td>${job}</td>
    <td><a href="./UptadeUser.html#${id}"><button>UPDATE</button></a></td> 
    <td><a href=""><button class="btn">DELETE</button></a></td>
    </tr>` 

    //uptade buttonu-na link qoymusam yeni seyfeye aparir

    // burda ise deletebuttons hamisin goturur ve icinde gezir hansisa birine click edende closest ile hemin setir yeni butun tr geri qaytarir sonra ise hemin setrde fisrt child goturuk yeni id ni  ve onu veririk deleteItem funksiyasina

    const deleteButtons = document.querySelectorAll(".btn")
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            if (event.target.classList.contains("btn")) {
                const row = event.target.closest("tr");
                const userId = row.querySelector("td:first-child").textContent; 
                deleteItem(userId);
            }
        })
    })
    function deleteItem(userId) {
        fetch(`http://localhost:3000/users/${userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => {
                console.log(`User with ID ${userId} deleted successfully.`);
            })
            .catch((error) => {
                console.error(`Error deleting user with ID ${userId}:`, error);
            });
    }
}

//table da class-i btn olan elemente click edende hemin setir td-nin first-child yeni id gotur delete item funksiyasina oturur
// table.addEventListener("click", (event) => {
//     if (event.target.classList.contains("btn")) {
//         const row = event.target.closest("tr");
//         const userId = row.querySelector("td:first-child").textContent; 
//         deleteItem(userId);
//     }
// });
// function deleteItem(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//         .then((res) => res.json())
//         .then(() => {
//             console.log(`User with ID ${userId} deleted successfully.`);
//         })
//         .catch((error) => {
//             console.error(`Error deleting user with ID ${userId}:`, error);
//         });
// }






