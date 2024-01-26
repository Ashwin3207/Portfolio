
addEventListener("scroll", (event) => {
    let etext = document.getElementById('test');
    let value=800;
    value=window.scrollY;

    etext.style.left = value*1.5 + 'px';

});
