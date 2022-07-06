// Creating html

let candidacyContainer = document.createElement("div");
candidacyContainer.id = "mentorgoalextension_candidacyContainer";
candidacyContainer.innerHTML = '\
    <div id="mentorgoalextension_candidacyHeaderContainer">\
        <div id="mentorgoalextension_candidacyHeaderText">\
            <p>Ajouter à mes candidatures</p>\
        </div>\
        <div id="mentorgoalextension_candidacyHeaderDivider"></div>\
    </div>\
    <div id="mentorgoalextension_candidacyContentContainer">\
        <form id="mentorgoalextension_candidacyForm">\
            <div id="mentorgoalextension_companyInputContainer">\
                <label id="mentorgoalextension_candidacyCompanyLabel">Entreprise</label>\
                <input id="mentorgoalextension_candidacyCompanyInput"></input>\
            </div>\
            <div id="mentorgoalextension_candidacyJobContainer">\
                <label id="mentorgoalextension_candidacyJobLabel">Poste</label>\
                <input id="mentorgoalextension_candidacyJobInput"></input>\
            </div>\
            <div id="mentorgoalextension_candidacyPlaceInputContainer">\
                <label id="mentorgoalextension_candidacyPlaceLabel">Lieu</label>\
                <input id="mentorgoalextension_candidacyPlaceInput"></input>\
            </div>\
            <div id="mentorgoalextension_candidacyUrlInputContainer">\
                <label id="mentorgoalextension_candidacyUrlLabel"></label>\
                <input id="mentorgoalextension_candidacyUrlInput"></input>\
            </div>\
            <div id="mentorgoalextension_candidacyTypeInputContainer">\
                <label id="mentorgoalextension_candidacyTypeLabel">Type</label>\
                <select id="mentorgoalextension_candidacyTypeInput">\
                    <option value="Alternance">Alternance</option>\
                    <option value="Stage">Stage</option>\
                    <option value="CDI">CDI</option>\
                    <option value="CDD">CDD</option>\
                    <option value="Graduate Program">Graduate Program</option>\
                    <option value="VIE / VIA">VIE / VIA</option>\
                </select>\
            </div>\
            <div id="mentorgoalextension_candidacyStatusInputContainer">\
                <label id="mentorgoalextension_candidacyStatusLabel">Statut</label>\
                <select id="mentorgoalextension_candidacyStatusInput">\
                    <option value="Ready">Prêt à postuler</option>\
                    <option value="Postulated">Candidature envoyée</option>\
                </select>\
            </div>\
            <div id="mentorgoalextension_candidacyDescriptionInputContainer">\
                <label id="mentorgoalextension_candidacyDescriptionLabel">Description</label>\
                <textarea id="mentorgoalextension_candidacyDescriptionInput"></textarea>\
            </div>\
        </form>\
    </div>\
    <div id="mentorgoalextension_candidacyFormButtonContainer">\
        <div id="mentorgoalextension_candidacyFormButtonDivider"></div>\
        <button id="mentorgoalextension_candidacyFormButton">Ajouter</button>\
    </div>\
';

//get candidacies 
var candidacies;
chrome.storage.sync.get(["candidacies"], function(result) {
    if (result["candidacies"]==null){
        candidacies=[];
    } else { 
        candidacies=result["candidacies"];
    }
});

//Adding all the vectors
function candidacyAddVectors() {
    document.querySelector('#mentorgoalextension_candidacyHeaderDivider').style.backgroundImage = "url('"+headerseparatorURL+"')";
    document.querySelector('#mentorgoalextension_candidacyHeaderDivider').style.backgroundRepeat = "no-repeat";
    document.querySelector('#mentorgoalextension_candidacyFormButtonDivider').style.backgroundImage = "url('"+bottomseparatorURL+"')";
    document.querySelector('#mentorgoalextension_candidacyFormButtonDivider').style.backgroundRepeat = "no-repeat";    
}

function showCandidacyMenu(job, company, place, description, url) {
    extensionactive = true;
    candidacyContainer.appendChild(dragContainer);
    changeSizeMainDiv(360, 530);
    mainDiv.appendChild(candidacyContainer);
    document.querySelector("#mentorgoalextension_candidacyFormButton").addEventListener("click", saveCandidacy);
    document.querySelector("#mentorgoalextension_candidacyUrlLabel").innerHTML = "URL de l'offre";
    candidacyAddVectors();
    BubbleOpened();
    removeEye();
    mainDiv.removeEventListener("mouseleave", removeMenu);
    button.addEventListener("click", closeCandidacyMenu);
    document.querySelector("#mentorgoalextension_container").remove();
    setCandidacyValues(job, company, place, description, url);
}

function setCandidacyValues(job, company, place, description, url) {
    document.querySelector('#mentorgoalextension_candidacyCompanyInput').value = company;
    document.querySelector('#mentorgoalextension_candidacyJobInput').value = job;
    document.querySelector('#mentorgoalextension_candidacyPlaceInput').value = place;
    document.querySelector('#mentorgoalextension_candidacyUrlInput').value = url;
    document.querySelector('#mentorgoalextension_candidacyDescriptionInput').value = description;
}

function saveCandidacy() {
    company = document.querySelector('#mentorgoalextension_candidacyCompanyInput').value;
    job = document.querySelector('#mentorgoalextension_candidacyJobInput').value;
    place = document.querySelector('#mentorgoalextension_candidacyPlaceInput').value;
    url = document.querySelector('#mentorgoalextension_candidacyUrlInput').value;
    description = document.querySelector('#mentorgoalextension_candidacyDescriptionInput').value;
    showSuccessMenu("L'offre a été ajoutée à tes candidatures, dans la colonne :", "Prêt à postuler");
    candidacy = {"company":company,"job":job,"place":place,"url":url,"description":description};
    candidacies.push(candidacy);
    chrome.storage.sync.set({candidacies:candidacies}, function() {
        console.log("la candidature a été ajouté");
        chrome.storage.sync.get(["candidacies"], function(result) {
            console.log(result["candidacies"]);
        });
    });
}

function closeCandidacyMenu() {
    if (!document.querySelector("#mentorgoalextension_candidacyContainer")) {return;}
    document.querySelector("#mentorgoalextension_candidacyContainer").remove();
    button.removeEventListener("click", closeCandidacyMenu);
    mainDiv.addEventListener("mouseleave", removeMenu);
    extensionactive = false;
    BubbleClosed();
    showEye();
}

