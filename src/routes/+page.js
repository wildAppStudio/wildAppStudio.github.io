export const load = ({fetch}) => {
    const fetchData = async () => {
        const res = await fetch('/appInfo.json')
        const data = await res.json()

        return data
    }
    return {
        app: fetchData()
    }
}