const nav = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if (nav) {
        window.scrollY > 30 ? nav.classList.add('blur') : nav.classList.remove('blur');
    }
});

window.addEventListener('scroll', () => {
    if (nav) {
        window.scrollY > 30 ? nav.classList.add('shrunk') : nav.classList.remove('shrunk');
    }
});



function openFaqCard(element) {
    // This finds the big box (faq-card) that contains the SVG you clicked
    const card = element.closest('.faq-card');
    
    // Now we toggle 'show' on the WHOLE card
    card.classList.toggle("show");
    
    console.log("You opened a card");
}
/*window.addEventListener('scroll', () => {
    // Moves the grid background slightly based on scroll position
    const scrollPos = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollPos * 0.1}px`;
});*/

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
				entry.target.classList.add("active")
        }else{
				entry.target.classList.remove("active")
		  }
    })  
},{
	threshold: 0.2
})
// This line finds EVERYTHING with the .reveal class
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

