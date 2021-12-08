const certificatImageBox=document.querySelector('#certificat-carousel');

const imagesLenght=5;
let index=2;

(()=>{
    setInterval(()=>{
        certificatImageBox.classList.toggle('anim-come-from-right');
        const path=`assets/certificats/certificat-${index}.jpg`;
        certificatImageBox.setAttribute('src',path);
        index++;
        if(index>imagesLenght){
            index=1;
        }
    },5000);
    
})();