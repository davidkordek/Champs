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


function generateChampList() {
    var grid = document.querySelector('.grid');
    
    champs.forEach(champ => {
        var card = document.createElement('div');
        var image = document.createElement('img');
        var champName = document.createElement("p");

        card.className = "gridsquare";
        champName.className = "champName";
        champName.textContent = champ;

        image.style.width = "70px";
        image.style.height = "auto";    
        image.src = `pics/${champ}Square.png`;

        //add the components to the card
        card.appendChild(champName);
        card.appendChild(image);
        //add card to the grid container
        grid.appendChild(card);
    });

}

searchInput = document.querySelector('input');

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    let champNames = document.getElementsByClassName("champName");
    var divs = document.getElementsByClassName("gridsquare");

    for(var i = 0; i < champNames.length; i++){
        let name = champNames[i].textContent.toLowerCase();
        const isVisible = name.includes(value);
        if(divs[i].classList.toggle("hide",!isVisible)){
            divs[i].style.display = "none";
        }else{''
            divs[i].style.display = "inline-block";
        }
    
    }
});

generateChampList();
