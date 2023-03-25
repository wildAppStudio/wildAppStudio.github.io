export const load = ({fetch, params}) => {
    const fetchApp = async () => {
        const res = await fetch('/appInfo.json')
        const data = await res.json()
        const result = data.filter((e) => {
            return e.id === params.appId;
        })

        if (result.length === 0) {
            return {
                "info": {
                    "title":"Error",
                    "image":"",
                    "description":"App Not Found"
                }
            }
        } else {
            return result[0]
        }
    }
    return {
        app: fetchApp(params.appId)
    }
}