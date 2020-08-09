import React, {
    FC,
    useState,
} from 'react'

interface ITodoFormProps {
    onAdd(title:string): void
}

const InputForm: FC<ITodoFormProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.currentTarget.value)
    }

    const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            onAdd(title)
            setTitle('')
        }
    }
    return (
        <div className="input-field mt2">
          <input 
            onChange={changeHandler} 
            onKeyPress={keyPressHandler}
            id="todo-add" 
            type="text" 
            placeholder="Введите ваше задание" 
            value={title} />
          <label className="active" htmlFor="todo-add">Добавить задание</label>
        </div>
    )
}

export default InputForm