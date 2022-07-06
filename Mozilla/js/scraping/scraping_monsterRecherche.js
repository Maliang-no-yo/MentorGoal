function addCandidacy() {
    var job = document.querySelector("#__next > div.main-layoutstyles__Layout-sc-1w7iv1n-0.bAlkTK > main > div.search-results-tabstyle__SearchResultsTabWrap-sc-7efjjm-0.ISUdh > nav > section.search-results-tabstyle__SearchResultsTabContent-sc-7efjjm-6.gULgfj > div.splitviewstyle__SplitContainer-zpzpmg-0.LpUOW > div.splitviewstyle__JobContainer-zpzpmg-4.cgIrSK > div.headerstyle__JobViewHeaderContainer-sc-1ijq9nh-0.QMbmP > div > div.headerstyle__JobViewHeaderLeft-sc-1ijq9nh-3.iGoBie > div.headerstyle__JobViewHeaderContent-sc-1ijq9nh-8.cjczkH > h1").innerHTML.trim();
    var company = document.querySelector("#__next > div.main-layoutstyles__Layout-sc-1w7iv1n-0.bAlkTK > main > div.search-results-tabstyle__SearchResultsTabWrap-sc-7efjjm-0.ISUdh > nav > section.search-results-tabstyle__SearchResultsTabContent-sc-7efjjm-6.gULgfj > div.splitviewstyle__SplitContainer-zpzpmg-0.LpUOW > div.splitviewstyle__JobContainer-zpzpmg-4.cgIrSK > div.headerstyle__JobViewHeaderContainer-sc-1ijq9nh-0.QMbmP > div > div.headerstyle__JobViewHeaderLeft-sc-1ijq9nh-3.iGoBie > div.headerstyle__JobViewHeaderContent-sc-1ijq9nh-8.cjczkH > h2").innerHTML.trim();
    var place = document.querySelector("#__next > div.main-layoutstyles__Layout-sc-1w7iv1n-0.bAlkTK > main > div.search-results-tabstyle__SearchResultsTabWrap-sc-7efjjm-0.ISUdh > nav > section.search-results-tabstyle__SearchResultsTabContent-sc-7efjjm-6.gULgfj > div.splitviewstyle__SplitContainer-zpzpmg-0.LpUOW > div.splitviewstyle__JobContainer-zpzpmg-4.cgIrSK > div.headerstyle__JobViewHeaderContainer-sc-1ijq9nh-0.QMbmP > div > div.headerstyle__JobViewHeaderLeft-sc-1ijq9nh-3.iGoBie > div.headerstyle__JobViewHeaderContent-sc-1ijq9nh-8.cjczkH > h3").innerHTML.trim();
    var description = document.querySelector("#__next > div.main-layoutstyles__Layout-sc-1w7iv1n-0.bAlkTK > main > div.search-results-tabstyle__SearchResultsTabWrap-sc-7efjjm-0.ISUdh > nav > section.search-results-tabstyle__SearchResultsTabContent-sc-7efjjm-6.gULgfj > div.splitviewstyle__SplitContainer-zpzpmg-0.LpUOW > div.splitviewstyle__JobContainer-zpzpmg-4.cgIrSK > div.jobview-containerstyles__JobViewContainer-sc-16af7k7-1.kUYpek > div > div > div.descriptionstyles__DescriptionContainer-sc-13ve12b-0.bOxUQy > div").innerHTML;
    description = description.replace(/<[li>]*>/gm, '\n');
    description = description.replace(/<[^>]*>/gm, '').trim();
    var url = window.location.href;
    showCandidacyMenu(job, company, place, description, url);
}

function refreshExtension() {
    if (window.location.href.includes("monster.fr/emploi/") && document.querySelector("div.headerstyle__JobViewHeaderContainer-sc-1ijq9nh-0.QMbmP")) {
        if (possible_addCandidacy==0){
            candidacyFound();
            showEye();
        }
        possible_addCandidacy=1;
    } else {
        possible_addCandidacy=0;
        removeEye();
    }
}

var prevURL = '';
var possible_addCandidacy=0;
var possible_addContact=0;
refreshExtension();
setInterval(refreshExtension, 200);
listItem1.addEventListener("click", addCandidacy);
