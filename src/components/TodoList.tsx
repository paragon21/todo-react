import React, {
    FC 
} from 'react'
import {ITodoItem} from '../interfaces'

interface ITodoListProps {
    todos: ITodoItem[],
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

const TodoList: FC<ITodoListProps> = ({todos, onToggle, onDelete}) => {
        return (
            <ul>{todos.map( (item: ITodoItem)  => {
                const classes = ['todo']
                if (item.completed) {
                    classes.push('completed')
                }
                const classesString = classes.join(' ')
                    return (
                        <li className={classesString} key={item.id}>
                            <label>
                            <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)}/>
                            <span>{item.title}</span>
                            <i onClick={() => onDelete(item.id)} className="material-icons red-text">delete</i>
                            </label>
                        </li>
                    )
                })}
            </ul>
        )
}

export default TodoList