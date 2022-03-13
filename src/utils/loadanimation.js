import { prePathUrl } from "../components/commonfunctions"

export default async function loadJson(url) {
    const jsonData = await fetch(prePathUrl() + 'lottiefiles/' + url)
        .then((r) => r.json())
        .then((data) => {
            return data;
        })
    return jsonData
}
