function Etudiant(prenom,nom,date,numetudiant){
    this.nom = nom;
    this.prenom = prenom;
    this.date = date;
    this.numetudiant = numetudiant;
    this.presenter = function(){
        console.log("Je suis " + this.prenom + " " + this.nom
        + " et je suis née le  " + this.date );
        };
    this.age = function() {
        var age = getYear() - date[2] ;
        if(getMonth()> date[1]&& getDay() >= date[0]){
            return age;
        }
        else{
            return age--;
           }

    }     
}

var Personne = {
    nom: "",
    prenom: "",
    dateNaissance: [1, 1, 1977],
    init: function(nom, prenom, dateNaissance,taille){
    this.nom
    = nom;
    this.prenom
    = prenom;
    this.dateNaissance = dateNaissance;
    this.taille = taille;
    },
    direAge: function(){
        var age = getYear() - this.dateNaissance[2] ;
        if(getMonth()> this.dateNaissance[1]&& getDay() >= this.dateNaissance[0]){
            console.log("le personne appelé "+ prenom + nom + "a :"+ age + "ans") ;
        }
        else{
            age--;
            console.log("le personne appelé "+ prenom + nom + "a :"+ age + "ans") ;
        }
    }
}
    


var professeur = Object.create(Personne);
professeur.initProfesseur = function (nom,prenom,dateNaissance,etablissement){
    this.init(nom,prenom,dateNaissance);
    this.etablissement = etablissement;
}