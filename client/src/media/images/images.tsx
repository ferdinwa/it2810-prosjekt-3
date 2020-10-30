type tCharName = {
  [key: string]: string;
};

const images: tCharName = {
  Pelé: "https://futhead.cursecdn.com/static/img/14/players/190043.png",
  "Diego Maradona":
    "https://futhead.cursecdn.com/static/img/18/players_worldcup/190042.png",
  Ronaldo: "https://futhead.cursecdn.com/static/img/21/players/237064.png",
  "Mané Garrincha":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/247553.png",
  "Lionel Messi":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p151152967.png",
  "Roberto Baggio":
    "https://futhead.cursecdn.com/static/img/21/players/243079.png",
  "Cristiano Ronaldo":
    "https://futhead.cursecdn.com/static/img/19/players/20801.png",
  "Robert Lewandowski":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p184737921.png",
  "Kevin De Bruyne":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p184742361.png",
  "Petr Cech": "https://futhead.cursecdn.com/static/img/14/players/48940.png",
  "Jan Oblak":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67309253.png",
  "Neymar jr":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67299735.png",
  "Toni Kroos": "https://futhead.cursecdn.com/static/img/19/players/182521.png",
  Ederson:
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67319121.png",
  "Samir Handanovic":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84048915.png",
  "Luis Suárez":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100839876.png",
  "Kalidou Koulibaly":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84087104.png",
  "Patrick Kluivert":
    "https://futhead.cursecdn.com/static/img/19/players/icon-stories/238424.png",
  "Bruno Fernandes":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p117652710.png",
  "Eden Hazard":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p167955437.png",
  "Raheem Sterling":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84088732.png",
  "Paulo Dybala":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134428838.png",
  "Joshua Kimmich":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p117653134.png",
  "N'Golo Kanté":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134433642.png",
  "Antoine Griezmann":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p117635277.png",
  "Aymeric Laporte":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84098298.png",
  "Wojciech Szczesny":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100849449.png",
  "Bernardo Silva":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67327531.png",
  Fabinho:
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67318363.png",
  "Luka Modric":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67285867.png",
  "Andrew Robertson":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p167988427.png",
  "Jamie Vardy":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p167980990.png",
  "Alejandro Gómez":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p151138020.png",
  "Sergio Busquets":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67298375.png",
  "Giorgio Chiellini":
    "https://futhead.cursecdn.com/static/img/19/players_alt/p151133900.png",
  "Luis Hernández":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246510.png",
  "Pierre-Emerick Aubameyang":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p151183511.png",
  "Hueng Min Son":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p184749480.png",
  "Hugo Lloris":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67276812.png",
  "Ciro Immobile":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p167964547.png",
  "Angel Di Maria":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100847194.png",
  "Jadon Sancho":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p235114073.png",
  "Trent Alexander-Arnold":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67340145.png",
  "Roberto Firmino":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67310806.png",
  "Keylor Navas":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134410769.png",
  "Daniel Carvajal":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84091043.png",
  "David De Gea":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p50524728.png",
  "Thomas Muller":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67298460.png",
  "Marco Verratti":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84085636.png",
  "Jordan Henderson":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84069791.png",
  "Erling Haaland":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p218342893.png",
  "Ansu Fati":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p50584652.png",
  "Wissam Ben Yedder":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p201526043.png",
  "Mats Hummels":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p117619115.png",
  "Yann Sommer":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p50509331.png",
  "Paul Pogba":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67304728.png",
  "Gerard Piqué":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84038809.png",
  "Raphael Varane":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p151196479.png",
  "David Silva":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67277406.png",
  "Jordi Alba":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84075412.png",
  "Timo Werner":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67321052.png",
  "Hakim Ziyech":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134426398.png",
  "Juan Bernat":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84091149.png",
  "Thiago Alcantara":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84075589.png",
  "Marcel Sabitzer":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p117645435.png",
  "Thiago Silva":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100827536.png",
  "Alexandre Lacazette":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p50524949.png",
  "Diego Godín":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67291357.png",
  Marquinhos:
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134425593.png",
  "Sergi Milinkovic-Savic":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p50555496.png",
  "Leroy Sané":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67331356.png",
  "Daniel Parejo":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p151184457.png",
  "Milan Skriniar":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67341227.png",
  "Dries Mertens":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134393671.png",
  "Bernd Leno":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100855859.png",
  "Mauro Icardi":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p117641911.png",
  "Marco Reus":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134406078.png",
  "Lorenzo Insigne":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84084299.png",
  "Miralem Pjanic":
    "https://futhead.cursecdn.com/static/img/18/players_alt/p50511854.png",
  "Kyle Walker":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67297241.png",
  "Alex Sandro":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84077123.png",
  "Marcus Rashford":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100894973.png",
  Koke: "https://futhead.cursecdn.com/static/img/20/players_alt/p67302611.png",
  "Frenkie de Jong":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84114782.png",
  Rodri: "https://futhead.cursecdn.com/static/img/19/players_alt/p67340730.png",
  "Toby Alderweireld":
    "https://futhead.cursecdn.com/static/img/19/players_alt/p100847383.png",
  "Frank Rijkaard":
    "https://futhead.cursecdn.com/static/img/19/players/icon-stories/214098.png",
  "Lothar Matthäus":
    "https://futhead.cursecdn.com/static/img/15/players/191189.png",
  "Patrick Vieira":
    "https://futhead.cursecdn.com/static/img/17/players/1419.png",
  "Jari Litmanen":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246501.png",
  "Javier Zanetti":
    "https://futhead.cursecdn.com/static/img/20/players/246492.png",
  "Michael Owen":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246483.png",
  "Rui Manuel César Costa":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246475.png",
  "Andriy Shevchenko":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246474.png",
  "Roberto Carlos":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246533.png",
  "David Trezeguet":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246488.png",
  Riquelme:
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/254572.png",
  "Thibaut Courtois":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100855415.png",
  "Karim Benzema":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p167937313.png",
  "Harry Kane":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p218305934.png",
  Eusébio:
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246541.png",
  Casemiro:
    "https://futhead.cursecdn.com/static/img/20/players_alt/p117640657.png",
  "Manuel Neuer":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100830791.png",
  "Sergio Ramos":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134373590.png",
  "Sergio Aguero":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84039159.png",
  "Ashley Cole":
    "https://futhead.cursecdn.com/static/img/21/players/255355.png",
  "Lev Yashin":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/238380.png",
  "Ferenc Puskás":
    "https://futhead.cursecdn.com/static/img/21/players/256013.png",
  "Paul Scholes":
    "https://futhead.cursecdn.com/static/img/19/players/icon-stories/246486.png",
  Sócrates: "https://futhead.cursecdn.com/static/img/20/players/246517.png",
  "Michael Laudrup":
    "https://futhead.cursecdn.com/static/img/20/players/246523.png",
  "Steven Gerrard":
    "https://futhead.cursecdn.com/static/img/20/players/246482.png",
  "Pavel Nedvěd":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246496.png",
  "Johan Cruyff":
    "https://futhead.cursecdn.com/static/img/19/players/icon-stories/246516.png",
  "Ian Wright":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/248156.png",
  "Marco van Basten":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246519.png",
  Ronaldinho: "https://futhead.cursecdn.com/static/img/20/players/246472.png",
  "Gheorghe Hagi":
    "https://futhead.cursecdn.com/static/img/20/players/246512.png",
  Kaká: "https://futhead.cursecdn.com/static/img/20/players/247299.png",
  "Gennaro Gattuso":
    "https://futhead.cursecdn.com/static/img/20/players/246545.png",
  "Ryan Giggs":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246485.png",
  "Bastian Schweinsteiger":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p50453592.png",
  "Laurent Blanc":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246537.png",
  "John Barnes":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/247516.png",
  "Bobby Moore":
    "https://futhead.cursecdn.com/static/img/20/players/246515.png",
  "Fabio Cannavaro":
    "https://futhead.cursecdn.com/static/img/20/players/246490.png",
  "Michael Ballack":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246502.png",
  "Edwin van der Sar":
    "https://futhead.cursecdn.com/static/img/20/players/246498.png",
  "Didier Drogba":
    "https://futhead.cursecdn.com/static/img/20/players/247694.png",
  "Philipp Lahm":
    "https://futhead.cursecdn.com/static/img/21/players/256154.png",
  "Alan Shearer":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246487.png",
  "Hugo Sánchez":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/247548.png",
  "Ian Rush":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/247705.png",
  "Gary Lineker":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246522.png",
  "Miroslav Klose":
    "https://futhead.cursecdn.com/static/img/20/players/246540.png",
  "Fernando Hierro Ruiz":
    "https://futhead.cursecdn.com/static/img/20/players/246511.png",
  "Gianluca Zambrotta":
    "https://futhead.cursecdn.com/static/img/20/players/250892.png",
  "Sol Campbell":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246544.png",
  "Sadio Mané":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p235089746.png",
  "Mohamed Salah":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p134427059.png",
  "Virgil van Dijk":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p100866672.png",
  "Alisson Becker":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p67321695.png",
  "Marc-André ter Stegen":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p84078528.png",
  "Kylian Mbappe":
    "https://futhead.cursecdn.com/static/img/20/players_alt/p218335555.png",
  "Marc Overmars":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246536.png",
  "Kenny Dalglish":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/247702.png",
  "Nemanja Vidić":
    "https://futhead.cursecdn.com/static/img/21/players/255757.png",
  "Carlos Alberto Torres":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/247326.png",
  "Alessandro Del Piero":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246527.png",
  "Rio Ferdinand":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246495.png",
  "Carles Puyol Saforcada":
    "https://futhead.cursecdn.com/static/img/19/players/icon-stories/20984.png",
  "Luís Figo":
    "https://futhead.cursecdn.com/static/img/19/players/icon-stories/246503.png",
  "Juan Sebastián Verón":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246543.png",
  Deco:
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246508.png",
  "Xavier Hernández":
    "https://futhead.cursecdn.com/static/img/21/players/255910.png",
  "Thierry Henry":
    "https://futhead.cursecdn.com/static/img/20/players/246489.png",
  "Emmanuel Petit":
    "https://futhead.cursecdn.com/static/img/20/players/icon-stories/246506.png",
  "Éric Cantona":
    "https://futhead.cursecdn.com/static/img/21/players/255476.png",
  "Frank Lampard":
    "https://futhead.cursecdn.com/static/img/20/players/246481.png",
};
export default images;
