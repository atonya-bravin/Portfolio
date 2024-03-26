const handleMenuLinks = (e) =>{
    const clickedElement = e.target;
    const activeLink = document.getElementsByClassName("active")[0];
    activeLink.classList.remove("active");
    clickedElement.classList.add("active");
}

export default handleMenuLinks;