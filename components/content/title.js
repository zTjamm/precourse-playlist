import {createEl, addNewSong} from "../data.js";

export function renderTitle(){
    const titleWrapperDiv = createEl(`div`,``,`titleWrapperDiv`,``)
    let titleEl = createEl(`h1`,`My Playlist`,`title`,titleWrapperDiv);
    const btnAdd = createEl(`button`, `Add Playlist`,`btnAdd`, titleWrapperDiv)

    btnAdd.addEventListener(`click`, ()=>{
        const dialog= createEl(`dialog`,``,`dialog`,titleWrapperDiv)
        dialog.setAttribute(`open`, ``)
        const form = createEl(`form`, ``,`form`,dialog)
        form.setAttribute(`method`,`dialog`)
        const artistInput = createEl(`input`, ``,`artistInput`, form)
        artistInput.setAttribute(`placeholder`,`artist`)
        const songNameInput = createEl(`input`, ``,`songNameInput`, form)
        songNameInput.setAttribute(`placeholder`,`song name`)
        const yearSongInput = createEl(`input`, ``,`yearSongInput`, form)
        yearSongInput.setAttribute(`type`,`number`)
        yearSongInput.setAttribute(`placeholder`,`Year`)
        const icoUrlInput = createEl(`input`, ``,`icoUrlInput`, form)
        icoUrlInput.setAttribute(`placeholder`,`Url Ico`)
        const songUrlInput = createEl(`input`, ``,`songUrlInput`, form)
        songUrlInput.setAttribute(`placeholder`,`Url Song`)
        const formBtn = createEl(`button`,`Add Song`,`formBtn`,form)

        formBtn.addEventListener(`click`,()=>{
            addNewSong(yearSongInput.value,artistInput.value,songNameInput.value,icoUrlInput.value,songUrlInput.value)
        })
    })
    return titleWrapperDiv;
}