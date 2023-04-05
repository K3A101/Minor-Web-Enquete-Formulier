# Enquête voor Minor Web
In het vak van browser technologie ga ik een robuuste en toegankelijk website maken. Mijn website moet zo goed mogelijk kunnen werken op alle browser, alle schermen en in verschillende soorten contexten. Dus ik moet nadenken over responsive pagina's, goede kleurcontrasten, fallback lettertype, alt teksten bij afbeeldingen etc. Verder ga ik onderzoek doen over wat progressive enhancement is om een toegankelijk website te maken. Voor mijn eindopdracht ga ik een Enquete maken voor studenten die het  Minor web hadden gevolgd. De bedoeling is dat de studenten hun ervaring kunnen geven die ze hebben meegemaakt tijdens de Minor.

---
## Inhoudsopgave
- [Concept]()
- [Functionaliteiten van het prototype]()
- [Core functionaliteiten voor de enquête]()
- [Criteria van de eindopdracht]()
  - [1. Niet alle formulier velden laten zien]()
  - [2. Formulier validatie]()
  - [3. Data opslaan en later weer veder gaan]()
  - [4. Duidelijk aangeven waar je naat de vorige vragen kan gaan ov vraag kan overslaan]()
  - [5. Geen zichtbare radio buttons]()
  - [6. Het formulier moet darkmode en light mode hebben]()
- [Testen]()
  - [CSS uitzetten]()
  - [Javascript uitzetten]()
  - [Slechte internet verbinding]()
  - [Custom fonts uitzetten]()
  - [Kleur]()
  - [Muis/trackpad werkt niet]()
  - [Screenreader test]()
- [Browser]()
  - [Chrome]()
  - [Safari]()
  - [Firefox]()
  - [Samsung Internet]()
  - [PrinceXML]()
- [De lagen in een notendop]()
- [Bronnen]()





---

## Concept
- Link naar de Demo: https://k3a101.github.io/Minor-Web-Enquete-Formulier/


Ik heb een design gemaakt voor de enquête. Mijn enquête bestaat uit een pagina waar de studenten hun gegevens kunnen invullen zoals hun email, studentennummer, naam en achternaam. Maar ik denk bij een enquête hoeft je eigenlijk geen persoonlijk gegevens invullen, want anders krijg je geen eerlijke antwoord terug. Dus deze pagina moet eigenlijk optioneel zijn. Maar voor school doeleinden wilde ik de validatie laten zien die ik heb gemaakt met css. Als je op de volgende knop klikt, dan ga je naar de vragenlijst voor de vakken. Er is totaal acht vakken. Dus elke vak heeft een vragenlijst met vijf vragen.

De vragen:
1. Welke cijfer zou je deze vak geven?
1. Wat vond van je van het vak? En wat kan beter?
1. Was de uitleg makkelijk? Welke cijfer zou je geven aan de uitleg? Hoe hoger de cijfer, hoe makkelijk.
1. Was de lesstof makkelijk? Welke cijfer zou je geven aan de lesstof? Hoe hoger de cijfer, hoe makkelijk.
1. Hoe goed kon je het vak Web app From scratch begrijpen? Hoe hoger de cijfer, hoe beter.


![Homepagina](./images/home.png)

![Formulier per vak](./images/form-per-vak.png)

---
## Functionaliteiten van het Prototype
De enquête moet op bepaalde voorwaarde voldoen en die voorwaarden moeten  zo goed mogelijke werken op alle browser , op verschillende scherm grootte en ook wanneer    
 bepaalde features uitgezet zijn zoals cookies en Javascript. Onderaan staan de core functionaliteiten die  op elke moment zo goed moeten werken. 

### Core functionaliteiten voor de enquête - Zelf bedacht
- foutmelding, wat is er fout ingevuld wanneer je op de submit klikt
- Hoe je de foutmelding presenteert
- Niet alle informatie tegelijkertijd.
- Data in het formulier opslaan

### Browsers die ik ga gebruiken:
- Safari op desktop en Iphone
- Google Chrome desktop en mobiel
- Firefox desktop en mobiel
- Samsung Internet mobiel
- PrinceXML

## Nice To have

<details>
<summary>Nice to have voor de enquête</summary>

- Het formulier moet duidelijk zijn zonder css. 
- Dus labels, input en de submit knop moet kunnen werken.
- Gebruikers moet duidelijk zien wat voor soort informatie ingevuld is.
- Aangeven welke invoervelden verplicht is om in te vullen
- Formulier moet een goede contrast hebben tussen de voorgrond en de achtergrond.
- Placeholder tekst in de labels, zodat de gebruiker weet wat voor soort informatie ingevuld moet worden.
- Buttons om naar de volgende pagina te gaan moet werken.
- Aangeven waar je bent in het formulier.
- Gebruikers moeten weten dat ze de goeie informatie had hevuld
- Mensen die assistive technology moeten de enquete kunnen invullen
- Je kan met een toetsenbord de pagina navigeren en bedienen.
- Je kan het enquete invullen op kleinere schermen 

</details>


---

## Criteria voor de eindopdracht
Voor de beoordeling  werd er verschillende criteria's opgesteld die moet werken op alle genoemde browsers en ook zonder javascript. Ik ga per criteria grondig uitleggen hoe ik heb ze allemaal heb aangepakt.

### Criterias
- Zorg ervoor dat de gebruiker niet teveel formuliervelden in 1 keer ziet.
- Validatie: Zorg ervoor dat het formulier compleet wordt ingevuld. Geef duidelijke foutmeldingen. Bedenk zelf wanneer en hoe de validatie zal plaatsvinden.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.
- Duidelijke interface waarmee gebruiker terug kan naar vorige vragen. (En misschien ook om een vraag over te slaan?)
- Duidelijke interface die aangeeft waar je bent in het formulier
- Je mag geen zichtbare radio buttons gebruiken
- Het formulier moet een light mode en dark mode hebben.


## 1. Niet alle formuliervelden laten zien
Ik heb dit criteria opgelost door de vakken te verdelen  op een HTML pagina. Dus een vak heeft zijn eigen html pagina. Ik heb ze allemaal gekoppeld met `<a>` tag. Dus ik heb bovenaan een lijst met de html pagina's links. Het zorgt ervoor dat de gebruiker terug kan gaan of een vraag kan overslaan. Zonder deze oplossing blijft het een hele lange formulier. Dus deze manier kan ook zonder javascript werken. 

## 2. Formulier validatie
Bij formulier validatie wordt ervoor gezorgt dat de gebruiker de juiste informatie in het formulier invult. Belangrijk bij de validatie zijn dat je moet aangeven wat de gebruiker fout heeft ingevuld.  Bij de formulier validatie heb je te maken met progressive enhancement. Want in de Html heb je al ingebouwde formulier validatie. In de css heb je de `:valid` en`invalid` pseudo selectors en als meer vette foutmelding wil doen kan je javascript gebruiken.

### Formulier validatie met HTML 
Om je formulier te valideren met alleen de HTML moet je alvast je de juiste input types gebruiken zoals, `input type="email"`,`input type="radio"`,`input type="text"`,`input type="checkbox"`ect. Als je de juiste input gebruikt, kun je al ervoor zorgen dat er de juiste datatypes wordt ingevuld wordt.  Om een vraag verplicht te naken heb ik de   `required` atrribute gebruikt. Het zorgt ervoor dat je niet de formulier  kan versturen zonder de verplichte invoervelden in te vullen. 
Hier is een voorbeeld van mijn formulier:


```html
         <label for="voornaam">Voornaam*
                    <input type="text" name="voornaam" id="voornaam" aria-required="true" required
                        placeholder="Vul jouw voornaam in" aria-placeholder="Vul jouw voornaam in">
                        <span></span>
                </label><br>

                <label for="achternaam">Achternaam*
                    <input type="text" name="achternaam" id="achternaam" aria-required="true" required
                        placeholder="Vul jouw achternaam  in" aria-placeholder="Vul jouw achternaam in">
                        <span></span>
                </label><br>

                <label for="studentennummer">Studentennummer*
                    <input type="text" inputmode="numeric" name="studentennummer" required id="studentennummer" placeholder="Je nummer begint met 5.."
                        aria-placeholder="Studentennummer begint met 5" minlength="1" maxlength="9"  pattern="[5-6][0-9]{8}">
                        <span></span>
                </label><br>

                <label for="email">Email*
                    <input type="email" name="email" id="email" required placeholder="Vul hier jouw email in"
                        aria-placeholder="Vul hier jouw email in">
                        <span></span>
                </label>


```

In HTML heb je verschillende atributen die ervoor zorgt dat je de juiste data in het formulier moet invullen. Een voorbeeld van mij is bij de studentennummer. Het is verplicht om je studenten nummer in te vullen. Hiermee heb ik de `required` atribuut te gebruiken, verder heb ik ook de minimale en maximale  waarde die je kan invullen gebruikt met de `minlength` en `maxlength`. Met deze twee atributen wordt ervoor gezorg dat je de juiste aantal nummers invult. De data wordt niet geldig totdat je de studentennummer had ingevuld. 

Belangrijke atrributen bij HTML die ik heb gebruikt.
- `placeholder`: Je geeft visueel aan wat voor soort informatie je moet invullen
- `type`: Geeft aan voor soort invoerveld het is 
- `required`: Maakt de input verplicht om in te vullen. 
- `minlength`: minimale waarde die ingevuld moet worden;
- `maxlength`: maximale waarde die ingevuld moet worden.

## Formulier valideren  met CSS
Ik heb ondekt dat je met css foutmeldingen kan maken met de `:valid `en `:invalid` pseudo classes. Maar de enige nadeel van deze psuedo classes zijn dat ze per direct aan zijn voordat de gebruiker iets mee doet. 


### Met de :invalid selector

![invalid data](./images/invalid-data.png)

```css
/* Wanneer de invoerveld ongeldig is dan krijgt die oranje rand */
input[type="email"]:invalid,
input[inputmode="numeric"]:invalid {
    border: 1px solid var(--invalid-form-data-kleur);
    border-bottom: 4px solid var(--invalid-form-data-kleur);
}
```
Ik wilde een effect met css maken waarvan de gebruiken een melding krijgt wanneer ze niks in het verplichte formulieren had ingevuld. 
Ook heb ik een bericht toegevoegd "vul maar iets in" Ik heb een `span` geplaats na de input.En met de sibling selector  en daarna met de `::after` selector heb ik in de content property de tekst geplaatst. 

```css
/* Zonder :has() */
#studentgegevens label input[type="text"]:invalid+span::after {
    content: 'Voer maar wat in. ';
    position: absolute;
    transform: translateY(.5em);
    font-size: 14px;

}
```

### Met de valid Selector 
#### In chrome
![Valid invoerveld](./images/valid-data.png)

Hier heb ik de `:valid` selector gebruikt. Deze state wordt geactiveerd wanneer de gebruiker de juiste informatie heb ingevuld. Ik heb daarbij een motivatie bericht (lekker bezig) toegevoegd met de `content` property in de after selector. Maar hier heb ik wel de has gebruikt. Voor firefox die geen has selector ondersteund zie je alleen maar de vinkje. 

```css

#studentgegevens label:has(input[type="text"]:valid)::after {
    content: 'Lekker bezig';
    color: var(--valid-form-data-kleur);
    position: absolute;
    font-weight: bold;
    transform: translateY(2em);
    right: 5em;
}


#studentgegevens label:has(input[type="email"]:valid)::after {
    content: 'Lekker bezig';
    color: var(--valid-form-data-kleur);
    position: absolute;
    font-weight: bold;
    transform: translateY(2em);
    right: 5em;
}

```


#### In Firefox
![Valid Firefox](./images/valid-firefox.png)
Omdat in firefox geen has ondersteund zien de gebruiker niet de lekker bezig zoals bij de chrome browser. Maar ze weten wel dat ze de juiste informatie hadden ingevuld.

```css

#studentgegevens label input[type="text"]:valid+span::after {
    content: '\2713';
    color: var(--valid-form-data-kleur);
    position: absolute;
    font-weight: bold;
    transform: translateY(-2.3em);
    right: 3em;
}

#studentgegevens label input[type="text"]:invalid+span::after {
    content: 'Voer maar wat in. ';
    position: absolute;
    transform: translateY(.5em);
    font-size: 14px;

}

```


### Formulier valideren in javascript


---

## 3. Data opslaan en later weer verder gaan
In mijn prototype is het mogelijk om met het enquête op een andere moment afmaken en verder gaan waar je bent gebleven. Ik heb gebruikt gemaakt van de localstorage. Het localstorage is een client-side database vanuit de browser waar de gebruikersdata kan opslaan. Je kan de data opslaan en ook ophalen. Hiermee heb ik javascript gebruikt. 

Maar het enige nadeel is dat de localstorage niet beveiligd is. In mijn enquête vullen de studenten  hun persoonlijke gegevens in. Maar het blijft gewoon zichtbaar. Dus een andere alternatief vanaf de client-side zou zijn op de indexedDB of Cookies sessions.

### Hoe werkt het?
Als de gebruiker iets invoert wordt de name en de value van de data opgeslagen. Om de data naar de localstorage te sturen gebruik ik de `.setItem()` methode. De name atribuut moet duidelijk zijn zodat je weet wat voor soort data het erover gaat. Verder om de data op te halen had ik de `.getItem()` gebruikt. 


```javascript

const formInputs = document.querySelectorAll('input[type="text"] , input[type="email"]');
function saveFormInputsToLocal() {
    // Loop alle form input en stuurt de waarde naar de localstorage
    formInputs.forEach(input => {
        let inputName = input.name; //Pakt de naam van de input element
        let inputValue = input.value; // Pakt de recente gevulde waarde
        localStorage.setItem(inputName, inputValue); // De waarde in de localstorage opslaan.
       
    });
}
// Haal al de opgeslagen data vanuit de localstorage en zet het terug in het formulier

function loadFormInputToLocal() {
    formInputs.forEach(input => {
        const inputName = input.name;
        let storedValue = localStorage.getItem(inputName);
        if(storedValue){
            input.value = storedValue
        }
    });
}

// Eventlistener toevoegen bij alle invoervelden
formInputs.forEach(input => {
    input.addEventListener('input', saveFormInputsToLocal);
});

// De functie roepen
loadFormInputToLocal();

```
Hier selecteer ik alle inputs vanuit de html, per input pak ik de value en de name atribuut en zetten ze in de localstorage. Daarna haal ik alle waarde vanuit de localstorage met de `.getItem() `methode.


## Wat zou gebeuren met het data als javascript uit staat?
Wanneer javascript uitstaat, kunnen we geen localstorage gebruiken want het is een ] WEB API. Dus wat we kunnen doen is een server-side component en database toevoegen. Voor dit project heb ik geen backend toegevoegd, ik ga alleen opschrijven hoe de server zou moeten werken. Dus als de gebruiker het formulier invult, wordt de data opgeslagen in de database met behulp van Node.js. Node.js is een onafhankelijk server omgeving. Het gebruikt server-side javascript.

Ten eerste moet je node en npm intalleren. Maar we gaan ervan uit dat die geinstalleerd zijn. Als die geinstalleerd moet je eerst een server maken. 


### Dingen die je nodig hebben voor je server component
- Express.js 
- Body-parser express middleware
- Cookie-parser express middleware
- Cookies sessions express middleware 
- MongoDB Database 
- Template engine om het formulier te laten zien.
- Template engine om de bevestiging pagina te laten zien

### Stappen
1. Nodejs en Npm installeren
2. package.json installeren met `npm init`
3. Express installeren met npm `npm install express`
4. De express server opstellen
5. De express middleware installeren zoals de bodyparser, cookie-session, moongoose etc. 
6. URL Endpoints maken waar de data opgeslagen wordt,
7. De express modlues gebruiken


### Data opslaan in de server
Je heb alles geïnstalleerd en heeft een server. Hoe verder. Voor het formulier op de HTML Pagina moet een `POST` methode toevoegen zodat die data verstuurd kan worder naar de server. In de server maak je een get request functies met de `body-parser` functionaliteit. Dus de informatie die de gebruiker had ingevuld wordt verstuurd in de MongoDB Database naar een URL route/endpoint. Door de body-parser wordt de informatie opgeslagen in een `JSON` formaat. 


### Data in het formulier laten staan 
Stel je voor dat gebruiker later met het enquête wil doorgaan. Hoe zou dat werken met een server component. Hiermee gebruik je de `express-session` middleware. Als de gebruiker terug komt dan ga de server kijken naar de id van de user session  in de  database en als hij een match vind dan  geef de server de bijbehorende ingevulde data van de ID weer op het formulier.


### Wat geeft de Server weer als de gebruiker helemaal klaar is ?
Als de gebruiker klaar is dan krijgt de gebruiker een bevestiging pagina terug.
![Bevestiging pagina]()

In de server zou ik een POST route toevoegen die naar de `/formulier-bevestiging`. En dan deze bericht terug geven aan de client: '*Bedankt voor het invullen van het enquête*'. Hier is een verkorte versie van wat ik bedoelde. 

```html
<!-- formulier.html -->

<form action="/formulier-bevestiging" method="POST">
<!-- De enquête -->

</form>


```

```javascript
// app.js
 app.post("/formulier-bevestiging", (req, res)=>{
    // Code waar de data geatuurd wordt naar de database met body-parser
    res.send('Bedankt voor het invullen van het enquête!)
    // of
    res.render('formulier-bevestiging')

 })
```

```html
<!-- Formulier bevestiging.js -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/style.css">
    <title>Bevestiging</title>
</head>
<body>

    <main>
        <h1>Bedankt voor het invullen van deze enquête!</h1>
        <p>Wij hebben jouw antwoord goed ontvangen.</p>
    </main>
</body>
</html>
```



---

## 4. Duidelijk aangeven waar je naar de vorige vragen kan gaan of vraag kan overslaan
In mijn prototype is het mogelijk om naar de vorige of volgende vak te gaan. Er zijn twee manieren. Je kan onderaan bij de vorige en volgende knop naar een andere vak of onderdeel gaan. Ten tweede heb ik een menu bar gemaakt waar je een lijst met links krijgt waar je een vak kan kiezen.
En dus je kan ze ook overslaan als je niet wil invullen.

![Navigatie](./images/progressbar.png)
![Knoppen](./images/volgende-button.png)

Ik heb een class toegevoegd waar je een andere opmaak kan geven terwijl je op de volgende pagina bent.  Dit was makkelijk omdat ik de enquête had verdeeld in verschillende pagina's. En aan elkaar gekoppeld met links. Deze manier geef ook aan waar je bent in het formulier. 


---

## 5. Geen zichtbare radio buttons
![radio Buttons](./images/form-per-vak.png)
In het enquête moet je per vak de lesstof, uitleg en eigen inzicht beoordelen van een schaal van 1 tot 10. Bij semantische HTML, moet je radio Buttons gebruiken. Maar Als je css toevoegd moet de standaard vorm van radio buttons weg. 

![radiobuttons in html](./images/radio-html.png)
Zonder css zijn alle radio buttons onder elkaar in een lijst gegroepeerd  met daarbij de cijfers. Met css heb ik de radio buttons onzichtbaar gemaakt met `appearance: none;` en `opacity: 0;`. Verder heb ik de lijst bullet points weggehaald en `display: flex;` om de radio buttons naast elkaar te plaatsen. 

```css
input[type="radio"] {
    position: absolute;
    appearance: none;
    opacity: 0;

}

``` 

---

## 6. Het formulier moet dark mode en light mode hebben
De laatste criteria voor de formulier is dat het formulier moet een donker en lichte versie hebben. Hier is ook sprake van progressive enhancement. In de html heb je de mogelijkheid om de modus te zetten in de meta tag. De `<meta name="color-scheme" content="light dark">` plaats je bovenaan in de head element. Dan genereer de browser de standard versie van dark mode voor je. Hieronder zie je een voorbeeld.


### In HTML 
![lightmode](./images/html-light.png)
![darkmode](./images/html-dark.png)


Om de default mooier te maken heb ik de @media features van css gebruikt. Voor de Css heb ik  verschllende custom properties voor de kleurpallete gemaakt in mijn `:root`. De custom properties zijn handig want dan moet ik een keer de kleur of waarde aanpassen en die wordt overal aangepast. In nmijn root heb ik mijn standaard kleurpalette gemaakt voor de lightmode. Voor de dark mode heb ik media queries `prefers-color-scheme: dark` gebruikt. Dezelfde custom properties in mijn normale root heb ik in de media queries geplaats, maar alleen de kleurcodes heb ik verandert. Dus een soort een tegenovergestelde kleurpalette. 

```css

:root {
    /* Lettertype */
    --paragraaf: 'interstate', 'Arial', 'Helvetica', sans-serif;
    --kopjes: 'Open Sans', 'Arial', 'Helvetica', sans-serif;
    --font-size-paragraaf: 1em;
    --font-size-kopje: 2em;

    /* Kleurpalette */
    --legend-kleur: #370152;
    --main-kleur: #df9ff9;
    --form-achtergrond-kleur: #f1e9f4;
    --achtergrond-kleur: white;

    --button-kleur: #370152;
    --tekst-kleur: #261e29;
    /* --legend-kleur:  */

    /* Form validatie */
    --valid-form-data-kleur: mediumseagreen;
    --invalid-form-data-kleur: lightsalmon;
    --radio-button-checked: #261e29;
    --input-kleur: #f6f6f6;
    --label-kleur: #261e29;
    --button-kleur-achtergrond: #370152;
    --button-kleur-tekst: #f6f6f6;
    --link-kleur: #261e29;
    --current-link: #f1e9f4;
    --niet-current-link: #f1e9f488;
    --button-andere-state-achtergrond: #df9ff9;
    --button-andere-state-tekst: #370152;
}


/* Dark mode */
@media (prefers-color-scheme: dark) {

    :root {

        /* Kleurpalette */
        --main-kleur: #df9ff9;
        --form-achtergrond-kleur: #592a6b;
        --achtergrond-kleur: #261e29;
        --button-kleur-tekst: #f6f6f6;
        --button-kleur: #370152;
        --tekst-kleur: rgb(246, 246, 246);
        --link-kleur: #261e29;
        --input-kleur: #ad84b877;
        --label-kleur: rgb(246, 246, 246);
        --radio-button-checked: #261e29;
        --placeholder-kleur: #261e29;
        --button-kleur-achtergrond: #df9ff9;
        --button-kleur-tekst: #261e29;
        --legend-kleur: #df9ff9;
        /* --niet-current-link: #df9ff991;
        --current-link: #df9ff9; */
        --current-link: #f1e9f4;
        --niet-current-link: #f1e9f488;
        --valid-form-data-kleur: rgb(106, 225, 160);
        --button-andere-state-achtergrond: #370152;
        --button-andere-state-tekst: #f6f6f6;
    }
}

/* Voor dark mode en voor desktop */
@media(prefers-color-scheme: dark) and (min-width: 40em) {
    :root {
        --niet-current-link: #df9ff991;
        --current-link: #df9ff9;
    }

}

```

### In CSS
![css](/images/lightmode.png)


## Progressive enhancement
- Layout
- Positionering
- Fonts
- Form Validatie


---
# Testen
Het volgende onderdeel van dit procesverslag is een testverslag met de bevindingen die ik heb opgedaan tijdens mij onderzoek van bepaalde browser functionaliteiten. 

## Geteste features
### CSS Uitzetten
De eerste test die ik heb gedaan. Is in mijn developer tool de css uitzetten. In het geval dat de css niet wordt geladen voor een of andere manier, dan krijg je alleen de HTML pagina te zien. Je kan nog steeds het formulier invullen en naar de volgende pagina gaan. 

Dingen die **niet** mogelijk zijn:
- Geen opmaak
- Geen kleur of feedback van de gebruik input
- Radio buttons zichtbaar en onder elkaar 
- De progres menu op Mobiel wordt zichtbaar en is onder elkaar te zien.

Dingen die **wel** mogelijk zijn:
- Vragen overslaan en doorgaan naar het volgende vak.
- Formulier invullen
- Feedback krijgen met de fallback foutmeldingen van de browser
- De standaard dark en licht modus van de browser.


### HTML paginas
![Homepagina in darkmode](images/html-dark.png)
![Vakkenpagina in lightmode](images/html-vak-dark.png)


![Homepagina in darkmode](images/html-light.png)
![Vakkenpaginas in lightmode](images/html-vak-light.png))


### Javascript uitzetten
De browser bestaat op een groot gedeelte uit javascript. Javascript zorgt ervoor dat je website veel interactiever en dynamisch wordt. Maar er zijn situaties waar sommige browser geen javascript ondersteund bijvoorbeeld lynx of mensen die standaard javascript uit hebben of mensen met apparaten die niet zo goed kan functioneren met javascript. Hoe kunnen groepen het Enquete invullen zonder javascript. 

Wat is **niet** mogelijk als javascript uitstaat:
- Data wordt niet opgeslagen in de localstorage van de browser
- Geen Javascript formulier validatie 
- Mijn textarea geeft geen feedback als de gebruiker iets intoets. 


### Een oplossing 
Voor de formulier validatie maak ik geen zorgen want de browser zelf heeft een fallback en je krijg feedback terug als je het formulier niet goed had inegevuld. Om de fallback beter te maken kan ik met css de `:invalid`, `:valid`, `:has()` sibling selector(`~` `+`) en `::after` selectoren gebruiken. 

---
### Slechte internet verbinding
Een andere scenario die ik heb over nagedacht is een gebruiker die het formulier wil invullen en maar in de trein zit bijvoorbeeld en heel trage internetverbinding heeft. Wat dan? Om dit te testen heb ik in mijn netwerk tab in de developer tool, het netwerk op slow 3g geplaatst. Wat opvallend is dat het duurt langer om naar de volgende pagina te gaan. In firefox als ik de netwerk op het laagste optie zet, dus de gprs dan duurt het langer om het css te laden.  Dus misschien krijgt de gebruiker dan eerst een puur html pagina zonder opmaak te zien. Maar ze kunnen het formulier invullen. Wat ik heb gemerkt bij slechte internet verbinding is dat de custom fonts later word geladen, dus de gebruiker ziet de fallback fonts Arial die ik heb toegevoegd in de css bestand.

![slow internet](images/slow-3g.png)

### Een Oplossing
En mogelijke oplossing voor dit probleem zou zijn is het formulier progressive web app maken. Met daarbij een service worker en manifest.json bestand. En alsnog de data kun invullen en in de browser cachen. Maar dit is meestal iets dat je niet kan controleren.

---
### Custom fonts uitzetten
Om mijn interface wat mooier te maken heb ik custom fonts geimplementeerd. Er zijn verschillende manieren om dat de doen. Je kan`@font-face` gebruiken in de css en vanuit je lokale bestand installeren. Of fonts service gebruiken en die koppelen in de head van je html pagina met de `<link>` tag. Ik heb de tweede optie gebruikt.

```html
<head>
    <!-- In de html -->
 <!-- Fonts -->
    <!-- Opens Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">

    <!-- Interstate -->
    <link rel="stylesheet" href="https://use.typekit.net/pxn6jyw.css">
    <meta name="color-scheme" content="light dark">
</head>
```

De twee font services die ik heb gebruikt zijn google fonts en adobe fonts. Ik koppel ze met de link tag in mijn html. Daarna met het CSS  `font-size` property, plaatst ik de lettertype op mijn webpagina. 

```css
/* In de css */
body {
    background-color: var(--achtergrond-kleur);
    font-family:'interstate', 'Arial', 'Helvetica', sans-serif;
    font-weight: 400;
    margin: 1em;

}

```
Ik heb achter de custom-fonts, verschillende fallback font toegevoegd, in geval dat de browser een van hun ondersteund pakt die gewoon de volgende.

     font-family:'interstate', 'Arial', 'Helvetica', sans-serif;

---

### Kleur
Niet iedereen kan kleur zien zoals iedereen. Dit fenomeen heet kleurenblindheid. Wanneer je een website ontwerp moet je rekening houden met mensen die kleurenblind zijn.

Ik moet rekening houden met:
1. Niet volledig afhanelijk zijn met kleur. In het normale situatie als je iets verkeerd in het formulier invult, dan zie je een rode rand. Maar voor mensen die niet rood kunnen zien, weten niet dat ze iets fout had  ingevuld. Dus het beste praktijk om een foutmelding aan te geven met duidleijk oplossing. 
2. Genoeg contrast hebben tussen de componenten.

### Hoe kan ik de kleurcontrast testen?
Er zijn verschillende manieren om kleurcontrast te testen. 
Wat ik heb gebruikt zijn:
- Color filters in mijn windows instellingen
- Color contrast analyzer (cca)

Volgens de WCAG (Web Content accessibilty guidelines) moet de kleurcontrasten tenminste een contrast ratio hebben van 4.5:1. 
Ik heb zelf bepaalde test gedaan op mijn webpaginas met de Color contrast checker. Hier zijn een aantal voorbeelden. 

Achetrgrondkleur van het formulier en de tekst
![test op dark mode](images/tekst-achtergrond.png)
Achtergrondkleur van de button en de tekst
![test op dark mode](images/tekst-button.png)
Achtergrondkleur van het formulier container en de tekst.
![test op light mode](images/light-modus-contrast.png)



### Muis/Trackpad werkt niet
Zonder een muis/trackpad is een andere manier van een bedienen met een toetsenbord. Daarbij het volgende: 

- Tab: De focus moet door alle interactieve elementen op de pagina bewegen
- Shift + Tab: Hetzelfde als de Tab-toets, maar dan in omgekeerde volgorde
- Enter/Return: Volgt een link, activeert (drukt op) een knop
- Spatiebalk: Wisselt de waarden van selectievakjes, activeert knoppen
- Pijltoetsen: Scrollen door de inhoud, verplaatsen/selecteren van radioknoppen binnen een groep, soms verplaatsen tussen interactieve menu-items of tabbladen.


Op mijn project kan je ook het formulier bedienen zonder een muis. Wanneer je met tab het pagina navigeert, wordt de focus state geactiveerd. Standaard heeft de browser al een focus state. Dat is de outline. Om de outline mooier te maken heb ik de `:focus` psuedo selector gebruikt waar ik een dashed border rondom de interactieve elementen geeft.

De interactieve elementen zijn: 
- `<input> `
- `<a href="#">`
- `<button>`

#### Wat nog niet helemaal werkt
- Ik kan niet de op de radio button focussen als je tab.
- Kan geen in tabindex toevoegen
- Met tabindex kan je niet vanuit de optie van de radio buttons groep kiezen
```css

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline-style: dashed;
    outline-color: var(--main-kleur);
    outline-width: 3px;

}
```
![focus state](images/focus-state.png)



### Screenreader test
De laatste test die ik heb gedaan is de screenreader test. Zo'n test is belangrijk hiermee, weet je zeker dat je semantische html had geschreven. Verder maak ik het enquête toegankelijk voor slechtzienden, mensen die blind zijn maar ook mensen die tijdelijk niet aan de scherm kan kijken.

Om de test te doen heb ik Narrator aangezet. Narrator is de screenreader van windows. Het was te vinden in mijn accessibility instellingen.

### Bevindingen
#### Studentgegevens
- Het leest de lijst met links en zegt daar achter waar op de lijst ze staan.
- Het studentgegevens formulier wordt te snel gelezen. Soms hoor je de feedback 'lekker bezig' ook. 
- De screen reader benoemt welke input veld required/verplicht is. 
- De screenreader voorleest het hele formulier en ook de placeholder in, terwijl de gebruiker al data daar hebben staan

#### Vak formulier
- In het vakken formulier is iets meer volgorde en structuur.
- Het screen reader leest al de links voor en dan gaat hij naar het formulier.
- Verder leest hij de eerste level heading en dan de tweede level heading.
- De legend wordt niet als eerste voorgelezen terwijl op de pagina wel als eerste staat. 
- Verder gaat die door naar de volgende vragen en leest de textarea met de placeholder.
- Vervolgens zegt de lijst van radio buttons met daarin de waardes. 
- Als laatste worden de buttons om naar de volgende pagina te gaan ook voorgelezen. 



### Fouten om te voorkomen
- Ervoor zorgen dat alle radio buttons die bij elkaar horen dezelfde name atribuut hebben. Anders beschouwt de screenreader die als een aparte component. 
- Eerst werd de required twee keer gelezen. Want ik had ook aria-required en de required atribuut naast elkaar dus als je alleen het required atribuut houdt, dan is het genoeg.
- Ik heb de studentgegvens onderdeel asteriks, maar die wordt ook door de screenreader voorgelezen. 
---
## Browsers
Als onderdeel van dit project moest ik mijn prototype op verschillende browser testen. Browsers die ik heb gebruikt zijn, chrome, safari, Samsung Internet, Safari IOS en firefox. De bedoeling hiervoor is dat sommige browser niet alle functionaliteiten ondersteunen. En het criteria is dat het formulier zo goed moeglijk werkt. 

## Chrome
Chrome is mijn meest gebruikte test website alles wat ik wil bereiken mt dit project wordt ondersteund. Er was niks aan te merken waarvan ik een oplossing moest bedenken. 
![op chrome](images/form-per-vak.png)

### Bevindingen
- `:has()` selector wordt ondersteund
- Formulier validatie met css werkt zoals het hoort
- Het ziet er goed uit op mobiel
- Dark mode en donker modus wordt ondersteund
- Data wordt opgeslagen in local storage

---

## Safari
Het volgende browser waar ik heb getest is op Safari. Safari is een browser voor apple apparaten. Ik heb een ipad dus ik kon ook het formulier op Safari testen. Verder heb ik aantal studenten met een Iphone gevraagd om mijn formulier op hun mobiel te testen. 
![safari mobiel](images/safari-mobiel-2.jpg)
![safari mobiel](images/safari-mobiel-3.jpg)
![Radio button error](images/radio-button-error-safari.jpg)

### Bevindingen
- Het formulier zag er goed uit op kleinere schermen
- Het formulier validatie van css was nog te zien
- De browser ondersteund de :has() selector dus ik kon de menu openen
- Safari kan ondersteund de appearance property niet dus toe ik hem opende kon ik nog steeds de radio buttons zien, dus in mijn css heb ik ook opacity 0 gegeven aan de radio buttons
- Donker modus en licht modus werkt prima 
-  Data wordt opgeslagen in local storage
- De focus state outline stijl klopt niet helemaal. Ik heb de dashed optie gebruikt dus het moet wel komen te staan

## Firefox
Het volgende browser waarmee ik heb getest is de Microsoft Firefox. In de browser moest ik wel een beetje nadenken over hoe ik bepaalde dingen met css ging doen in plaats van javascript. Want sommige css properties worden niet ondersteund.

![firefox](/images/firefox.png)
![firefox](/images/valid-firefox.png)

### Bevindingen
- Het formulier zag er goed uit op kleinere schermen
- Het formulier validatie van css was nog te zien, maar de `lekker bezig` gedeelte niet
- De browser ondersteund de :has() selector niet dus ik kon de menu niet openen, dus ik gebruik als alternatief de sibling selector `~`.
- Donker modus en licht modus werkt prima 
- Data wordt opgeslagen in local storage


## Samsung Internet
Samsung Galaxy is een browser voor Samsung apparaten. Ik beschik van een samsung telefoon dus het was voor mij mogelijk om het formulier te testen. 
![samsung internet](/images/samsung-internet.jpg)
![samsung internet feedback](/images/samsung-internet-feedback.jpg)
![samsung internet dark mode](/images/samsung-internet-dark.jpg)

### Bevindingen
- `:has()` selector wordt ondersteund
- Formulier validatie met css werkt zoals het hoort
- Het ziet er goed uit op mobiel
- He ondersteund dark mode een beetje maar het pakt  niet vanuit mijn css. De browser zel zelf zijn eigen versie van dark mode en overschrijf mijn color scheme in mujn css.
- Data wordt opgeslagen in de local storage


## PrinceXML
Als laatste moest ik een obscure browser kiezen. Ik heb gekozen om mijn prototype te testen op princeXML. PrinceXML is een browser waar je HTML pagina's en CSS kan omzetten in een PDF bestand. Ik heb de gratis versie geinstalleerd op mijn windows computer en dan met de terminal een pdf output ervan gemaakt. Op hun site hebben ze ook een generator waarvan je html pagina's en css bestanden kan ingooien. Daarna genereer de browser een pdf bestand voor je.

## Test 1
Dit is mijn eerste test met princeXML. De opmaak van de enquête klopte niet helemaal. 
![test 1 - Home](/images/test-1.png)
![Test 1 - Vak](/images/test-1.1.png)


## Test 2

### Stap 1: HTML pagina toevoegen
![Html pagina ingooien](/images/stap-1-princexml.png)

### Stap 2: CSS stylesheet toevoegen
![Css stylesheey ingooien](/images/stap-2-princexml.png)

### Stap 3: PDF output
![PDF Output](/images/stap-3-princexml.png)
![PDF](/images/test-3.jpg)


## Test 3
![PDF](/images/test-4.png

### Wat niet wordt ondersteund 

```terminal

prince: scripts/script.js: error: can't open input file: No such file or directory
prince: style.css:43: warning: unknown media feature 'prefers-color-scheme'
prince: style.css:71: warning: unknown media feature 'prefers-color-scheme'
prince: style.css:271: warning: unknown pseudo-element '::placeholder'
prince: style.css:301: warning: unknown pseudo-element '::placeholder'
prince: style.css: warning: unsupported properties: gap, place-items

```

Vervolgens krijg je te zien welke css properties niet ondersteund wordt:
- Ik moest eerst de path van mijn css en javascript een beetje aanpassen want anders doet het niet goed. Ik had mijn script en sheets in een bestand
- PrinceXML ondersteund niet de `prefers-color-scheme` media feature dus het formulier is alleen te zien in lightmode. Op zich is dat niet erg want je kan nog steeds het formulier invullen.
- Door de grootte van het A4, kan je de menu niet zien om het progress te zien. Anders moet ik bij de media queries een beetje aanpassen.
- Het kan wel werken met custom properties dus mijn kleuren us te zien.
- Mijn custom fonts zijn goed geladen
- Je kan het formulier invullen
- Grid properties  zoals gap en place-items worden niet ondersteund door princeXML. 
- Links gaat naar de juiste pagina, maar open alleen in de browser.

![test2.2](/images/test-2.2.png)
![test2.2](/images/test-2.3.png)
---
# De lagen in een notendop
Uiteindelijk heb ik mijn formulier gemaakt met de browser technologieën en functionaliteiten. De core functionaliteiten van het formulier waren dat de gebruiker hun informatie in het formulier kunnen invullen en versturen, maar ook moet  de gebruiker weten wat hij fout en goed heeft ingevuld dus  vorm validatie en feedback. Al deze functionaliteiten heb ik in drie verschillende lagen gemaakt. 

## Functionele laag
In de functionele laag heb je de semantische HTML structuur. Voor een formulier moet je de `form` tag gebruiken. Om gegevens in te vullen gebruik je de `input` element. Elke onderdelen van het formulier die iets met elkaar te maken hebben gaat in een `fieldset`.  

In de functionele laag kun je alsnog  het formulier valideren. Met formulier validatie zorg je ervoor  dat de gebruiker de juiste gegevens invullen. In de HTML moet je de juiste input types gebruiken. In mij geval heb ik de input type email gebruikt waar gebruikers hun email moet invullen. Waar getallen ingevuld moet worden gebruik ik input type num of tel. En zo blijft het. Het gevolg zijn dat bij mobiel de juiste toetsenbord naar voren komt, maar ook wordt het duidelijker voor mensen die een screenreader gebruiken. 

### Gedaan in de functionele / reliable laag
- HtML structuur met formulier elementen
- Onderdelen met elkaar groeperen met `fieldset` en `legend`
- HTML formulier validatie (juiste input types, required atribuut etc.)
- Progressive disclosure door elk vak in een apart HMTL bestand te zetten
- Pagina's linken met elkaar door `<a>` tags te gebruiken. 
- Foutmeldingen als de gebruiker iets verkeerd had ingevuld
- Kan het formulier in het donker of licht modus zien. `<meta>`

## Usuable laag 
In de usuable laag heb ik nagedacht over de ontwerppatronen die ik gebruikt. Bij formulier moet de labels onder elkaar komen te staan anders moet je veel met je ogen scannen. Vervolgens heb ik rekening gehouden met consistentie, bijvoorbeeld alle buttons hebben dezelfde vorm en kleur, input velden hebben dezelfde kleur. Alle pagina's zijn  het zelfde enz. 

In de ze laag kwam een progressive enhancement, de opmaak. Van een normale html pagina naar een mooie opgemaakte pagina's. 

### Gedaan in deze laag
- Kleur toegevoegd met aparte kleur voor donkere en licht modus
- Custom fonts toegevoegd boven het systeem fonts
- Onzichtbare radio buttons 
- Andere focus, hover state
- CSS vorm validatie met `:valid` en `:invalid` psuedo classes
- Foutmelding geven met css; `::after`. 
- Formulier kan ook ingevuld worden met kleinere schermen

## Pleasurable laag
Het is de deel waar gebruikers een goede gevoel krijgt wanneer hij de site gebruikt. Meestal is de site heel mooi, met veel animatie en transities. Voor mij is de javascript een enhancement. Want met javascript kunnen gebruikers data in het formulier opslaan en later verder invullen. Ook zijn er meer persoonlijke feedback die verstuurd wordt naar de gebruikers. 

### Gedaan in deze laag
- Javascript vorm validatie
- Feedback teruggeven als de gebruiker 
- Data worden in het formulier opgeslagen met LocalStorage

---

## Wat zou ik anders doen!
Als ik meer tijd zou hebben zou ik de volgende dingen doen:
- Ik zou een server component maken om de data in de server op te slaan
- Ik zou een introductie pagina maken met een korte inleiding over de enquête met daarbij een start knop. 
- De studentgegevens formulier zou ik als een optionele opties hebben en aan het einde van het formulier doen voor de bevestiging.
- Ik zou meer vloeinde transities toevoegen als je van pagina's verandert.

---
# Bronnen
- Degges, R. (2018, 30 januari). Please Stop Using Local Storage. DEV Community. https://dev.to/rdegges/please-stop-using-local-storage-1i04
- Will node.js work if JavaScript is disabled? (z.d.). Quora. https://www.quora.com/Will-node-js-work-if-JavaScript-is-disabled
- Bland, J. (2019, 7 mei). Using Node.js & Express.js to save data to MongoDB Database. Medium. https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073
- Node.js - Disabling Browser’s Javascript. (z.d.). Stack Overflow. https://stackoverflow.com/questions/28278630/node-js-disabling-browsers-javascript
- Figueroa, R. (2022, 30 maart). How to send data from a form and receive it with Express.js. Medium. https://medium.com/geekculture/how-to-send-data-from-a-form-and-receive-it-with-express-js-3c03af6275b2
- Express session middleware. (z.d.). https://expressjs.com/en/resources/middleware/session.html
- Koldovskyy, V. (2017, 5 mei). Save form data to MongoDB with NodeJS. programming mentor. https://programmingmentor.com/post/save-form-nodejs-mongodb/
- Omisola, I. (2022, 9 juli). Session Storage vs. Local Storage: What Are the Differences? MUO. https://www.makeuseof.com/session-local-storage-differences/
- Can I use. . . Support tables for HTML5, CSS3, etc. (z.d.). https://caniuse.com/
- Prince - Try Prince. (z.d.). https://www.princexml.com/try/
- Client-side form validation - Learn web development | MDN. (2023, 12 maart). https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript
- Change default HTML input validation message. (z.d.). Stack Overflow. https://stackoverflow.com/questions/63491564/change-default-html-input-validation-message
- GeeksforGeeks. (2023, 15 februari). How to get value of selected radio button using JavaScript. https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
- A. (2021, 5 december). Get value of selected radio button with JavaScript/jQuery. Techie Delight. https://www.techiedelight.com/get-value-of-selected-radio-button-javascript/
- HTML DOM Input Radio value Property. (z.d.). https://www.w3schools.com/jsref/prop_radio_value.asp
- WebAIM: Keyboard Accessibility - Tabindex. (2020, 10 november). https://webaim.org/techniques/keyboard/tabindex
- Problematic Combinations for Color Deficient Vision. (2016, 27 maart). Accessibility at Penn State. https://accessibility.psu.edu/color/colorvisiondetails/
- Express cookie-session middleware. (z.d.). https://expressjs.com/en/resources/middleware/cookie-session.html
- Khare, M. (2023, 9 maart). What Is Node.js and Why You Should Use It. Kinsta®. https://kinsta.com/knowledgebase/what-is-node-js/
- Working with IndexedDB. (2016, 1 januari). web.dev. https://web.dev/indexeddb/
- Change default HTML input validation message. (z.d.-b). Stack Overflow. https://stackoverflow.com/questions/63491564/change-default-html-input-validation-message
- Window.localStorage - Web APIs | MDN. (2023, 16 maart). https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://www.learnhowtoprogram.com/user-interfaces/advanced-css-features/viewports-and-media-queries#:~:text=Sometimes%20multiple%20media%20queries%20can,the%20maximum%20value%20of%20480.
- Prieto, R. (2018, 24 augustus). Progressive Disclosure with CSS. Silo Creativo. https://www.silocreativo.com/en/progressive-disclosure-with-css/