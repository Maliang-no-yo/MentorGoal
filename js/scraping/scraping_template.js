function addCandidacy() {
    var job = document.querySelector("#").innerHTML.trim();
    var company = document.querySelector("#").innerHTML.trim();
    var place = document.querySelector("#").innerHTML.trim();
    var description = document.querySelector("#").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    var url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("#")) {
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
