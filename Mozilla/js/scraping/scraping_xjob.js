// Scraping pour RegionsJob, OuestJob, CentreJob, EstJob,
// ParisJob, SudOuestJob, RhoneAlpesJob, PacaJob et NordJob

function addCandidacy() {
    let job = document.querySelector("body > header > section.campagne.centered.classic.modal > h1 > span").innerHTML.trim();
    var company = document.querySelector("body > header > section.campagne.centered.classic.modal > h1 > span").previousSibling.nodeValue.trim();
    var place = document.querySelector("body > header > section.campagne.centered.classic.modal > ul > li:nth-child(1) > span > svg").nextSibling.nodeValue.trim();
    let description = document.querySelector("body > main > section.righty > section:nth-child(1) > p").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("job.com/emplois/")) {
            if (!window.location.href.includes("/recherche.html")) {
                possible_addCandidacy=1;
                candidacyFound();
                showEye();
            }
        } else {
            possible_addCandidacy=0;
            removeEye();
        }
        prevURL = window.location.href;
    }
}

var prevURL = '';
var possible_addCandidacy=0;
var possible_addContact=0;
refreshExtension();
setInterval(refreshExtension, 200);
listItem1.addEventListener("click", addCandidacy);
