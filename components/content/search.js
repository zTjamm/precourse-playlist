import {getInputText, getSortValue,getBtnStatus,getSearchTerm,buttonState, createEl} from "../data.js";

export function searchMusic(){
    let searchPanel = document.createElement(`div`)
    searchPanel.className =`searchPanel`
    let searchInputEl =createEl(`input`,``,`searchInput`,searchPanel)
    searchInputEl.placeholder =`🔎 Input search`
    searchInputEl.value = getSearchTerm()
    const sortEl = createEl(`div`,``,`sortEl`,searchPanel)
    const sortSpan = createEl(`span`,`Sort by Name`,`sortSpan`,sortEl)
    const sortElItemUp = createEl(`button`,`🔼`,`sortElItemUp`,sortEl)
    const sortElItemDown = createEl(`button`,`🔽`,`sortElItemDown`,sortEl)

    sortEl.addEventListener(`click`,(e)=>{
        let targetText = e.target.textContent
        if (targetText === `🔼`){
            getBtnStatus(`up`)
            getSortValue(targetText)
        }
        if(targetText === `🔽`){
            getBtnStatus(`down`)
            getSortValue(targetText)
        }
    })
    if(buttonState()===`up`){
        sortElItemUp.setAttribute(`disabled`,``)
        sortElItemDown.removeAttribute(`disabled`,``)
    }
    if (buttonState()===`down`){
        sortElItemUp.removeAttribute(`disabled`,``)
        sortElItemDown.setAttribute(`disabled`,``)
    }

    searchInputEl.addEventListener(`input`, ()=>{
        getInputText(searchInputEl.value)
    })
    requestAnimationFrame(()=>{
        searchInputEl.focus()
    })
    return searchPanel
}