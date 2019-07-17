//TODO: add event listeners for i18n dropdown changes

//global dropdown element reference
let drop;

//static strings to hold all the text (to be used within the HTML template literal)
let githubLogoAlt = "GitHub Logo";
let lingoLogoAlt = "Lingoport Logo";
let versionLabel = "Version: ";
let versionOptions = ["Non-i18n Compliant", "I18n Compliant"];
let githubLabel = "View Source";
let dashLabel = "View Lingoport Dashboard";
let contactLabel = "Contact Us";
let learnLabel = "Learn More";

let Hamburger = {

    render : async () => {

        //view is solely for HTML markup, contains no static text
        let view = `
            <a target="_blank" rel="noreferrer" href="https://lingoport.com/" class="lingoLogo"><img src="../../img/lingoport_logo.png" class="lingoLogo" alt="${lingoLogoAlt}"></a>
            <div class="start">
                <label for="version"><h3>${versionLabel}</h3></label>
                <select id="version" class="hamDrop">
                    <option value="bad">${versionOptions[0]}</option>
                    <option value="good">${versionOptions[1]}</option>
                </select>
            </div>
            <div class="githubLink outsideLink block">
            <a target="_blank" rel="noreferrer" href="https://github.com/Lingoport/demo-app-spa">
                    <img src="../../img/github_logo.png" class="logoThumb" alt="${githubLogoAlt}">
                    ${githubLabel}</a>
                
            </div>
            <div class="dashLink outsideLink block">
            <a target="_blank" href="" class="inline" rel="noreferrer">
                    <img src="../../img/lingoport_thumb.png" class="logoThumb" alt="${lingoLogoAlt}">
                    ${dashLabel}</a>
                
            </div>
            <div class="spread">
            <a target="_blank" href="https://lingoport.com/get-a-demo/" rel="noreferrer" class="outsideLink">${contactLabel}</a>
            <a target="_blank" href="https://lingoport.com/i18n-company/" rel="noreferrer" class="outsideLink">${learnLabel}</a>
            </div>
        `;
        
        return view;
    },
    after_render: async () => {
        var overlayBG = document.querySelector('.bg');
        overlayBG.addEventListener('click', hideHam, false);
    }

}

//function to hide hamburger menu (only when it's currently visible)
var hideHam = e => {
    var hamSlider = document.querySelector(".hamSlider")
    var bg = document.querySelector('.bg');

    hamSlider.classList.remove('showHam');
    bg.classList.remove('overlay');
}


export {Hamburger};