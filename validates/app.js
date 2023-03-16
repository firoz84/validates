


const box= document.getElementById('box');
const h2= document.querySelector('h2');

const food= box.querySelectorAll('input[name="gander"]');

food.forEach(item=>{
   item.onchange=()=>{

    const selectfood= box.querySelectorAll('input[name="gander"]:checked');

    let foods=[];
    let total= 0;
    selectfood.forEach(khaber=>{
        foods.push(khaber.value);
        total+=Number(khaber.getAttribute('price'));
    });
    h2.innerHTML=`you select ${ foods.join(' ,')}, Total == ${total} Taka please wait for me`;
   }
});




