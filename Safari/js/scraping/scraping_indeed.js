function addCandidacy() {
    var iframe = document.getElementById('vjs-container-iframe');
    var innerDoc = iframe.contentDocument;
    let job = innerDoc.querySelector("h1.jobsearch-JobInfoHeader-title").childNodes[0].nodeValue.trim();
    if (innerDoc.querySelector(".jobsearch-InlineCompanyRating > div.icl-u-lg-mr--sm > a")) {
        var company = innerDoc.querySelector("div.icl-u-lg-mr--sm > a").innerHTML.trim();
    } else {
        var company = innerDoc.querySelector("div.icl-u-lg-mr--sm").innerHTML.trim();
    }
    if (innerDoc.querySelector("div.jobsearch-jobLocationHeader-location")) {
        var place = innerDoc.querySelector("div.jobsearch-jobLocationHeader-location").innerHTML.trim();
    } else {
        var place = innerDoc.querySelector("div.jobsearch-JobInfoHeader-subtitle").childNodes[1].innerHTML.trim();
    }
    let description = innerDoc.querySelector("div#jobDescriptionText").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (document.getElementById('vjs-container-iframe')) {
        var iframe = document.getElementById('vjs-container-iframe');
        var innerDoc = iframe.contentDocument;
        if (innerDoc.querySelector("h1.jobsearch-JobInfoHeader-title")) {
            if (innerDoc.querySelector("h1.jobsearch-JobInfoHeader-title").childNodes[0].nodeValue.trim() != prevTitle) {
                console.log(prevTitle)
                possible_addCandidacy=1;
                candidacyFound();
                showEye();
            }
            prevTitle = innerDoc.querySelector("h1.jobsearch-JobInfoHeader-title").childNodes[0].nodeValue.trim();
        } else {
            possible_addCandidacy=0;
            removeEye();
        }
    }
}

var prevTitle = '';
var possible_addCandidacy=0;
var possible_addContact=0;
refreshExtension();
setInterval(refreshExtension, 200);
listItem1.addEventListener("click", addCandidacy);

