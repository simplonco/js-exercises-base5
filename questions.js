var CreationTableauLangages = function () {
var langages = (["Html", "CSS", "Java", "PHP"]);
return langages;
}

var CreationTableauNombres = function () {
var nombres = ([0,1,2,3,4,5]);
return nombres;
}

var RemplacementElement = function (langages) {
langages[2] = 'Javascript';
  return langages;
}

var AjoutElementLangages = function (langages) {
langages.push("Ruby", "Python");
  return langages;
}

var AjoutElementNombres = function (nombres) {
nombres.unshift(-2, -1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
langages.shift();
  return langages;
}

var SuppressionDernierElement = function (langages) {
langages.pop();
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
var tableau = reseaux_sociaux_chaine.split(',');
  return tableau;
}

var ConversionTableauChaine = function (langages) {
var chaine = langages.join();
  return chaine;
}

var TriTableau = function (reseaux_sociaux) {
reseaux_sociaux.sort();
  return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
reseaux_sociaux.reverse();
return reseaux_sociaux;
}
