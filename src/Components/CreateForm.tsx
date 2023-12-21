import React from 'react';
import createStyle from './scss/createForm.module.scss'
import {BsPlusCircleFill} from "react-icons/bs";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createNewTodo, CreationType} from "../app/todoSlice.ts";

const CreateForm: React.FC = () => {
    let dispatch = useDispatch()
    let {register, handleSubmit, formState: {errors, dirtyFields}, reset} = useForm({mode: "onChange"})
    let onCreate = (data:CreationType) => {
        dispatch(createNewTodo(data))
        reset()
    }
    return (
        <div className={createStyle.container}>
            <form className={createStyle.createForm} onSubmit={handleSubmit(onCreate)}>
                <div className={createStyle.title}>Создать Новую Задачу</div>
                <div>
                    <label htmlFor="create_todo_title">Напишите название задачи:</label>
                    <input id='create_todo_title' className={createStyle.input}
                           style={dirtyFields.text ? (errors.text ? {borderColor:'red'} : {borderColor:'green'}) : {}}
                           {...register('text',
                               {required: true, message: "Поле «заголовок» не может быть пустым"})}
                           placeholder={'Зоголовок Todo'}/>
                </div>
                <div>
                    <label htmlFor="create_todo_desc">Напишите описание задачи:</label>
                    <textarea id='create_todo_desc' className={createStyle.textarea}
                              {...register('description',
                                  {required: false})}
                              placeholder={'Todo Описание'}/>
                </div>
                <div>
                    <label htmlFor="create_todo_desc">Выберите статус задачи:</label>
                    <select id='create_todo_desc' className={createStyle.input}
                            {...register('status',
                                {required: true})}
                    >
                        <option value={'processing'}>В работе</option>
                        <option value={'pending'}>В ожидание</option>
                        <option value={'done'}>Выполнено</option>
                    </select>
                </div>
                <div>
                    <button type={'submit'} className={createStyle.createBtn}><BsPlusCircleFill style={{color: 'white'}}/>
                        <span>Create</span></button>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;