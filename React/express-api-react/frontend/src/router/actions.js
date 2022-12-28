import { redirect } from "react-router-dom"
import URL from "./url"

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newCheese = {
        name: formData.get("name"),
        tasty: formData.get("tasty") === "on" ? true : false
    }

    await fetch(URL + "/cheese", {
        method: "post",
        headers:{
            "Content-Type":"application/json" 
        },
        body: JSON.stringify(newCheese)
    })

    return redirect("/")
}