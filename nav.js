function selectCurrentPage(){
    
    //Check all navbar options to see which is the current page
    let navLabels = ["Home", "AboutMe", "CV", "CodingProjects", "Dissertation", "LaboratoryReports"];

    for(let i=0; i<navLabels.length; i++){
        var page = document.getElementById(navLabels[i]);
        if(page.href == window.location.href){
            page.className = "current";
        }
    }
}
