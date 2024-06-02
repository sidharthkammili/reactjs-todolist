import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos} = props //destructuring syntax 

//below: mapping out content
//each task is mapped out to page as unordered list
//given edit icon

    return (
        <ul className = 'main'> 
            {todos.map((todo, todoIndex) => { 
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })} 
        </ul>
    )
}
