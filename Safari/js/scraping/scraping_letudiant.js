function addCandidacy() {
    let job = document.querySelector("body > div.tw-main-container.tw-bg-white > section.tw-mb-4 > div > h1").innerHTML.trim();
    var company = document.querySelector("body > div.tw-main-container.tw-bg-white > .tw-border-solid.tw-border-b.tw-border-gray-500.tw-mb-2 > div.tw-w-full.content-main-col > section.tw-mb-4.tw-border-b.tw-border-gray-500 > div.tw-flex.tw-justify-between.tw-mb-4.tw-border-solid.tw-border.tw-border-gray-500.tw-rounded-large.tw-p-4.tw-pr-3 > div > span").innerHTML.trim();
    var place = document.querySelector("body > div.tw-main-container.tw-bg-white > .tw-border-solid.tw-border-b.tw-border-gray-500.tw-mb-2 > div.tw-w-full.content-main-col > section.tw-mb-4.tw-border-b.tw-border-gray-500 > div.tw-flex.tw-justify-between.tw-mb-4.tw-border-solid.tw-border.tw-border-gray-500.tw-rounded-large.tw-p-4.tw-pr-3 > div > div > span").innerHTML.trim();
    let description = document.querySelector("body > div.tw-main-container.tw-bg-white > .tw-border-solid.tw-border-b.tw-border-gray-500.tw-mb-2 > div.tw-w-full.content-main-col > section:nth-child(5) > div").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("jobs-stages.letudiant.fr/")) {
            if (
                window.location.href.includes("/jobs-etudiants/annonce/") ||
                window.location.href.includes("/offre-alternance/annonce/") ||
                window.location.href.includes("/stages-etudiants/annonce/") ||
                window.location.href.includes("/emploi/annonce/")) {
                    possible_addCandidacy=1;
                    candidacyFound();
                    showEye();
            }
        } else {
            possible_addCandidacy=0;
            removeEye();
        }
    }
    prevURL = window.location.href;
}

var prevURL = '';
var possible_addCandidacy=0;
var possible_addContact=0;
refreshExtension();
setInterval(refreshExtension, 200);
listItem1.addEventListener("click", addCandidacy);
