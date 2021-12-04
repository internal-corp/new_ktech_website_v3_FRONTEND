const certificatImageBox=document.querySelector('#certificat-carousel');

const imagesLenght=3;
let index=2;

(()=>{
    setInterval(()=>{
        certificatImageBox.classList.toggle('anim-come-from-right');
        const path=`assets/certificats/certificat-${index}.jpg`;
        certificatImageBox.setAttribute('src',path);
        certificatImageBox.classList.toggle('anim-come-from-right');
        index++;
        if(index>4){
            index=1;
        }
    },5000);
    
})();