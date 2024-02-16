import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

   const handleEdit = () =>{
    axios.get('http://localhost:3001/get')
    .then

   }

    return (
        <div className="container" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp2827826.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
            <div className='home'>
                <h2 className="heading">Todo List</h2>
                <Create />
                {
                    todos.length === 0
                        ? (
                            <div><h2>No Record</h2></div>
                        ) : (
                            todos.map((todo, index) => (
                                <div className='task' key={index}>
                                    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                        <BsCircleFill className='icon' />
                                        <p>{todo.task}</p>
                                    </div>
                                    <div>
                                        <span><BsFillTrashFill className='icon' /></span>
                                    </div>
                                </div>
                            ))
                        )
                }
            </div>
        </div>
    );
}

export default Home;
