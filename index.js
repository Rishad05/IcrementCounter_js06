const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    console.log(counter)
    counter.innerHTML = 0;

    const updateCounter =()=>{
        const targetCount = +counter.getAttribute('data-target');
        const staringCount = parseFloat(counter.innerHTML)
        const incr = targetCount/100;
        if(staringCount < targetCount){
            counter.innerHTML = `${Math.round(staringCount + incr)}`;
            setTimeout(updateCounter,10)
        }else{
            counter.innerHTML =targetCount;
        }
    }
    updateCounter();
})