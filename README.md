
# Prosjekt 3 - Gruppe 77


*  [Intro](#intro)
*  [Innhold og funksjonalitet](#innhold-og-funksjonalitet)
*  [Krav til teknologi](#krav-til-teknologi)
    *  [React](#react)
    *  [State management](#state-management)
    *  [Backend](#backend)
    *  [Relevante komponenter og bibliotek](#relevante-komponenter-og-bibliotek)
*  [Testing](#testing)


## Intro

Vi har i denne oppgaven laget en nettside med frontend og backend der fokus er på søk. Objektene vi søker på er fotballspillere, og siden tilbyr
funksjonalitet for å søke på, sortere og filtrere på ulike parametre. 

For å kjøre prosjektet manuelt: <br>
Kjøre `npm install` i "client"-mappen, og i "prosjekt-3"-mappen. <br>
Kjøre `npm run dev` i "prosjekt-3"-mappen (her bruker vi concurrently for å kjøre client og server samtidig)


## Innhold og funksjonalitet

Prosjekt 3 i IT2810 - Webutvikling går ut på å designe og implementere en fullstack webside der fokus er på søk. 
De søkbare objektene skal ligge lagret i en database. Vi har valgt å lagre spillerobjekter representert som FUT (FIFA Ultimate Team) spillere, der hver spiller ligger inne med tilhørende informasjon som alder, posisjon, nasjonalitet og klubb. 
Disse spillerobjektene ligger lagret i databasen som kjører på NTNU sin server. 

Siden består av et søkefelt der brukeren kan søke på spiller. 
Brukeren har også mulighet til å filtrere på posisjon, klubb og nasjon. 
Etter å ha gjennomført et søk (med resultater), vil spillerobjektene som tilfredsstiller søket listes opp 10 og 10, og det er lagt til rette for å hente ut flere resultater ved blaing i sider dersom man ønsker å se mer av resultatsettet. 
I tillegg er hvert spillerobjekt representert som en knapp. Ved å trykke på en spiller, vil man få opp et pop-up vindu med mer informasjon om den valgte spilleren. 
Her har man også muligheten til å upvote/downvote spillere, og denne scoren vil oppdateres i databasen. 

## Krav til teknologi

### React
Siden er implementert med React og TypeScript. Vi har kun valgt å benytte oss av funksjonelle komponenter, da dette er enkelt å implementere og gir enkel og lesbar kode. 
Når det kommer til typing har vi valgt å samle alle interfaces i en egen fil, interfaces.tsx, som vi deretter importerer i de andre filene. 
Hovedkomponentene i React-applikasjonen er SearchBar.tsx og Scroller.tsx. SearchBar.tsx inneholder et Jumbotron-element hvor både søkefelt og filtrering er implementert. 
Filter.tsx er en egen fil, som igjen er forelder til spesifikke komponenter for ulik filtrering. Dermed ligger all funksjonalitet for søk, filtrering og sortering under SearchBar.tsx. 
Scroller.tsx inneholder all funksjonalitet for å vise resultatsettet. 
Her ligger altså funksjonalitet for å vise spillerne, vise mer info om hver enkelt og bla mellom ulike sider i resultatsettet. 

Vi baserte prosjektet på Node.js, og brukte pakken create-react-app for å sette opp prosjektet. 
Følgende kommando ble kjørt i terminalen for å sette opp prosjektet med TypeScript:

`npx create-react-app my-app --template typescript`

### State management
Vi har valgt å bruke React Redux for state management i applikasjonen. 
Redux gir oss blant annet mulighet for å oppbevare og oppdatere en global state. 
Den globale staten er lagret i en store, og for at alle “child components” av App.tsx skal få tilgang til den globale staten, har vi wrappet hele App.tsx sitt komponent-tre i en <Provider> med vår store.tsx som argument.
For å endre på den globale staten har vi ulike Action creators som produserer en Action. 
Nevnte Action blir matet inn i en dispatch som sender denne aksjonen til en reducer. 
I vårt tilfelle har vi kun én reducer, playerReducer.tsx, som vil oppdatere staten avhengig av hvilken action og dermed hvilken payload som har blitt sendt fra dispatch. 

For å aksessere den globale staten har vi brukt hooken useSelector(). Eksempel på bruk:

`const players = useSelector((state: IAppState) => state.players)`

Dette er et alternativ til funksjonen mapStateToProps, som et argument til connect-metoden.

I eksempelet over henter vi ut den globale staten players, og lagrer denne som en konstant. Vi har funnet det hensiktsmessig å ha spillere som en global state, fordi det da blir mulig å aksessere spillerne på tvers av komponent-treet, og uten å måtte sende disse som props nedover. 
I tillegg til players har vi deres posisjon, alder, klubb og nasjon som global state for lettere å aksessere disse i filter-komponentene og searchBar-komponenten. 

### Backend
For en mest mulig hensiktsmessig mappestruktur har vi valgt å dele opp prosjektet i en client-mappe, og en backend-mappe. 
Vi har en package.json for backend ytterst i prosjekt-3, og en egen package.json inne i react-appen. 
Dette fordi frontend og backend har mange ulike dependencies, og dermed er det hensiktsmessig å skille disse. 
Ved oppstart av prosjektet må man derfor kjøre “npm install” både i “prosjekt-3”-mappen, og i “client”-mappen. 
Det er mulig å kjøre serveren separat på port 8080, ved å kjøre kommandoen `npm run server`. 

Figuren under viser hvordan vi har valgt å strukturere backend-mappen:

```
backend/
│
├── server.ts 
└── models/
│	└── player.ts
└── routes/
	└── players.ts
```

Vi har valgt å kompilere koden i backend til JavaScript, slik at det i praksis er server.js (som opprettes i en egen dist-folder) som kjøres når man kjører serveren.

**Database** <br>
Vi har valgt å bruke MongoDB som database, i hovedsak fordi den er populær, det finnes mye god dokumentasjon, og vi enkelt kunne sette den opp slik vi ønsket. 
Vi brukte et FIFA-API som inneholdt JSON-filer, og hadde en converter som gjorde dette om til CSV-filer, som vi fylte databasen med. 
Dette gjorde det å fylle databasen med spillere svært effektivt. I tillegg har vi brukt MongoDB Compass for å enkelt kunne holde oversikt over objektene i databasen, og enkelt kunne legge til/oppdatere attributter.

**Express** <br>
Express er et Node.js bibliotek for webapplikasjoner. Vi har brukt Express for å lage et REST API, og kommunisere med databasen. 
REST-API’et med Express og Node fungerer som et mellomledd mellom frontend (React), og backend (MongoDB). Denne stacken kalles MERN (MongoDB, Express, React, Node), og illustreres av figuren under. 

Express har gjort det enkelt for oss å sende spørringer fra frontend til backend, da spørringen kan legges til i slutten av opprinnelig URL. 
For oss har det vært mest hensiktsmessig å bruke GET og PUT mot databasen. Vi har brukt en router, som er initialisert på følgende måte; <br>
`const router = express.Router();`

Deretter har vi brukt router.get(...) og router.put(...) for å henholdsvis hente ut spillere til den spesifiserte spørringen, eller oppdatere spillerscoren i databasen. 
Express modellerer også dataen på en god måte, og i player.ts har vi brukt Mongoose for å modellere spillerskjemaet opp mot databasen. 

### Relevante komponenter og bibliotek

**Axios** <br>
I prosjektet har Axios blitt brukt. Dette er et klient-bibliotek for å sende HTTP request og håndtere responsene. 
Vi har spesifikt brukt axios for å hente ut spillere fra databasen, og for å oppdatere/lagre scoren til hver spiller. 
For å hente ut spillerne fra databasen, sender vi en axios GET-request der URL-en tilpasses til hva som har blitt søkt og filtrert på. Denne URL-en vil svare til en route i Express som dermed vil hente ut gjeldende spillere fra databasen.

**Reactstrap** <br>
Reactstrap er et front-end-rammeverk som gjør React Bootstrap komponenter kompatibelt med React. React Bootstrap komponenter er forhåndslagde og populære UI-komponenter som er implementert på en måte som gir god fleksibilitet og forhåndsvalidering. 
Ved bruk av Reactstrap kan man raskere og enklere lage intuitive og fine nettsider. En stor del av komponentene vi har tatt i bruk er Reactstrap-komponenter. Hovedkomponentene våre; AppNavBar, SearchBar og Scroller, i tillegg til sorteringskomponentene har i stor grad brukt disse komponentene.  

**Reactselect** <br>
Vi har også tatt i bruk Reactselect på filtreringskomponentene våre. Reactselect har en fleksibel input kontroll som ser bra ut. Vi har valgt å ta i bruk en Reactselect-komponent som kan ta i mot input både ved scrolling gjennom forhåndsdefinerte valg eller søk i de samme valgene.

### Testing

**Enhetstesting** <br>
For enhetstesting har vi tatt i bruk react-testing-library. Dette er et bibliotek som gjør det enkelt å implementere testing for å sjekke om komponentene gjør det de er satt til å gjøre. Vi har brukt dette til å lage fire enkle tester på fire av komponentene våre i Searchbar og Scroller. 
To av testene sjekker om det er riktig tekst som blir satt når komponenter mounter. De to andre tester at komponentene mounter når de er satt til å mounte.

**End-to-end testing** <br>
Det overordnede kravet når det kommer til end-to-end testing for dette prosjektet var å ha en form for automatisert end-to-end testing. 
Til dette brukte vi cypress, som gjør det enkelt å automatisere end-to-end testing, og lot oss teste den viktigste funksjonaliteten i applikasjonen. Vi skrev totalt 8 ulike tester for å teste de viktigste funksjonene appen tilbyr. 
Filen testing.ts i cypress-folderen inneholder disse testene. Her er det implementert tester for å sjekke at søk fungerer som det skal, både ved gyldig og ugyldige søkeord. 
I tillegg har vi tester for filtrering og sortering, og for å undersøke at pagineringen fungerer som den skal. Grunnen til at vi valgte å bruke cypress, er at det er lett å sette opp/lære seg, og at det er enkelt å debugge eventuelle feil. 

For å kjøre testene selv må man først og fremst ha kjørt `npm install` i både “prosjekt-3”-mappen, og i "client"-mappen. Deretter kan man kjøre testene med `npm run testing` fra “prosjekt-3”-mappen. Da vil det åpnes et eget cypress-vindu, og ved å deretter velge testing.ts, fra tests-folderen vil testene kjøre automatisk. 
