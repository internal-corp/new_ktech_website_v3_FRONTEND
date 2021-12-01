const africaCircle = document.querySelector('#africa-circle');
const southAmericaCircle = document.querySelector('#south-america-circle');
const OceaniaCircle = document.querySelector('#oceania-circle');
const asiaCircle = document.querySelector('#asia-circle');
const middleEastCircle = document.querySelector('#middle-east-circle');
const cisCircle = document.querySelector('#cis-circle');


//africa
gsap.from("#africa-circle", { opacity: 1, scale: .7, transformOrigin: "center" });
gsap.to("#africa-circle", { opacity: 1, duration: 1.2, scale: 1.28, transformOrigin: "center", repeat: -1 });

//South america
gsap.from("#south-america-circle", { opacity: 1, scale: .7, transformOrigin: "center" });
gsap.to("#south-america-circle", { opacity: 1, delay: 2, duration: 1.2, scale: 1.28, transformOrigin: "center", repeat: -1 });

//Oceania
gsap.from("#oceania-circle", { opacity: 1, scale: .7, transformOrigin: "center" });
gsap.to("#oceania-circle", { opacity: 1, delay: 2.2, duration: 1.2, scale: 1.28, transformOrigin: "center", repeat: -1 });

//Asia
gsap.from("#asia-circle", { opacity: 1, scale: .7, transformOrigin: "center" });
gsap.to("#asia-circle", { opacity: 1, delay: 2.4, duration: 1.2, scale: 1.28, transformOrigin: "center", repeat: -1 });

//Middle east
gsap.from("#middle-east-circle", { opacity: 1, scale: .7, transformOrigin: "center" });
gsap.to("#middle-east-circle", { opacity: 1, delay: 1.2, duration: 1.2, scale: 1.28, transformOrigin: "center", repeat: -1 });

//CIS 
gsap.from("#cis-circle", { opacity: 1, scale: .7, transformOrigin: "center" });
gsap.to("#cis-circle", { opacity: 1, delay: 2.5, duration: 1.2, scale: 1.28, transformOrigin: "center", repeat: -1 });