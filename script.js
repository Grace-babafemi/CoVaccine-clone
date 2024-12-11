//get the button//
const scrollTop = document.getElementById("scrollToTop")
//show the button when the scroll is up to the particular height//
window.addEventListener("scroll", () => {
    // console.log("here", window.scrollY)
    if (window.scrollY > 200) {
        scrollTop.style.display = "block"
    } else {
        scrollTop.style.display = "none"
       
    }
})
//scroll to the top, unclick of the button//
scrollTop.addEventListener("click", () =>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})


//Form submittion//
//Get the form
const contactForm = document.getElementById("contact-Form")
//Add the event listener for the form submittion//
contactForm.addEventListener("submit", (e) => {
    //prevent default or random submition of the form
e.preventDefault()

//show a success alert

Swal.fire({
  title: "Submittion successful",
  text: "Thanak you for responding",
  icon: "success"
})
})