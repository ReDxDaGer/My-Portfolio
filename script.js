Shery.mouseFollower();
Shery.makeMagnet(".magnet")
gsap.from("#navbar",{
    y : -100,
    duration : 1,
})
gsap.from("#navbar #navleft",{
    y : -100,
    duration : 1.5,
    stagger : 1
})
gsap.from("#navbar #navright",{
    y : -100,
    duration : 1.5,
    stagger : 1
})
const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select")
    const caret = dropdown.querySelector(".caret")
    const menu = dropdown.querySelector(".menu")
    const options = dropdown.querySelectorAll(".menu li")
    const selected = dropdown.querySelectorAll(".selected")

    select.addEventListener('click',() => {
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate")
        menu.classList.toggle("menu-open")
    });
    options.forEach(option => {
        option.addEventListener('click',() => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove("caret-rotate");
            menu.classList.remove("menu-open");
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});
