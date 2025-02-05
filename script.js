window.addEventListener("DOMContentLoaded" , ()=> {
    const sections= 
    document.querySelectorAll("section");
    section.style.opacity = 0;
    section.style.transition = "opacity is ease-in-out";

} );
const fadeInSections = () => {
    sections, forEach((section,
        index)=>{
            const rect = 
            section.getBoundingClientRect();
            if (rect.top <
                window.innerHeight - 100) {
                    setTimeout(()=> {
                        section.style.opacity = 1;
                    }, index * 300);
                }

        }
    );        
    
};
window.addEventListener("scroll, fadeInSection");
fadeInSections ();

