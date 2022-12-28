import { useLoaderData } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()

    return <section>
        <h1>{cheese.name}</h1>
        <h2>{cheese.tasty ? "It's Tasty" : "Not tasty at all"}</h2>
    </section>
}

export default Show