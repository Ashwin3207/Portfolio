

addEventListener("scroll", (sevent) => {
    let etext = document.getElementById('test').img;
    let value=800;
    value=window.scrollY;

    etext.style.left = value*1.5 + 'px';

});





