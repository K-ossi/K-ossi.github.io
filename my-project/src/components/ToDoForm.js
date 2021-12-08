import { useState } from 'react'

export default function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input className =" mt-5 bg-white border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введіть текст..."
            />        
            <button className="  mt-5 text-white  font-bold bg-pink-400 border shadow-md  pl-7 pr-7 p-2 rounded-full ">Зберегти</button>
        </form>
    )
}

