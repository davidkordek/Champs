let champs = ["Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios",
"Ashe","Aurelion Sol","Azir","Bard","Bel'veth","Blitzcrank","Brand","Braum","Caitlyn","Camille",
"Cassiopeia","Cho'Gath","Corki","Darius","Diana","Dr. Mundo","Draven","Ekko","Elise",
"Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas",
"Graves","Gwen","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax",
"Jayce","Jhin","Jinx","Kai'sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn",
"Kindred","Kennen","Kled","Kha'Zix","Kog'Maw","LeBlanc","Lee Sin","Leona","Lillia","Lissandra",
"Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser",
"Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn",
"Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rell","Rek'Sai","Renata Glasc","Renekton","Rengar",
"Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana",
"Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","Tahm kench","Taliyah",
"Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr",
"Urgot","Varus","Vayne","Veigar","Vel'Koz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick",
"Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Zeri","Ziggs","Zilean",
"Zoe","Zyra"];

//container for all the divs
let container = document.querySelector('.container');

let button = document.querySelector('button');
function genDivs(v,x,y){

    var e = document.querySelector('.grid'); // whatever you want to append the rows to: 
    for(var i = 0; i < v*3; i++){ 
        var row = document.createElement("div"); 
        row.className = "row";
        row.style = `margin: 0; `;
        for(var j = 1; j <= v; j++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            cell.style = `
            height: ${y}px;
            width: ${x}px;
            `;
            cell.addEventListener("click", (e) => {
                e.target.style.background = 'blue';

            });
            var champName = document.createElement("p");
            champName.className = "champName";
            champName.textContent = champs[(i * v) + j-1];

            var image = document.createElement('img');
            image.style.width = "60px";
            image.style.height = "auto";    
            image.src = `pics/${champs[(i * v) + j-1]}Square.png`;
            if(champs[(i * v) + j-1]){
                cell.appendChild(champName);
                cell.appendChild(image);
                row.appendChild(cell); 
                
            }
            
} 
      e.appendChild(row); 
    } 

}

const champSearch = (champ,divs,ps,displayType) => {
    for(var i = 0; i < ps.length; i++){
        let x = ps[i].textContent.toLowerCase();
        if(!(x === champ)){
            ps[i].style.display = displayType;
            divs[i].style.display = displayType;
            
        }
        
    }
}

function search(champ) {
    var divs = document.getElementsByClassName("gridsquare");
    var ps = document.getElementsByClassName("champName");
   
    if(champ === ""){
        champSearch(champ,divs,ps,"inline-block")
        return;
    }
    champSearch(champ,divs,ps,"none");

    
}
searchBtn = document.querySelector('.search');
searchBtn.addEventListener('click',() => {
    let input = prompt("Enter Champ Name");
    search(input);
});
genDivs(8,60,80);
search("");
