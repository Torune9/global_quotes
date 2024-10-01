const btn_menu = document.getElementById('btn-menu');
const nav = document.querySelector('nav ul');

btn_menu.addEventListener('click',()=> nav.classList.toggle('slide'));

const card = document.querySelector('.card');

$.ajax(
    {
        url : 'https://api.quotable.io/quotes/random?limit=20',
        success : response => {
            let card = '';
            response.forEach(element => {
                card+=`  <div class="card">
                <b>${element.content}</b>
                <br>
                <h3 class="h3">${element.author} </h3>
                <h3>Tags : ${element.tags} </h3>
                 <p>Date : ${element.dateAdded}</p>
                </div>`;
            });
            $('.header').html(card);
        }
    }
);


const cari = document.getElementById('cari');
const btn_cari = document.getElementById('btn-cari');

// btn_cari.addEventListener('click',async ()=>{
//     fetch(`https://api.quotable.io/quotes/random?tags = ${cari.value}` )
//     .then(response => response.json())
//     .then(response => {
//         response.forEach(()=>console.log(response));
//     });
// });

// $('.btn-cari').on('click',function(){
//     $.ajax({
//         url : 'https://api.quotable.io/quotes/random?limit=20',
//         success : response => console.log(response.json())
//     });
// });


btn_cari.addEventListener('click',()=>{
    fetch(`https://api.quotable.io/quotes/random?tags=${cari.value}&limit=50`)
    .then(response => response.json())
    .then(response =>{
        const header = document.querySelector('.header');
        let cards = '';
        if (cari.value) {
            response.forEach(element => {
                cards+=`  <div class="card">
                <b>${element.content}</b>
                <br>
                <h3 class="h3">${element.author} </h3>
                <h3 class = "tag">Tags : ${element.tags} </h3>
                 <p>Date : ${element.dateAdded}</p>
                </div>`;
            });
            header.innerHTML= cards;
            console.log(response);
        }else{
       alert("Masukan Tags");
    };
    });
});



//list tag


