const products = [
    {
        id:1,
        catagory:'Honda',
        img: 'image/b1.png',
        name:'TVS',
        price:'$12000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:1,
        catagory:'Honda',
        img: 'image/b1.png',
        name:'TVS',
        price:'$12000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:1,
        catagory:'Honda',
        img: 'image/b1.png',
        name:'TVS',
        price:'$12000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:2,
        catagory:'Honda',
        img: 'image/b2.png',
        name:'SPLANDER',
        price:'$11000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:3,
        catagory:'Metro',
        img: 'image/b3.png',
        name:'CDI',
        price:'$17000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:4,
        catagory:'Metro',
        img: 'image/b4.png',
        name:'YUMAHA',
        price:'$15000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:5,
        catagory:'walton',
        img: 'image/b5.png',
        name:'STRIKER',
        price:'$9000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:5,
        catagory:'walton',
        img: 'image/b1.png',
        name:'STRIKER',
        price:'$9000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id:6,
        catagory:'walton',
        img: "image/b6.png",
        name:'HULK',
        price:'$19000',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    }
];

const prodWraper = document.querySelector('.product-wraper');
window.addEventListener('DOMContentLoaded', function(){
    displayMenu(products);
})
function displayMenu(products){
    let prod_items = products.map(function(item){
        return`
        <div class="prod-items">
        <img src="${item.img}" alt="" class="">
        <div class="prod-info">
            <div class="info-top">
                <h4 class="title">${item.name}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <p class="decs">${item.desc}</p>
        </div>
    </div>`;
    
    });
    prod_items = prod_items.join('')
    prodWraper.innerHTML = prod_items;
}
const filterBtn = document.querySelectorAll('.filter-btn');
filterBtn.forEach(function(btn){
btn.addEventListener('click', function(event){
    const catagory = event.target.dataset.id;
        const menuCatagory = products.filter(function(menuItem){
            if(menuItem.catagory === catagory){
                return menuItem;
            }
        });
        if(catagory ==='all'){
            displayMenu(products)
        }
        else{
            displayMenu(menuCatagory)
        }
    });
});

