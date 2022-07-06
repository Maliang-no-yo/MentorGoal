// Creating all the needed elements for the extension.
mainDiv.style.zIndex = "10000";
var extensionContainer = document.createElement("div");  
    //Button
var buttonContainer = document.createElement("div");
        //Logo
var button = document.createElement("div");
var buttonVector = document.createElement("div");
var buttonInsideVectorContainer = document.createElement("div");
var buttonInsideVector = document.createElement("div");
        //Eye
var eyeContainer = document.createElement("div");
var eyeVector = document.createElement("div");
    //Drag
var dragContainer = document.createElement("div");
var dragVector = document.createElement("div");
    //Content
var listItem0 = document.createElement("div");
var listItem1 = document.createElement("div");
var listItem2 = document.createElement("div");
var listItem3 = document.createElement("div");
var listItem0P = document.createElement("p");
var listItem1P = document.createElement("p");
var listItem2P = document.createElement("p");
var listItem3P = document.createElement("p");
var listItem0Vector = document.createElement("div");
var listItem1Vector = document.createElement("div");
var listItem2Vector = document.createElement("div");
var listItem3Vector = document.createElement("div");

//Giving IDs and classnames to all divs
mainDiv.id = "mentorgoalextension_mainDiv";
extensionContainer.id = "mentorgoalextension_container";
    //Button
buttonContainer.id = "mentorgoalextension_buttonContainer";
button.id = "mentorgoalextension_button";
buttonVector.id = "mentorgoalextension_buttonVector";
buttonInsideVectorContainer.id = "mentorgoalextension_buttonInsideVectorContainer";
buttonInsideVector.id = "mentorgoalextension_buttonInsideVector";
eyeContainer.id = "mentorgoalextension_eyeContainer";
eyeVector.id = "mentorgoalextension_eyeVector";
    //Drag
dragContainer.id = "dragbar";
dragVector.id = "mentorgoalextension_dragVector";
    //Content
listItem2.id = "mentorgoalextension_listItem1";     // On donne les id 1 et 2 pour que de base les listItems
listItem3.id = "mentorgoalextension_listItem2";     // soient bien placés car listItem1 et listItem2 ne
listItem2P.id = "mentorgoalextension_listItem1P";   // s'affichent qu'à certaines conditions.
listItem3P.id = "mentorgoalextension_listItem2P";
listItem2Vector.id = "mentorgoalextension_listItem1Vector";
listItem3Vector.id = "mentorgoalextension_listItem2Vector";

//Assembling the view
mainDiv.appendChild(buttonContainer);
buttonContainer.appendChild(button);
button.appendChild(buttonVector);
button.appendChild(buttonInsideVectorContainer);
buttonInsideVectorContainer.appendChild(buttonInsideVector);

//Adding text to some divs
listItem0P.innerHTML = "Ajouter à Mes contacts";
listItem1P.innerHTML = "Ajouter à Mes candidatures";
listItem2P.innerHTML = "Accéder à Mes candidatures";
listItem3P.innerHTML = "Paramètres";

//Loading all the vectors
var logoBackgroundURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorlogobackground.svg");
var MURL = chrome.runtime.getURL("images_mentor_goal/vectors/VectorM.svg");
var GURL = chrome.runtime.getURL("images_mentor_goal/vectors/VectorG.svg");
var dragURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectordrag.svg");
var crossURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorcross.svg");
var contactURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorcontact.svg");
var bookURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorbook.svg");
var linkURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorlink.svg");
var linkSuccessURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorlinksuccess.svg");
var settingsURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorsettings.svg");
var eyeURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectoreye.svg");
var validateURL = chrome.runtime.getURL("images_mentor_goal/vectors/Vectorvalidate.svg");

//Adding vector to the vector containers
buttonVector.style.backgroundImage = "url('"+logoBackgroundURL+"')";
buttonVector.style.backgroundSize = "cover";
buttonVector.style.backgroundRepeat = "no-repeat";
eyeVector.style.backgroundImage = "url('"+eyeURL+"')";
eyeVector.style.backgroundSize = "cover";
eyeVector.style.backgroundRepeat = "no-repeat";
dragVector.style.backgroundImage = "url('"+dragURL+"')";
dragVector.style.backgroundSize = "cover";
dragVector.style.backgroundRepeat = "no-repeat";
listItem0Vector.style.backgroundImage = "url('"+contactURL+"')";
listItem0Vector.style.backgroundSize = "cover";
listItem0Vector.style.backgroundRepeat = "no-repeat";
listItem1Vector.style.backgroundImage = "url('"+bookURL+"')";
listItem1Vector.style.backgroundSize = "cover";
listItem1Vector.style.backgroundRepeat = "no-repeat";
listItem2Vector.style.backgroundImage = "url('"+linkURL+"')";
listItem2Vector.style.backgroundSize = "cover";
listItem2Vector.style.backgroundRepeat = "no-repeat";
listItem3Vector.style.backgroundImage = "url('"+settingsURL+"')";
listItem3Vector.style.backgroundSize = "cover";
listItem3Vector.style.backgroundRepeat = "no-repeat";

//Calling drag events
var rightMainDiv = 56;
var bottomMainDiv = 56;
var widthMainDiv = 256;
var heightMainDiv = 256;

change_rightMainDiv();
change_bottomMainDiv();
change_heightMainDiv();
change_widthMainDiv();

//Add event listeners
button.addEventListener("mouseenter", showMenu);
listItem2.addEventListener("click", openTab);

//Adding font to document
var mulishFont = document.createElement('style');
fontName = "Mulish";
fontURL = chrome.runtime.getURL("fonts/Mulish.ttf");
mulishFont.appendChild(document.createTextNode("\
@font-face {\
    font-family: "+fontName+";\
    src: url('" + fontURL + "');\
}\
"));

//Creating booleans
var extensionactive = false;
var candidacyactive = false;
var bCandidacyFound = false;
var contactactive = false;
var bContactFound = false;

function initExtension() {
    document.body.appendChild(mainDiv);
    BubbleClosed();
}

function showMenu() {
    if (extensionactive == true) {return;}
    changeSizeMainDiv(256, 256);
    menuAssemble();
    showEye();
    mainDiv.addEventListener("mouseleave", removeMenu);
}

function menuAssemble() {
    if (document.querySelector("#mentorgoalextension_container")) {return;}
    mainDiv.appendChild(extensionContainer);
    extensionContainer.appendChild(listItem2);
    extensionContainer.appendChild(listItem3);
    extensionContainer.appendChild(dragContainer);
    dragContainer.appendChild(dragVector);
    listItem2.appendChild(listItem2Vector);
    listItem2.appendChild(listItem2P);
    listItem3.appendChild(listItem3Vector);
    listItem3.appendChild(listItem3P);
}

function removeMenu() {
    if (active === true) {return;}
    BubbleClosed();
    if (!bCandidacyFound && !bContactFound) {
        removeEye();
    }
    if (document.querySelector("#mentorgoalextension_container")) {
        document.querySelector("#mentorgoalextension_container").remove();
    }
    mainDiv.removeEventListener("mouseleave", removeMenu);
}

function BubbleClosed(){
    if (document.getElementById("mentorgoalextension_buttonInsideVectorContainer")){
        document.getElementById("mentorgoalextension_buttonInsideVectorContainer").remove();
    }
    if (document.querySelector("#divM")) {return;}
    bubble=document.querySelector("#mentorgoalextension_button")
    divM = document.createElement("div");
    divG = document.createElement("div");
    divM.id="divM";
    divG.id="divG";
    divM.style.backgroundImage = "url('"+MURL+"')";
    divG.style.backgroundImage = "url('"+GURL+"')";
    bubble.append(divM,divG);
    bubble.style.cursor = "auto";
}

function BubbleOpened(){
    if (document.getElementById("divM")){
        document.getElementById("divM").remove();
        document.getElementById("divG").remove();
    }
    bubble=document.querySelector("#mentorgoalextension_button")
    buttonInsideVector.style.backgroundImage = "url('"+crossURL+"')";
    bubble.append(buttonInsideVectorContainer);
    buttonInsideVectorContainer.appendChild(buttonInsideVector);
    bubble.style.cursor = "pointer";
}

function showEye() {
    if (document.querySelector('#mentorgoalextension_eyeContainer')) {return;}
    buttonContainer.appendChild(eyeContainer);
    eyeContainer.appendChild(eyeVector);
}

function removeEye() {
    if(document.querySelector("#mentorgoalextension_eyeContainer")) {
        document.querySelector("#mentorgoalextension_eyeContainer").remove();
    }
}

function candidacyFound() {
    candidacyactive = true;
    bCandidacyFound = true;
    listItem1.appendChild(listItem1Vector);
    listItem1.appendChild(listItem1P);
    extensionContainer.insertBefore(listItem1, extensionContainer.firstChild);
    listItem1.id = "#mentorgoalextension_listItem1";
    listItem1P.id = "mentorgoalextension_listItem1P";
    listItem1Vector.id = "mentorgoalextension_listItem1Vector";
    listItem2.id = "#mentorgoalextension_listItem2";
    listItem2P.id = "mentorgoalextension_listItem2P";
    listItem2Vector.id = "mentorgoalextension_listItem2Vector";
    listItem3.id = "#mentorgoalextension_listItem3";
    listItem3P.id = "mentorgoalextension_listItem3P";
    listItem3Vector.id = "mentorgoalextension_listItem3Vector";
    showEye();
}

function candidacyLost() {
    if (bCandidacyFound == false) {return;}
    listItem1.parentElement.removeChild(listItem1);
    bCandidacyFound = false;
}

function contactFound() {
    contactactive = true;
    bContactFound = true;
    listItem0.appendChild(listItem0Vector);
    listItem0.appendChild(listItem0P);
    extensionContainer.insertBefore(listItem0, extensionContainer.firstChild);
    listItem0.id = "#mentorgoalextension_listItem0";
    listItem0P.id = "mentorgoalextension_listItem0P";
    listItem0Vector.id = "mentorgoalextension_listItem0Vector";
    listItem2.id = "#mentorgoalextension_listItem2";
    listItem2P.id = "mentorgoalextension_listItem2P";
    listItem2Vector.id = "mentorgoalextension_listItem2Vector";
    listItem3.id = "#mentorgoalextension_listItem3";
    listItem3P.id = "mentorgoalextension_listItem3P";
    listItem3Vector.id = "mentorgoalextension_listItem3Vector";
    showEye();
}

function contactLost() {
    console.log(bContactFound);
    if (bContactFound == false) {return;}
    listItem0.parentElement.removeChild(listItem0);
    bContactFound = false;
}

function openTab() {   
    window.open("https://mg-student.netlify.app/applications", "_blank");
}

initExtension();