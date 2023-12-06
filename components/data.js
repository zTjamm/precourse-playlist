let songs = [
    {
        year: 1989,
        artist: "Public Enemy",
        title: "Fight the Power",
        ico: `./components/img/Public-Enemy.png`,
        url: `./components/audio/PublicEnemy-FightThePower.mp3`,
        isPlaying: false
    },
    {
        year: 1990,
        artist: "Vanila Ice",
        title: "Ice Ice Baby",
        ico: `./components/img/Vanila-Ice.png`,
        url: `./components/audio/VanilaIce-IceIceBaby.mp3`,
        isPlaying: false
    },
    {
        year: 1990,
        artist: "MC Hammer",
        title: "You Can’t Touch This",
        ico: `./components/img/MC-Hammer.png`,
        url: `./components/audio/MCHammer-YouCan’tTouchThis.mp3`,
        isPlaying: false
    },
    {
        year: 1994,
        artist: "Brand Nubian",
        title: "Brand Nubian",
        ico: `./components/img/Brand-Nubian.png`,
        url: `./components/audio/BrandNubian-BrandNubian.mp3`,
        isPlaying: false
    },
    {
        year: 2003,
        artist: "50 cent",
        title: "Formation",
        ico: `./components/img/50-Cent.png`,
        url: `./components/audio/50cent-InDaClub.mp3`,
        isPlaying: false
    }
];
let inputText =``
let sortName = ``
let subscriber = null
let btnStatus =``

export function addNewSong(year, artist, title, ico, url){
    let newSong = {
        year: year,
        artist: artist,
        title: title,
        ico: ico,
        url: url,
        isPlaying: false
    }
    songs.unshift(newSong)
    subscriber()
}
export function getInputText(anyText){
    inputText = anyText;
    subscriber()
}
export function getSearchTerm(){
    return inputText;
}
export function getSortValue(name){
     sortName = name
    subscriber()
}
export function getBtnStatus(status){
    btnStatus = status
}
export function buttonState(){
    return btnStatus
}
export function songsData(){
    let filteredText = inputText? inputText.toLowerCase().trim() : ``
    let filteredSongs = songs.filter(e=>e.artist.toLowerCase().trim().includes(filteredText) || e.title.toLowerCase().trim().includes(filteredText) || e.year.toString().toLowerCase().trim().includes(filteredText))

    if (sortName===`🔼`)filteredSongs = filteredSongs.sort((a, b)=>a.artist > b.artist? 1: -1)
    if (sortName===`🔽`)filteredSongs = filteredSongs.sort((a, b)=>b.artist > a.artist? 1: -1)
    return filteredSongs;
}
export function getRenderApp(renderApp){
    subscriber = renderApp;
}
export function createEl(el, text, cssClass, append) {
    let myEl = document.createElement(el)
    text ? myEl.innerText = text : ``
    cssClass ? myEl.className = cssClass : ``
    append ? append.appendChild(myEl) : ``
    return myEl
}