


const box= document.getElementById('box');

const gander= box.querySelectorAll('input[name="gander"]');

gander.forEach( item=>{
   item.onchange=(e)=>{
    if(e.target.value=='Male'){
        console.log('I am boy');
    }else if(e.target.value=='Female'){
        console.log('you are Apu');
    }else{
        console.log('what do you gain ');
    }
   }
})


