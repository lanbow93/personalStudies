import { useState } from "react"

export default function ControlledForm(props){
    const [todos, setTodos] = useState([
        {todo:"Breakfast",
        other: {cheese: "Gouda"}},
        {todo:"Lunch",
        other: {cheese: "Swiss"}}
    ])

    const [form, setForm] = useState({
        todo: "",
        other: { cheese: ""}
    })

    function handleSubmit(event){
        event.preventDefault()
        const newState = [...todos]
        newState.push({
            todo: form.todo,
            other: {cheese: form.cheese}
        })
        setTodos(newState);
    }

    function handleChange(event){
        const newState = {...form}
        newState[event.target.name] = event.target.value
        setForm(newState)
    }

    function handleChange2(event){
        const newState = {...form}
        newState.other[event.target.name] = event.target.value
        setForm(newState)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" id="" value={form.todo} onChange={handleChange} placeholder="todo"/>
            <input type="text" name="cheese" id="" value={form.cheese} onChange={handleChange2} placeholder="cheese"  />
            <input type="submit" value="Submit" />
        </form>
        {todos.map((todo, index) => <h1 key={index}>{todo.todo + " " + todo.other.cheese}</h1>)}
    </div>
}