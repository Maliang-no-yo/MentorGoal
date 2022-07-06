function addCandidacy() {
    var job = document.querySelector("#offre_detail > h1").innerHTML.trim();
    var company = document.querySelector("#offre_detail > div.bloc.infos_entreprise > p:nth-child(3) > span.nom").innerHTML.trim();
    var place = document.querySelector("#offre_detail > div.bloc.infos_cles > div.contenu > dl:nth-child(1) > dd:nth-child(8)").innerHTML.trim();
    var description = document.querySelector("#offre_detail > div.bloc.infos_poste.trackingContainer.trackingdone > p:nth-child(3)").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    var url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("https://www.studyrama-emploi.com/home_offre_detail")) {
            possible_addCandidacy = 1;
            candidacyFound();
            showEye();
        } else {
            possible_addCandidacy = 0;
            removeEye();
        }
        prevURL = window.location.href;
    }
}

var prevURL = '';
var possible_addCandidacy = 0;
var possible_addContact = 0;
refreshExtension();
setInterval(refreshExtension, 200);
listItem1.addEventListener("click", addCandidacy);
