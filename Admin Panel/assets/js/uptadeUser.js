const imgInput = document.querySelector(`.addImg`)
const nameInput = document.querySelector(`.addName`)
const jobInput = document.querySelector(`.addJob`)
const form = document.querySelector("form")

//hash istifade edirik ki update olunan userin melumatlari xanalara qeyd olunsun
let hash = window.location.hash;
hash = hash.substring(1);
console.log(hash);

//fetch vasitesile updateuser page ninde xanalara qeyd olunur evvelki datalar
fetch(`http://localhost:3000/users/${hash}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        seedetails(data.img_url, data.name, data.job);
    });

//hemin inputlarin valuesine qeyd edir fetchden gelenleri
function seedetails(img, name, job) {
    imgInput.value = img;
    nameInput.value = name;
    jobInput.value = job;
}

//form submit edende search funksiyasi ile datalari put edir
form.addEventListener("submit", search)
//location href yene aparir Admin Panel page-nine
function search(e) {
    e.preventDefault()
    GetFetch()
    location.href = "./AdminPanel.html";
}
//yeni datalari put edir fetch ile json file a
async function GetFetch() {
    try {
        const res = await fetch(`http://localhost:3000/users/${hash}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({ name: nameInput.value, job: jobInput.value, img_url: imgInput.value })
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}



