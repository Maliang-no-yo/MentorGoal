// Creating html

let successContainer = document.createElement("div");
successContainer.id = "mentorgoalextension_successContainer";
successContainer.innerHTML = '\
<div id="mentorgoalextension_successContentContainer">\
    <div id="mentorgoalextension_successHeaderContainer">\
        <div id="mentorgoalextension_successHeaderVector"></div>\
        <p id="mentorgoalextension_successHeaderText1"></p>\
        <p id="mentorgoalextension_successHeaderText2"></p>\
    </div>\
    <button id="mentorgoalextension_successButton">Ouvrir Mentor Goal\
    <div id="mentorgoalexension_successLinkVector"></div>\
    </button>\
</div>\
'

//Adding all the vectors
function successAddVectors() {
    document.querySelector('#mentorgoalexension_successLinkVector').style.backgroundImage = "url('"+linkSuccessURL+"')";
    document.querySelector('#mentorgoalexension_successLinkVector').style.backgroundRepeat = "no-repeat";
    document.querySelector('#mentorgoalextension_successHeaderVector').style.backgroundImage = "url('"+validateURL+"')";
    document.querySelector('#mentorgoalextension_successHeaderVector').style.backgroundRepeat = "no-repeat";
}

function showSuccessMenu(text1, text2) {
    extensionactive = true;
    successContainer.appendChild(dragContainer);
    changeSizeMainDiv(360, 344);
    mainDiv.appendChild(successContainer);
    document.querySelector("#mentorgoalextension_successHeaderText1").innerHTML = text1;
    document.querySelector("#mentorgoalextension_successHeaderText2").innerHTML = text2;
    document.querySelector("#mentorgoalextension_successButton").addEventListener("click", openTab);
    successAddVectors();
    BubbleOpened();
    removeEye();
    mainDiv.removeEventListener("mouseleave", removeMenu);
    button.addEventListener("click", closeSuccessMenu);
    if (candidacyContainer) {
        candidacyContainer.remove();
    }
    if (contactContainer) {
        contactContainer.remove();
    }
}

function closeSuccessMenu() {
    document.querySelector("#mentorgoalextension_successContainer").remove();
    button.removeEventListener("click", closeSuccessMenu);
    mainDiv.addEventListener("mouseleave", removeMenu);
    extensionactive = false;
    BubbleClosed();
    showEye();
}