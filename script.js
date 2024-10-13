// Velikost okna
// Zjistěte, jak velké je okno stránky a prohlížeče.
// 1.Pohrajte si s vlastnostmi window.innerWidth a window.innerHeight a zjistěte, jak velké je okno stránky. Vypište tyto hodnoty do stránky a zkuste stránky několikrát změnšít a zvětšit, Pozor, že je vždy potřeba udělat refresh stránky, aby se hodnoty změnily.
// 2.Vypište do stránky také vlastnosti window.outerWidth a window.outerHeight. Opět si pohrajte s velíkostí okna prohlížeče a pozorujte, jak se tyto hodnoty mění.

const siteWidth = window.innerWidth;
const siteHeight = window.innerHeight;
const browserWidth = window.outerWidth;
const browserHeight = window.outerHeight;

document.body.innerHTML += "<p>Šířka stránky: " + siteWidth + " px" + "</p>"
document.body.innerHTML += "<p>Výška stránky: " + siteHeight + " px" + "</p>"
document.body.innerHTML += "<p>Šířka okna: " + browserWidth + " px" + "</p>"
document.body.innerHTML += "<p>Výška okna: " + browserHeight + " px" + "</p>"


