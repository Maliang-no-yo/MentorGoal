function addCandidacy() {
    if (document.querySelector("#detailOffreVolet")) {
        var job = document.querySelector("#detailOffreVolet > h1").innerHTML.trim();
        if (document.querySelector("#detailOffreVolet > div.media > div > h3")) {
            var company = document.querySelector("#detailOffreVolet > div.media > div > h3").innerHTML.trim();
        } else {
            var company = null;
        }
        var place = document.querySelector("#detailOffreVolet > p.t4.title-complementary > span:nth-child(1) > span:nth-child(5)").innerHTML.trim();
        var description = document.querySelector("#detailOffreVolet > div > div.description.col-sm-8.col-md-7 > p").innerHTML.trim();
    } else {
        var job = document.querySelector("#contents > div.container-fluid.gabarit-full-page.with-large-right-column > div > div.panel-center.col-md-8 > div > div.modal-details.modal-details-offre > div > div > div > div > h1").innerHTML.trim();
        if (document.querySelector("#contents > div.container-fluid.gabarit-full-page.with-large-right-column > div > div.panel-center.col-md-8 > div > div.modal-details.modal-details-offre > div > div > div > div > div.media > div > h3")) {
            var company = document.querySelector("#contents > div.container-fluid.gabarit-full-page.with-large-right-column > div > div.panel-center.col-md-8 > div > div.modal-details.modal-details-offre > div > div > div > div > div.media > div > h3").innerHTML.trim();
        } else {
            var company = null;
        }
        var place = document.querySelector("#contents > div.container-fluid.gabarit-full-page.with-large-right-column > div > div.panel-center.col-md-8 > div > div.modal-details.modal-details-offre > div > div > div > div > p.t4.title-complementary > span:nth-child(1) > span:nth-child(5)").innerHTML.trim();
        var description = document.querySelector("#contents > div.container-fluid.gabarit-full-page.with-large-right-column > div > div.panel-center.col-md-8 > div > div.modal-details.modal-details-offre > div > div > div > div > div.row > div.description.col-sm-8.col-md-7 > p").innerHTML.trim();
    }
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("pole-emploi.fr/offres/recherche/detail/")) {
            possible_addCandidacy=1;
            candidacyFound();
            showEye();
            if (document.querySelector("#PopinDetails")) {
                document.querySelector("#PopinDetails").appendChild(mainDiv);
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

