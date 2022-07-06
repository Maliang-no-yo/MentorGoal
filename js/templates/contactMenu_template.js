// Creating html

let contactContainer = document.createElement("div");
contactContainer.id = "mentorgoalextension_contactContainer";
contactContainer.innerHTML = '\
    <div id="mentorgoalextension_contactHeaderContainer">\
        <div id="mentorgoalextension_contactHeaderText">\
            <p id="mentorgoalextension_contactHeaderText">Ajouter le contact</p>\
        </div>\
        <div id="mentorgoalextension_contactHeaderDivider"></div>\
    </div>\
    <div id="mentorgoalextension_contactContentContainer">\
        <form id="mentorgoalextension_contactForm">\
            <div id="mentorgoalextension_firstnameInputContainer">\
                <label id="mentorgoalextension_contactFirstnameLabel">Prénom</label>\
                <input id="mentorgoalextension_contactFirstnameInput"></input>\
            </div>\
            <div id="mentorgoalextension_contactNameContainer">\
                <label id="mentorgoalextension_contactNameLabel">Nom</label>\
                <input id="mentorgoalextension_contactNameInput"></input>\
            </div>\
            <div id="mentorgoalextension_contactJobContainer">\
                <label id="mentorgoalextension_contactJobLabel">Poste Occupé</label>\
                <input id="mentorgoalextension_contactJobInput"></input>\
            </div>\
            <div id="mentorgoalextension_contactPlaceInputContainer">\
                <label id="mentorgoalextension_contactPlaceLabel">Entreprise</label>\
                <input id="mentorgoalextension_contactPlaceInput"></input>\
            </div>\
            <div id="mentorgoalextension_contactUrlInputContainer">\
                <label id="mentorgoalextension_contactUrlLabel">URL du profil LinkedIn</label>\
                <input id="mentorgoalextension_contactUrlInput"></input>\
            </div>\
            <div id="mentorgoalextension_contactMailInputContainer">\
                <label id="mentorgoalextension_contactMailLabel">Adresse mail</label>\
                <input id="mentorgoalextension_contactMailInput"></input>\
            </div>\
            <div id="mentorgoalextension_contactPhoneInputContainer">\
                <label id="mentorgoalextension_contactPhoneLabel">Téléphone</label>\
                <input id="mentorgoalextension_contactPhoneInput"></input>\
            </div>\
        </form>\
    </div>\
    <div id="mentorgoalextension_contactFormButtonContainer">\
        <div id="mentorgoalextension_contactFormButtonDivider"></div>\
        <button id="mentorgoalextension_contactFormButton">Ajouter</button>\
    </div>\
';

//get contacts
var contacts;
chrome.storage.sync.get(["contacts"], function(result) {
    if (result["contacts"]==null){
        contacts=[];
    } else { 
        contacts=result["contacts"];
    }
});

//Adding all the vectors
function contactAddVectors() {
    document.querySelector('#mentorgoalextension_contactHeaderDivider').style.backgroundImage = "url('"+headerseparatorURL+"')";
    document.querySelector('#mentorgoalextension_contactHeaderDivider').style.backgroundRepeat = "no-repeat";
    document.querySelector('#mentorgoalextension_contactFormButtonDivider').style.backgroundImage = "url('"+bottomseparatorURL+"')";
    document.querySelector('#mentorgoalextension_contactFormButtonDivider').style.backgroundRepeat = "no-repeat";    
}

function showContactMenu(contact) {
    extensionactive = true;
    contactContainer.appendChild(dragContainer);
    changeSizeMainDiv(360, 530);
    mainDiv.appendChild(contactContainer);
    document.querySelector("#mentorgoalextension_contactFormButton").addEventListener("click", saveContact);
    document.querySelector("#mentorgoalextension_contactFormButton").params = contact;
    contactAddVectors();
    BubbleOpened();
    removeEye();
    mainDiv.removeEventListener("mouseleave", removeMenu);
    button.addEventListener("click", closeContactMenu);
    document.querySelector("#mentorgoalextension_container").remove();
    setContactValues(contact);
}

function setContactValues(contact) {
    document.querySelector('#mentorgoalextension_contactFirstnameInput').value = contact.firstname;
    document.querySelector('#mentorgoalextension_contactNameInput').value = contact.lastname;
    document.querySelector('#mentorgoalextension_contactJobInput').value = contact.job;
    document.querySelector('#mentorgoalextension_contactPlaceInput').value = contact.place;
    document.querySelector('#mentorgoalextension_contactUrlInput').value = contact.link_linkedin;
    document.querySelector('#mentorgoalextension_contactMailInput').value = contact.mail;
    document.querySelector('#mentorgoalextension_contactPhoneInput').value = contact.phone;
}

function saveContact() {
    firstname = document.querySelector('#mentorgoalextension_contactFirstnameInput').value;
    lastname = document.querySelector('#mentorgoalextension_contactNameInput').value
    job = document.querySelector('#mentorgoalextension_contactJobInput').value;
    place = document.querySelector('#mentorgoalextension_contactPlaceInput').value;
    link_linkedin = document.querySelector('#mentorgoalextension_contactUrlInput').value;
    mail = document.querySelector('#mentorgoalextension_contactMailInput').value;
    phone = document.querySelector('#mentorgoalextension_contactPhoneInput').value;
    var contact={"firstname":firstname,"lastname":lastname,"job":job,"place":place,"link_linkedin":link_linkedin,"mail":mail,"phone":phone};
    contacts.push(contact);
    chrome.storage.sync.set({contacts:contacts}, function() {
        console.log("le contact a été ajouté");
        chrome.storage.sync.get(["contacts"], function(result) {
            console.log(result["contacts"]);
        });
    });
    showSuccessMenu("Le contact a été ajouté dans :", "Mes contacts");
}

function closeContactMenu() {
    if(!document.querySelector("#mentorgoalextension_contactContainer")) {return;}
    document.querySelector("#mentorgoalextension_contactContainer").remove();
    button.removeEventListener("click", closeContactMenu);
    mainDiv.addEventListener("mouseleave", removeMenu);
    extensionactive = false;
    BubbleClosed();
    showEye();
}