// --- Offer Bar Logic --- 
var offerBar = document.querySelector(".offer-bar"); 
 
document.getElementById("offer-close").addEventListener("click", function()
 {     offerBar.style.display = "none"; 
}); 
 
// --- Side Navbar Logic --- 
var sideNavActivate = document.getElementById("side-navbar-activate"); 
var sideNavbar = document.querySelector(".side-navbar"); 
var sideNavClose = document.getElementById("side-navbar-close"); 
 
sideNavActivate.addEventListener("click", function() {     
    sideNavbar.style.marginLeft = "0"; 
}); 
 
sideNavClose.addEventListener("click", function() {     
    sideNavbar.style.marginLeft = "-60%"; 
});
 
// --- Filtering and Search Logic --- 
 
var productList = document.querySelectorAll(".product"); 
 
// Grouped selection of checkboxes based on categories 
var occasionCheckboxes = document.querySelectorAll(`input[name="tags"][value="summer"],input[name="tags"][value="party"],
     input[name="tags"][value="beach"], input[name="tags"][value="casuals"], input[name="tags"][value="formals"]`);
var colorCheckboxes = document.querySelectorAll(`input[name="tags"][value="red"], input[name="tags"][value="blue"],
     input[name="tags"][value="white"], input[name="tags"][value="green"], input[name="tags"][value="brown"]`); 
var arrivalCheckboxes = document.querySelectorAll(`input[name="tags"][value="new"], input[name="tags"][value="old"]`); 
 
// 1. Checkbox Filtering Function  function applyFilters() { 
 
    productList.forEach(product => {         
        var productTagsString = product.getAttribute("data-tags"); 
         
        var productTagsArray = productTagsString.split(',').map(tag => tag.trim());  
 
        let showProduct = true; 
 
        
        if (activeOccasions.length > 0) { 
            
            const matchOccasion = activeOccasions.some(filter => productTagsArray.includes(filter)); 
            if (!matchOccasion) {                 
                showProduct = false;           } 
        } 
 
        
        if (showProduct && activeColors.length > 0) { 
             
            const matchColor = activeColors.some(filter => productTagsArray.includes(filter)); 
            if (!matchColor) {                 
                showProduct = false; 
            } 
        } 
 
        
        if (showProduct && activeArrivals.length > 0) { 
             
            const matchArrival = activeArrivals.some(filter => productTagsArray.includes(filter));             
            if (!matchArrival) {                 
                showProduct = false; 
            } 
        } 
         
        
        if (showProduct) {             
            product.style.display = 'block'; 
        } else {             
            product.style.display = 'none'; 
        } 
    }); 
     
    
    applySearch(); 

 
function applySearch() { 
   var searchTerm = document.getElementById("search-input").value.toLowerCase(); 
     
    productList.forEach(product => {         
        var productTitle = product.querySelector("h1").textContent.toLowerCase(); 
         
         
        if (product.style.display === 'block') {             
            if (!productTitle.includes(searchTerm)) {                 
                product.style.display = 'none'; 
            }  
        } 
        
         
    }); 
} 
 
 
 
const allCheckboxes = [...occasionCheckboxes, ...colorCheckboxes, ...arrivalCheckboxes]; 
 
allCheckboxes.forEach(tag => {     
    tag.addEventListener("change", applyFilters); 
}); 
 
document.getElementById("search-input").addEventListener("keyup", applyFilters); // Use applyFilters to check search AND filters 
 
document.querySelector(".navbar-search").addEventListener("submit", function(e) {     
    e.preventDefault(); 
}); 
 
applyFilters(); 
 
