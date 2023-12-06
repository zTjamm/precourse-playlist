import {createEl, songsData} from "../data.js";

export function playList(){

    const playListWrapper = document.createElement(`ul`)

    const songs = songsData();

    songs.map(s=>{

        const songEl = createEl(`li`,``,`songEl`, playListWrapper)
        const songIco = createEl(`img`, ``,`songIco`, songEl)
        songIco.src =`${s.ico}`
        songIco.alt = `Any Image`
        const songWrap = createEl(`div`,``,`songWrap`,songEl)
        const songArtist = createEl(`span`,`${s.artist} - `, `songArtist`,songWrap)
        const songName = createEl(`span`, `${s.title}`,`songName`,songWrap)
        const songYear = createEl(`span`, ` ${s.year}`,`songYear`,songWrap)
        const songAudioControls = createEl(`audio`,``,`songAudioControls`,songWrap)
        songAudioControls.setAttribute(`controls`, ``)
        songAudioControls.src =`${s.url}`

    })

    return playListWrapper;
}