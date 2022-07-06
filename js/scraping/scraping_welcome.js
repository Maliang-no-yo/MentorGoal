function addCandidacy() {
    let job = document.querySelector("main > section > div > h1").innerHTML.trim();
    var company = document.querySelector("main > section > div > a > h3").innerHTML.trim();
    var place = document.querySelector("main > section > div > ul > li:nth-child(2) > span.sc-1lvyirq-2.gRznTA").innerHTML.trim();
    let description = document.querySelector("main > div.sc-cxpSdN.sc-iIUQWv.hdl9e2-6.jUAfYu.fZjHgB > div > div.sc-1b6z8iw-0.bcNggJ > div > div.sc-12bzhsi-16.jZMRMg > div > section:nth-child(1) > div").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("/companies/") && window.location.href.includes("/jobs/")) {
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