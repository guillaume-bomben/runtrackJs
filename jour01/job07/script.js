function jourTravaille(date){
    var jours_feries = ["01-01-2024", "05-04-2024", "01-05-2024", "08-05-2024", "30-05-2024", "14-07-2024", "15-08-2024", "01-11-2024", "11-11-2024", "25-12-2024"];
    var jours_Semaines = [ "Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    
    var date = new Date(date);
    var jour = date.getDay();
    var mois = (date.getMonth() + 1 < 10) ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var jour_mois = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
    var annee = date.getFullYear();
    
    var date_str = jour_mois + "-" + mois + "-" + annee;
    
    if (jours_feries.includes(date_str)){
        console.log("Non, " + jours_Semaines[jour] + " " + jour_mois + "/" + mois + "/" + annee + " est un jour férié.");
    } 
    else if (jour == 6 || jour == 0){
        console.log("Non, " + jours_Semaines[jour] + " " + jour_mois + "/" + mois + "/" + annee + " est un week-end.");
    }
    else {
        console.log("Oui, " + jours_Semaines[jour] + " " + jour_mois + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

jourTravaille("2024-05-01");
jourTravaille("2024-05-13");
jourTravaille("2024-01-07");