// Creating all the needed elements for the extension.
    //Content
let settingsContentContainer = document.createElement("div");
let settingsContent = document.createElement("div");
let settingsContentContent = document.createElement("div");
        //Button
let formButtonContainer = document.createElement("div");
let formButton = document.createElement("button");
let formButtonDivider = document.createElement("div");
        //Form
let settingsForm = document.createElement("div");
let emailInputContainer = document.createElement("div");
let emailLabel = document.createElement("label");
let emailInput = document.createElement("input");
let emailHelper = document.createElement("p");
let statusSelectContainer = document.createElement("div");
let statusLabel = document.createElement("label");
let statusSelect = document.createElement("select");
let statusOption1 = document.createElement("option");
let statusOption2 = document.createElement("option");
let statusOption3 = document.createElement("option");
let statusOption4 = document.createElement("option");
let statusOption5 = document.createElement("option");
let statusOption6 = document.createElement("option");
let typeSelectContainer = document.createElement("div");
let typeLabel = document.createElement("label");
let typeSelect = document.createElement("select");
let typeOption1 = document.createElement("option");
let typeOption2 = document.createElement("option");
    //Header
let settingsHeaderContainer = document.createElement("div");
let settingsHeaderContent = document.createElement("div");
let settingsHeaderDivider = document.createElement("div");
let settingsHeaderText = document.createElement("p");
let settingsHeaderVector = document.createElement("div");

//Giving IDs and classnames to all divs
settingsContentContainer.id = "mentorgoalextension_settingsContentContainer";
settingsContent.id = "mentorgoalextension_settingsContent";
settingsContentContent.id = "mentorgoalextension_settingsContentContent";
formButtonContainer.id = "mentorgoalextension_formButtonContainer";
formButton.id = "mentorgoalextension_formButton";
formButtonDivider.id = "mentorgoalextension_formButtonDivider";
settingsForm.id = "mentorgoalextension_settingsForm";
emailInputContainer.id = "mentorgoalextension_emailInputContainer";
emailLabel.id = "mentorgoalextension_emailLabel";
emailInput.id = "mentorgoalextension_emailInput";
emailHelper.id = "mentorgoalextension_emailHelper";
statusSelectContainer.id = "mentorgoalextension_statusSelectContainer";
statusLabel.id = "mentorgoalextension_statusLabel";
statusSelect.id = "mentorgoalextension_statusSelect";
statusOption1.id = "mentorgoalextension_statusOption1";
statusOption2.id = "mentorgoalextension_statusOption2";
statusOption3.id = "mentorgoalextension_statusOption3";
statusOption4.id = "mentorgoalextension_statusOption4";
statusOption5.id = "mentorgoalextension_statusOption5";
statusOption6.id = "mentorgoalextension_statusOption6";
typeSelectContainer.id = "mentorgoalextension_typeSelectContainer";
typeLabel.id = "mentorgoalextension_typeLabel";
typeSelect.id = "mentorgoalextension_typeSelect";
typeOption1.id = "mentorgoalextension_typeOption1";
typeOption2.id = "mentorgoalextension_typeOption2";
settingsHeaderContainer.id = "mentorgoalextension_settingsHeaderContainer";
settingsHeaderContent.id = "mentorgoalextension_settingsHeaderContent";
settingsHeaderDivider.id = "mentorgoalextension_settingsHeaderDivider";
settingsHeaderText.id = "mentorgoalextension_settingsHeaderText";
settingsHeaderVector.id = "mentorgoalextension_settingsHeaderVector";

//Adding text to some divs
settingsHeaderText.innerHTML="Param??tres"
formButton.innerHTML="<a href='https://mg-student.netlify.app/applications' target='_blank'>Se d??connecter</a>";
statusLabel.innerHTML="Statut par d??faut pour l'ajout de candidature"
typeLabel.innerHTML="Type de contrat par d??faut";
emailLabel.innerHTML="Email associ??";
emailHelper.innerHTML="";
statusOption1.innerHTML="Alternance";
statusOption2.innerHTML="Stage";
statusOption3.innerHTML="CDI";
statusOption4.innerHTML="CDD";
statusOption5.innerHTML="Graduate Program";
statusOption6.innerHTML="VIE / VIA";
typeOption1.innerHTML="Pr??t ?? postuler";
typeOption2.innerHTML="Candidature envoy??e";

//Loading vectors
var bottomseparatorURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorbottomseparator.svg");
var headerseparatorURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorheaderseparator.svg");

//Adding vectors to divs
settingsHeaderDivider.style.backgroundImage = "url('"+headerseparatorURL+"')";
settingsHeaderDivider.style.backgroundRepeat = "no-repeat";
formButtonDivider.style.backgroundImage = "url('"+bottomseparatorURL+"')";
formButtonDivider.style.backgroundRepeat = "no-repeat";

//Adding event listeners
listItem3.addEventListener("click", showSettings)

// get statut
var statut;
chrome.storage.sync.get(["statut"], function(result) {
    if (result["statut"]==null){
        statut="Alternance";
    } else {
        statut=result["statut"];
    }
});


// get type_contract
var type_contract;
chrome.storage.sync.get(["type_contract"], function(result) {
    if (result["type_contract"]==null){
        type_contract="Pr??t ?? postuler";
    } else {
        type_contract=result["type_contract"];
    }
});


//Managing inputs
emailInput.setAttribute("placeholder", "juliendupont@gmail.com");
statusSelect.append(statusOption1, statusOption2, statusOption3, statusOption4, statusOption5, statusOption6);
typeSelect.append(typeOption1, typeOption2);

function showSettings() {
    extensionactive = true;
    changeSizeMainDiv(360, 464);
    BubbleOpened();
    removeEye();
    mainDiv.removeEventListener("mouseleave", removeMenu);
    button.addEventListener("click", closeSettings);
    document.querySelector("#mentorgoalextension_container").remove();
    settingsContentContainer.appendChild(settingsContent);
    settingsHeaderContainer.appendChild(settingsHeaderContent);
    settingsHeaderContainer.appendChild(settingsHeaderDivider);
    dragContainer.appendChild(dragVector);
    settingsContentContainer.appendChild(dragContainer);
    settingsHeaderContent.appendChild(settingsHeaderText);
    settingsContent.appendChild(settingsContentContent);
    settingsContentContent.appendChild(settingsForm);
    settingsForm.appendChild(statusSelectContainer);
    statusSelectContainer.appendChild(statusLabel);
    statusSelectContainer.appendChild(statusSelect);
    statusSelect.append(statusOption1, statusOption2, statusOption3, statusOption4, statusOption5, statusOption6);
    settingsForm.appendChild(typeSelectContainer);
    typeSelectContainer.appendChild(typeLabel);
    typeSelectContainer.appendChild(typeSelect);
    typeSelect.append(typeOption1, typeOption2);
    settingsForm.appendChild(emailInputContainer);
    emailInputContainer.appendChild(emailLabel);
    emailInputContainer.appendChild(emailInput);
    emailInputContainer.appendChild(emailHelper);
    settingsContentContainer.appendChild(settingsHeaderContainer);
    settingsContentContent.appendChild(formButtonContainer);
    formButtonContainer.appendChild(formButtonDivider);
    formButtonContainer.appendChild(formButton);
    mainDiv.appendChild(settingsContentContainer);

    // add a statutDefault in selected default
    document.getElementById("mentorgoalextension_statusSelect").value=statut;
    document.getElementById("mentorgoalextension_typeSelect").value=type_contract;

    document.getElementById("mentorgoalextension_statusSelect").addEventListener("change",change_statut);
    document.getElementById("mentorgoalextension_typeSelect").addEventListener("change",change_type_contract);
}

function change_statut() {
    statut=document.getElementById("mentorgoalextension_statusSelect").value;
    chrome.storage.sync.set({"statut":statut}, function() {
        console.log("le statut ?? ??t?? modifi??");
        chrome.storage.sync.get(["statut"], function(result) {
            console.log(result["statut"]);
        });
    });
}

function change_type_contract() {
    type_contract=document.getElementById("mentorgoalextension_typeSelect").value;
    chrome.storage.sync.set({"type_contract":type_contract}, function() {
        console.log("le type de contrat ?? ??t?? modifi??");
        chrome.storage.sync.get(["type_contract"], function(result) {
            console.log(result["type_contract"]);
        });
    });
}

function closeSettings() {
    document.querySelector("#mentorgoalextension_settingsContentContainer").remove();
    button.removeEventListener("click", closeSettings);
    mainDiv.addEventListener("mouseleave", removeMenu);
    extensionactive = false;
    BubbleClosed();
    showEye();
}