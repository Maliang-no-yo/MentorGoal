// Creating all the needed elements for the extension.
mainDiv.style.zIndex = "10000";
var extensionContainer = document.createElement("div");
    //Button
var button = document.createElement("div");
var buttonVector = document.createElement("div");
var buttonInsideVectorContainer = document.createElement("div");
var buttonInsideVector = document.createElement("div");
    //Drag
var dragContainer = document.createElement("div");
var dragVector = document.createElement("div");

    //Container for Header and Content
var extensionContentContainer = document.createElement("div");
        //Header
var extensionHeader = document.createElement("div");
var extensionHeaderLogo = document.createElement("div");
var extensionHeaderLogoBackground = document.createElement("div");
var extensionHeaderLogoM = document.createElement("div");
var extensionHeaderLogoG = document.createElement("div");
var extensionHeaderTitleContainer = document.createElement("div");
var extensionHeaderTitleText1 = document.createElement("p");
var extensionHeaderTitleText2 = document.createElement("p");
        //Content
var extensionContent = document.createElement("div");
var step1 = document.createElement("div");
var step1P = document.createElement("p");
var step1number = document.createElement("p");
var step2 = document.createElement("div");
var step2P = document.createElement("p");
var step2number = document.createElement("p");
var step3 = document.createElement("div");
var step3P = document.createElement("p");
var step3number = document.createElement("p");

//Giving IDs and classnames to all divs
mainDiv.id = "mentorgoalextension_mainDiv";
extensionContainer.id = "mentorgoalextension_container";
    //Button
button.id = "mentorgoalextension_button";
buttonVector.id = "mentorgoalextension_buttonVector";
buttonInsideVectorContainer.id = "mentorgoalextension_buttonInsideVectorContainer";
buttonInsideVector.id = "mentorgoalextension__buttonInsideVector";
    //Drag
dragContainer.id = "dragbar";
dragVector.id = "mentorgoalextension_dragVector";
    //Container for Header and Content
extensionContentContainer.id = "mentorgoalextension_extensionContentContainer";
        //Header
extensionHeader.id = "mentorgoalextension_extensionHeader";
extensionHeaderLogo.id = "mentorgoalextension_extensionHeaderLogo";
extensionHeaderLogoBackground.id = "mentorgoalextension_extensionHeaderLogoBackground";
extensionHeaderLogoM.id = "mentorgoalextension_extensionHeaderLogoM";
extensionHeaderLogoG.id = "mentorgoalextension_extensionHeaderLogoG";
extensionHeaderTitleContainer.id = "mentorgoalextension_exensionHeaderTitleContainer";
extensionHeaderTitleText1.id = "mentorgoalextension_extensionHeaderTitleText1";
extensionHeaderTitleText2.id = "mentorgoalextension_extensionHeaderTitleText2";
        //Content
extensionContent.id = "mentorgoalextension_extensionContent";
step1.className = "mentorgoalextension_step";
step2.className = "mentorgoalextension_step";
step3.className = "mentorgoalextension_step";
step1P.id = "mentorgoalextension_step1P";
step2P.id = "mentorgoalextension_step2P";
step3P.id = "mentorgoalextension_step3P";
step1number.id = "mentorgoalextension_step1Number";
step2number.id = "mentorgoalextension_step2Number";
step3number.id = "mentorgoalextension_step3Number";

//Assembling the view
mainDiv.appendChild(button);
button.appendChild(buttonVector);
button.appendChild(buttonInsideVectorContainer);
buttonInsideVectorContainer.appendChild(buttonInsideVector);

//Adding text to some divs
extensionHeaderTitleText1.innerHTML = "C'est parti !"
extensionHeaderTitleText2.innerHTML = "L'extension Mentor Goal est prête."
step1number.innerHTML = "1.";
step2number.innerHTML = "2.";
step3number.innerHTML = "3.";
step1P.innerHTML = "Trouve une offre d'emploi en ligne";
step2P.innerHTML = "Clique sur la bulle MG en bas à droite";
step3P.innerHTML = "Enregistre ta candidature sur ton espace candidature Mentor Goal";

//Loading all the vectors
var logoBackgroundURL = browser.runtime.getURL("../images_mentor_goal/vectors/Vectorlogobackground.svg");
var MURL = browser.runtime.getURL("../images_mentor_goal/vectors/VectorM.svg");
var GURL = browser.runtime.getURL("../images_mentor_goal/vectors/VectorG.svg");
var dragURL = browser.runtime.getURL("../images_mentor_goal/vectors/Vectordrag.svg");
var crossURL = browser.runtime.getURL("../images_mentor_goal/vectors/Vectorcross.svg");

//Adding vector to the vector containers
buttonVector.style.backgroundImage = "url('"+logoBackgroundURL+"')";
buttonVector.style.backgroundSize = "cover";
buttonVector.style.backgroundRepeat = "no-repeat";
dragVector.style.backgroundImage = "url('"+dragURL+"')";
dragVector.style.backgroundSize = "cover";
dragVector.style.backgroundRepeat = "no-repeat";
extensionHeaderLogoBackground.style.backgroundImage = "url('"+logoBackgroundURL+"')";
extensionHeaderLogoBackground.style.backgroundSize = "cover";
extensionHeaderLogoBackground.style.backgroundRepeat = "no-repeat";
extensionHeaderLogoM.style.backgroundImage = "url('"+MURL+"')";
extensionHeaderLogoM.style.backgroundSize = "cover";
extensionHeaderLogoM.style.backgroundRepeat = "no-repeat";
extensionHeaderLogoG.style.backgroundImage = "url('"+GURL+"')";
extensionHeaderLogoG.style.backgroundSize = "cover";
extensionHeaderLogoG.style.backgroundRepeat = "no-repeat";


change_rightMainDiv(56);
change_bottomMainDiv(56);
change_heightMainDiv(488);
change_widthMainDiv(360);


//Add event listeners
button.addEventListener("mouseenter", showTutorial);
button.addEventListener("click", removeTutorial);

function init() {
    document.body.appendChild(mainDiv);
    BubbleClosed();
}

function showTutorial() {
    tutorialAssemble();
    BubbleOpened();
}

function tutorialAssemble() {
    if (document.querySelector("#mentorgoalextension_container")) {return;}
    mainDiv.appendChild(extensionContainer);
    extensionContainer.appendChild(dragContainer);
    dragContainer.appendChild(dragVector);
    extensionContainer.appendChild(extensionContentContainer);
    extensionContentContainer.appendChild(extensionHeader);
    extensionHeader.appendChild(extensionHeaderLogo);
    extensionHeaderLogo.appendChild(extensionHeaderLogoBackground);
    extensionHeaderLogo.appendChild(extensionHeaderLogoM);
    extensionHeaderLogo.appendChild(extensionHeaderLogoG);
    extensionHeader.appendChild(extensionHeaderTitleContainer);
    extensionHeaderTitleContainer.appendChild(extensionHeaderTitleText1);
    extensionHeaderTitleContainer.appendChild(extensionHeaderTitleText2);
    extensionContentContainer.appendChild(extensionContent);
    extensionContent.appendChild(step1);
    extensionContent.appendChild(step2);
    extensionContent.appendChild(step3);
    step1.appendChild(step1number);
    step2.appendChild(step2number);
    step3.appendChild(step3number);
    step1.appendChild(step1P);
    step2.appendChild(step2P);
    step3.appendChild(step3P);
}

function removeTutorial() {
    if (active === true || !document.querySelector("#mentorgoalextension_container")) {return;}
    BubbleClosed();
    document.querySelector("#mentorgoalextension_container").remove();
}

function BubbleClosed(){
    if (document.getElementById("divM")){return;}
    if (document.getElementById("mentorgoalextension_buttonInsideVectorContainer")){
        document.getElementById("mentorgoalextension_buttonInsideVectorContainer").remove();
    }
    bubble=document.querySelector("#mentorgoalextension_button")
    bubble.style.cursor="auto";
    divM = document.createElement("div");
    divG = document.createElement("div");
    divM.id="divM";
    divG.id="divG";
    divM.style.backgroundImage = "url('"+MURL+"')";
    divG.style.backgroundImage = "url('"+GURL+"')";
    bubble.append(divM,divG);
}

function BubbleOpened(){
    if (document.getElementById("divM")){
        document.getElementById("divM").remove();
        document.getElementById("divG").remove();
    }
    bubble=document.querySelector("#mentorgoalextension_button")
    bubble.style.cursor="pointer";
    buttonInsideVector.style.backgroundImage = "url('"+crossURL+"')";
    bubble.append(buttonInsideVectorContainer);
    buttonInsideVectorContainer.appendChild(buttonInsideVector);
}

init();
showTutorial();