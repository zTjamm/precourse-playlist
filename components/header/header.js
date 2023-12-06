import {createEl} from "../data.js";

export function renderHeader(){
    let headerEl = document.createElement(`header`)
    const headerDivEl = createEl(`div`,``,`headerDivEl`,headerEl)
    const headerIco = createEl(`img`,``,`headerIco`,headerDivEl)
    headerIco.src =`./components/img/ico-header.svg`
    headerIco.alt =`Any Ico`
    const headerTitle = createEl(`span`,`InPlayList`,`headerTitle`,headerDivEl)

    return headerEl;
}