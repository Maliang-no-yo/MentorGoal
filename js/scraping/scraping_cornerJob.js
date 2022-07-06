function addCandidacy() {
    let job = document.querySelector("body > div.pages-padding-limit-wrapper > div > div.offer-details-wrapper > div > h1").innerHTML.trim();
    var company = document.querySelector("body > div.pages-padding-limit-wrapper > div > div.summary-report-wrapper > div.offer-summary-container.opened > div > div.company.collapse-onload > p").innerHTML.trim();
    var place = document.querySelector("body > div.pages-padding-limit-wrapper > div > div.offer-details-wrapper > div > a").innerHTML.trim();
    let description = document.querySelector("body > div.pages-padding-limit-wrapper > div > div.offer-details-wrapper > div > p.offer-description.collapse-onload").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("cornerjob.com/fr/emploi/")) {
            possible_addCandidacy=1;
            candidacyFound();
            showEye();
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