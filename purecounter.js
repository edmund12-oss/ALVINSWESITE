/** 
Pure Counter
**/

document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll(".count");
const speed = 50;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;


    const inc = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 50);
    }
    else {
      counter.innerText = target;
    }

  };

  updateCount();

});

});

