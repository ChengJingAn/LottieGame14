import {prePathUrl} from "../components/commonfunctions"

const loadSound = (name, isEffectSound = false) => {
    return new Audio(prePathUrl() + "sounds/" + (isEffectSound ? "/effect/" :"") + name + ".mp3")
}

export default loadSound