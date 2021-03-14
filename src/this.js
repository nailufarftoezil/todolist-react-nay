import React, { useState, useEffect, useCallback} from 'react'
import './App.css';
import { Form, Input, Button, Checkbox} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import faker from 'faker';

function App() {
  
  const [todos, setTodos] = useState([])
  const [name, setName] = useState("");
  const [isCheked, setIsChecked] = useState();
  
  const isi = (e) => setName(e.currentTarget.value);
  const checkedTodo = (e) => setIsChecked(e.current.checked);
  const addTodo = () => {
    // const name = e.current.value
    if(isi === '') return
    setTodos(prev => { 
      return [...prev, 
      {
        id:faker.random.uuid(), 
        todo:name, 
        status: isCheked
      }
      ]
    })
    setName("")
    
    console.log(todos);
}
console.log(todos);
// console.log(isCheked ? true : false);


const changeStatus = id => {
  // checkedTodo(todo.id)
  const newStatus = (e) => e.currentTarget.checked
  
  // const neww = setTodos(todos => todos.find(todo => todo.status === id))
  // neww.status = !neww.status
  // setTodos([...todos])
  // checkedTodo.status = !checkedTodo.status
  setIsChecked(newStatus)
  
}


 const remove = id => {
  //  todos.splice(todos.indexOf)
   setTodos(todos => todos.filter(todo => todo.id !== id))
 }

  
  
  return (
    <>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }} >
      <Form.Item>
        <Input type="text"  onChange={e=>setName(e.target.value)} value={name}/>
        <Button type="primary" onClick={addTodo}>Add New</Button>
        <Button type="danger" >Clear All</Button>
      </Form.Item>
    </Form>

    {todos.map((todo) => 
      <>
        <li key={todo.id}>
          <Form.Item>
            <Checkbox onChange={e =>setIsChecked(e.currentTarget.checked)} >
              <span >{todo.todo}</span>
            </Checkbox>
            <Button onClick={()=>remove(todo.id)}><DeleteOutlined /></Button>
          </Form.Item>
        </li>
      </>
    )}
    </>
  );
}

export default App;
