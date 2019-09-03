var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


const destination = document.querySelector(".content-destination")
const destinationImage = document.querySelector(".destination-img")


// 1
destination.addEventListener("click", function colorswap(){
    destination.colorIdx = destination.colorIdx || 0;
    destination.style.backgroundColor = colors[destination.colorIdx++ % colors.length]
})

// 2
destinationImage.addEventListener("mouseenter", e => destinationImage.style.transform = "scale(3.0)")
// 3
destinationImage.addEventListener("mouseleave", e => destinationImage.style.transform = "scale(1.0)")

//4 
var mid = ""
const funbus = document.querySelector("h1")
funbus.addEventListener("mouseover", e=>{ 
    mid += " really"
    funbus.textContent = `Christian is ${mid} Lame`;
})

//5
const links = document.querySelectorAll(".nav-link")
console.log(links)
links.forEach(item => item.addEventListener("mouseover", e =>{ 
    item.style.color = "blue";
    item.style.fontSize = "3rem";
    }
))

//6
links.forEach(item => item.addEventListener("mouseleave", e =>{ 
    item.style.color = "black";
    item.style.fontSize = "2rem";
    }
))

//7
var iterate = 0
var ford = ["Christian", "Ford", "Is", "Lame"]
links.forEach(item => item.addEventListener("mouseover", e =>{ 
    item.textContent = ford[iterate]
    iterate += 1
    if (iterate === ford.length){
        iterate = 0
    }
}))

//8
const lameo =  document.querySelector("h2")
lameo.addEventListener("click", e=> lameo.textContent = "Hmm... is Christian Ford a lameo?")

//9 
const button = document.querySelectorAll(".btn")
button.forEach(item => item.addEventListener("click", e=>{
 item.textContent = "LAME!!!"
 item.style.backgroundColor = "red"
 item.style.color = "black"
}))

//10
const imageclick = document.querySelectorAll("img")
imageclick.forEach(item=> item.addEventListener("click", e=> item.src = "https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Femoji.slack-edge.com%2FT4JUEB3ME%2Flumber_christian%2Fd653ee14f5ca4b8e.jpg"))
