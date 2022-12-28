import { Form, useLoaderData, Link } from "react-router-dom"

function Index(props) {
    const cheeses = useLoaderData();
    return <div>
        <Form action="/create" method="post">
            <input type="text" name="name" />
            <input type="checkbox" name="tasty"/>
            <button>Create New Cheese</button>
        </Form>
        {cheeses.map((cheese) => <div key={cheese._id}> 
            <Link to={`/${cheese._id}`}><h1>{cheese.name}</h1> </Link>
            <h2>{cheese.tasty ? "It's Tasty" : "Not Tasty"}</h2>
        </div>)}
    </div>
}

export default Index

