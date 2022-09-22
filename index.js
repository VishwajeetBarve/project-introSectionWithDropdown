const featureToggler = document.querySelector(".feature-toggler")
const features = document.querySelector(".features")
const companyToggler = document.querySelector(".company-toggler")
const company = document.querySelector(".company")
const toggleBtn = document.querySelector(".show-menu");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar")
const newnav = document.querySelector(".newnav")
const holder = document.querySelector(".holder")
const btnholder = document.querySelector(".btn-holder")
const closeBtn =  document.querySelector(".close-menu")


toggleBtn.addEventListener("click", function () {
    
    sidebar.classList.toggle("show-sidebar");
    
  });

  
closeBtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar");
})


features.addEventListener("click", function(){
    featureToggler.classList.toggle("feature-clicked")
        features.classList.toggle("show-dropdown")
    
})

company.addEventListener("click",function(){
    companyToggler.classList.toggle("company-clicked")
    company.classList.toggle("company-dropdownclick")
})


if(window.screen.width>= 1000){
    toggleBtn.remove()
    newnav.appendChild(holder)
    navbar.appendChild(btnholder)
}


// see a video on css variables
// set shagow overlay in mobile
