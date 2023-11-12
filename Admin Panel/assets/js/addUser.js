const imgInput = document.querySelector(`.addImg[type="text"]`)
const nameInput = document.querySelector(`.addName[type="text"]`)
const jobInput = document.querySelector(`.addJob[type="text"]`)
const form = document.querySelector("form")

//form submit etmek ucun
form.addEventListener("submit", search)

//formu submit edende post etdiyimiz funksiyani cagiririg ve submit olanda location href ile bizi admin panel page aparir
function search(e) {
    e.preventDefault()
    GetFetch()
    location.href = "./AdminPanel.html";
}

//funksiya vasitesileri daxil olunan melumatlari post edir
async function GetFetch() {
    try {
        const res = await fetch("http://localhost:3000/users",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({name:nameInput.value, job: jobInput.value,img_url:imgInput.value})
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}



