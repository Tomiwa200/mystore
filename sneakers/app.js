
const wrapper = document.querySelector('.slider-wrapper');
const menuItems = document.querySelectorAll('.menu-item');



const product = [
    {
        id : 1,
        title : 'AIR FORCE',
        price : 199,
        colors : [
            {
                code: 'black',
                img : './img/air.png'
            },
            {
                code: 'darkblue',
                img : './img/air2.png'
            }
        ]
    },
    {
        id : 2,
        title : 'Blazer',
        price : 180,
        colors : [
            {
                code: 'white',
                img : './img/blazer.png'
            },
            {
                code: 'green',
                img : './img/blazer2.png'
            }
        ]
    },
    {
        id : 3,
        title : 'Jordan',
        price : 190,
        colors : [
            {
                code: 'black',
                img : './img/jordan.png'
            },
            {
                code: 'darkblue',
                img : './img/jordan2.png'
            }
        ]
    },
    {
        id : 4,
        title : 'Crater',
        price : 80,
        colors : [
            {
                code: 'black',
                img : './img/crater.png'
            },
            {
                code: 'rgb(168, 221, 24)',
                img : './img/crater2.png'
            }
        ]
    },
    {
        id : 5,
        title : 'Hippie',
        price : 150,
        colors : [
            {
                code: 'gray',
                img : './img/hippie.png'
            },
            {
                code: 'black',
                img : './img/hippie2.png'
            }
        ]
    },
]
  
let choosenProduct = product[0]

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');
menuItems.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        //slider
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

       //change the choosen  product
         choosenProduct =  product[index]

         // change product text
         currentProductTitle.textContent = choosenProduct.title;
         currentProductPrice.textContent = '$' + choosenProduct.price;
         currentProductImg.src = choosenProduct.colors[0].img;
        
         //assigning colors to pickers
         currentProductColors.forEach((color, index) => {
              color.style.backgroundColor = choosenProduct.colors[index].code;

         });
         
         //changing product image
         currentProductColors.forEach((color, index) => {
            
            color.addEventListener('click', () => [
              currentProductImg.src = choosenProduct.colors[index].img
            ])
       });

    });
});

   //clicking size buttons  
currentProductSizes.forEach((size, index)  =>{
    size.addEventListener('click', ()=>{

        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        });
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
});

const productButton = document.querySelector('.productButton');
const order = document.querySelector('.order');
const closeOrder = document.querySelector('.closeOrder');

productButton.addEventListener('click', ()=>{
    order.style.display = 'flex'
});

closeOrder.addEventListener('click', ()=>{
    order.style.display = 'none'
});