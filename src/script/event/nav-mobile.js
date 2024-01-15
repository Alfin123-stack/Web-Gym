const hamburgerMenu = ()=>{
    // hamburger menu

    const menu = document.querySelector(".hamburger-menu");
    const navigasi = document.querySelector("nav");

    menu.addEventListener("click", () => {
        navigasi.classList.toggle("d-none");
    })

    // exit
    const exit = document.querySelector(".icon-exit");

    exit.addEventListener("click", () => {
        navigasi.classList.toggle("d-none");
    })
}

export default hamburgerMenu;