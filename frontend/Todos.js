import axios from 'axios';
import { useEffect, useState } from 'react';
const TodoApp = () => {
    useEffect(() => {
        axios.get('sqtodo/');
    }, []);
    const saveTodo = (e) => {
        e.preventDefault();
        let title = e.target.title.value;
        let description = e.target.description.value;
        let status = e.target.status.value;
        axios
            .get(`/sqtodo/create/${title}/${description}/${status}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <h2>Welcome to registration page</h2>
            <form className='todo' onSubmit={saveTodo}>
                <label>
                    <h3>Title :</h3>
                </label>
                <input
                    type='text'
                    name='title'
                    placeholder='Enter title'
                    className='form-control'
                />
                <label>
                    <h3>Description :</h3>
                </label>
                <textarea name="description"  placeholder='describe......' />
                <label>
                    <h3>Status :</h3>
                </label>
                <select className='form-select' name='status'>
                    <option value='true'>completed</option>
                    <option value='false'>incomplete</option>
                </select>
                <br />
                <div className='text-center'>
                    <button >Add Todo</button>
                </div>
            </form>
        </div>
    );
};
export default TodoApp;