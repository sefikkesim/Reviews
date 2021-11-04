const reviews = [
    {
        id: 1,
        name: "Sam Harrison",
        job: "Web Developer",
        img: "./images/person-1.png",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis molestiae mollitia ipsum, placeat voluptates? At necessitatibus voluptatem maiores itaque!",

    },
    {
        id: 2,
        name: "Julia Jhonsan",
        job: "UX Designer",
        img:"./images/person-2.png",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis molestiae mollitia ipsum, placeat voluptates? At necessitatibus voluptatem maiores itaque!",
    },
    {
        id: 3,
        name: "Marry Stone",
        job: "Full-Stack Developer",
        img: "./images/person-3.png",
        text: "I am a Full Stack Web Developer with experience of more than 4+ years with specializing in Web-Development & Designing.",

    },
    {
        id: 4,
        name: "Rafael Hopkins",
        job: "Software engineer",
        img:"./images/person-4.png",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nobis molestiae mollitia ipsum, placeat voluptates? At necessitatibus voluptatem maiores itaque!",
    }
]
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;


function showReviews(person) {
    let item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


window.addEventListener("DOMContentLoaded",()=>{
    showReviews(currentItem);
})

nextBtn.addEventListener("click",()=>{
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0
    }
    showReviews(currentItem)
})

prevBtn.addEventListener("click",()=>{
    currentItem--;
    if (currentItem < 0){
        currentItem =reviews.length -1
    }
    showReviews(currentItem)
})

randomBtn.addEventListener("click",()=>{
    currentItem = Math.floor(Math.random() * reviews.length)
    showReviews(currentItem)
})

// let currentItem = 0;

// window.addEventListener("DOMContentLoaded", ()=>{
//    ShowPerson(currentItem);
// })



// function ShowPerson(person) {
//     const item = reviews[person];
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
    
// }
// nextBtn.addEventListener("click",()=>{
//     currentItem++;
//     if(currentItem > reviews.length - 1) {
//         currentItem = 0 ;
//     }
//     ShowPerson(currentItem)
// })

// prevBtn.addEventListener("click",()=>{
//     currentItem--;
//     if (currentItem < 0){
//         currentItem = reviews.length-1;
//     }
//     ShowPerson(currentItem)
// })

// randomBtn.addEventListener("click",()=>{
//     currentItem = Math.floor(Math.random() * reviews.length)
//     ShowPerson(currentItem)
// })