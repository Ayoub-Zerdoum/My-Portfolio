function toggleHexContainer() {
    const hexContainer = document.querySelector('.contact-hex-container');
    const niceDay = document.querySelector('.nice-day');
    hexContainer.classList.toggle('open');
    niceDay.classList.toggle('open');
}

function afficherContact(contact) {
    const gmailInfo = document.getElementById('gmail');
    const telephoneInfo = document.getElementById('telephone');
    console.log("in afficher contact fonction");
    if(contact == "gmail"){
        gmailInfo.classList.add('open');
        telephoneInfo.classList.remove('open');
        console.log("showing gmail");
    }

    if(contact == "telephone"){
        gmailInfo.classList.remove('open');
        telephoneInfo.classList.add('open');
        console.log("showing gmail");
    }
}
/*
function closeHexContainer() {
    const hexContainer = document.querySelector('.contact-hex-container');
    hexContainer.classList.remove('open');
}
*/