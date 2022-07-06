function addCandidacy_search() {
    let job = document.querySelector(".jobs-unified-top-card__content--two-pane > a > h2").innerHTML.trim();
    if (document.querySelector(".jobs-unified-top-card__subtitle-primary-grouping > span:first-of-type > a")) {
        var company = document.querySelector(".jobs-unified-top-card__subtitle-primary-grouping > span:first-of-type > a").innerHTML.trim();
    } else {
        var company = document.querySelector(".jobs-unified-top-card__subtitle-primary-grouping > span:first-of-type").innerHTML.trim();
    }
    var place = document.querySelector(".jobs-unified-top-card__subtitle-primary-grouping span:nth-of-type(2)").innerHTML.trim();
    let description = document.querySelector(".jobs-description-content__text > span:first-of-type").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function addCandidacy_view() {
    let job = document.querySelector("h1").innerHTML.trim();
    var company = document.querySelector("span.jobs-unified-top-card__subtitle-primary-grouping.mr2.t-black > span:nth-child(1) > a").innerHTML.trim();
    var place = document.querySelector("span.jobs-unified-top-card__bullet").innerHTML.trim();
    let description = document.querySelector("#job-details").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    let url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function addCandidacy(){
    if (window.location.href.includes("linkedin.com/jobs/search")) {
        addCandidacy_search();
    } else {
        addCandidacy_view();
    }
}

function addContact(){
    // var face=document.querySelector("div.ph5.pb5 > div:nth-child(1) > div.pv-top-card--photo.text-align-left.pv-top-card--photo-resize > div > button > img").src;
    // if (face == "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"){face=null};
    var name=document.querySelector("h1").innerHTML.trim().split(' ');
    var firstname=name[0];
    name.shift()
    var lastname=name.join(" ");
    var job=document.querySelector("div.text-body-medium.break-words").innerHTML.trim();
    var place=document.querySelector("span.text-body-small.inline.t-black--light.break-words").innerHTML.trim();
    if (document.querySelector("div > section.pv-contact-info__contact-type.ci-vanity-url > div > a")){
        var link_linkedin=document.querySelector("div > section.pv-contact-info__contact-type.ci-vanity-url > div > a").innerHTML.trim();
    } else {
        var link_linkedin=window.location.href;
    }   
    if (document.querySelector("div > section.pv-contact-info__contact-type.ci-email > div > a")){
        var mail=document.querySelector("div > section.pv-contact-info__contact-type.ci-email > div > a").innerHTML.trim();
    } else {
        var mail=null;
    }
    if (document.querySelector("div > section.pv-contact-info__contact-type.ci-phone > ul > li > span.t-14.t-black.t-normal")){
        var phone=document.querySelector("div > section.pv-contact-info__contact-type.ci-phone > ul > li > span.t-14.t-black.t-normal").innerHTML.trim();
    } else {
        var phone=null;
    }
    var contact={"firstname":firstname,"lastname":lastname,"job":job,"place":place,"link_linkedin":link_linkedin,"mail":mail,"phone":phone};
    console.log(contact);
    showContactMenu(contact);
}

function refreshExtension() {
    if (window.location.href != prevURL) {
        if (window.location.href.includes("linkedin.com/jobs/search") || window.location.href.includes("linkedin.com/jobs/view")) {
            if (possible_addCandidacy==0 && possible_addContact==0){
                contactLost();
                candidacyFound();
                showEye()
            }
            possible_addCandidacy=1;
            possible_addContact=0;
        } else if (window.location.href.includes("linkedin.com/in/")) {
            if (possible_addCandidacy==0 && possible_addContact==0){
                candidacyLost();
                contactFound();
                showEye()
            }
            possible_addContact=1;
            possible_addCandidacy=0;
        } else {
            possible_addCandidacy=0;
            possible_addContact=0;
            candidacyLost();
            contactLost();
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
listItem0.addEventListener("click", addContact);