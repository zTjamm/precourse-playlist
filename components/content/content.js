import {renderTitle} from "./title.js";
import {createEl} from "../data.js";
import {searchMusic} from "./search.js";
import {playList} from "./play-list.js";

export function renderContent(){
    const contentWrapper = createEl(`div`,``,`contentWrapper`,``)
    const title = renderTitle();
    contentWrapper.appendChild(title)

    const search = searchMusic();
    contentWrapper.appendChild(search)

    const playLists = playList();
    contentWrapper.appendChild(playLists)

    return contentWrapper

}