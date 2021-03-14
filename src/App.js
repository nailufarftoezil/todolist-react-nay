import React, { useState, useEffect, useCallback} from 'react'
import './App.css';
import { Form, Input, Button, Checkbox, Space, Card, Row, Col, List} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import faker from 'faker';

interface Todo {
  id: string;
  todo: string;
  status: boolean;

}

function App() {
  
  const [todos, setTodos] = useState([])
  const [list, setlist] = useState([])
  const [name, setName] = useState("");
  // const [isCheked, setIsChecked] = useState(false);

  
    // const addTodo = useEffect(() => {
      
    //   setTodos(prev =>{
    //     return [...prev, {
    //       id:faker.random.uuid,
    //       todoName: name,
    //       status: false
    //     }]
    //   })
    //   setName("")
      
    // }, [todos])

  const onChangeTodo = (e) => {
    console.log(e.currentTarget.value)
    setName(e.currentTarget.value);
  }
  const addTodo = () => {
    //add new todo to todos
    setTodos(prev => {
      return [...prev,{
        id:faker.random.uuid(),
        todo: name,
        status: false
      }]
    })
    // after add input clear
    setName("")
  };

  // const addTodoTwo = useCallback(
  //   (todos : Todo ) => {
      
  //   },
  //   [todos],
  // )

const changeStatus = (id) => {
  const change = todos.map(todo => {
    return {
      ...todo,
      status: todo.id === id ? !todo.status : todo.status
    }
  })
  setTodos(change)
}

// useEffect(() => {
//   // let filteractive = todos;
  
//   const active = todos
//   const done = todos.filter(todo => todo.status === true)
  
// }, [todos]);

const activeStatus = useCallback(
  () => {
    const filteredActive = todos.find(todo => todo.status === false)
    if(filteredActive){
      setTodos(todos.map((todo, i) => (
        <Form.Item key={todo.id}>
        <Checkbox 
          
          onChange={()=> changeStatus(todo.id)}>
          <span >{todo.todo}</span>
        </Checkbox>
        <Button onClick={()=>remove(todo.id)}><DeleteOutlined /></Button>
      </Form.Item>
      )))
    }
    
  },
  [todos]
)



// const acti = useEffect(() => {
//   if (todo.status === false){}
//   setTodos(todos.filter(todo => todo.status === false))
// }, [todos])

// const activeStatus = (id) =>{
//   const active = todos.filter(todo => todo.status === false )
// }
 const remove = id => {
  //  todos.splice(todos.indexOf)
   setTodos(todos => todos.filter(todo => todo.id !== id))
 }
 console.log(todos)
  
  
  return (
    <> 
      <Row gutter={12}>
        <Col span={8}>
          <Form>
            <Form.Item>
              <Input type="text"  onChange={onChangeTodo} value={name}/>
              <Space 
                size= {[10]} >
              <Button type="primary" onClick={addTodo} >Add New</Button>
              <Button type="dashed" onClick={activeStatus} >Active</Button>
              <Button type="dashed" >Done</Button>
              <Button type="primary" danger >Clear All Todo</Button>
              </Space>
              {/* <Button type="danger" >Clear All</Button> */}
            </Form.Item>
          </Form>
        </Col>
      </Row>
      
      {/* <Checkbox onChange={onChangeChecked}>{name}{isCheked}</Checkbox> */}
    
      <>  
      <p>All Todo List</p>
      {todos}
        {/* {todos.map((todo, i) =>    
          <Form.Item key={todo.id}>
            <Checkbox 
               
              onChange={()=> changeStatus(todo.id)}>
              <span >{todo.todo}</span>
            </Checkbox>
            <Button onClick={()=>remove(todo.id)}><DeleteOutlined /></Button>
          </Form.Item>
        )} */}
        {/* <p>All Done</p>
        {todos.filter(todo => todo.status === false).map((todo, i) => (
          <Form.Item key={todo.id}>
          <Checkbox 
            
            onChange={()=> changeStatus(todo.id)} checked>
            <span >{todo.todo}</span>
          </Checkbox>
          <Button onClick={()=>remove(todo.id)}><DeleteOutlined /></Button>
        </Form.Item>
        ))}
        <p>All Active</p>
        {todos.filter(todo => todo.status === true).map((todo, i) => (
          <Form.Item key={todo.id}>
          <Checkbox 
            
            onChange={()=> changeStatus(todo.id)} >
            <span >{todo.todo}</span>
          </Checkbox>
          <Button onClick={()=>remove(todo.id)}><DeleteOutlined /></Button>
        </Form.Item>
        ))} */}
      </>
    </>
  );
}

export default App;
