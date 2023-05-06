import React from 'react'
import TodoLayout from './layouts/PostsLayout'
import UserListLayout from './layouts/UserListLayout'

export default function App() {
  return (
    <div className='App'>
    <div style={{ marginTop: '20px'}}>
    <UserListLayout />
    </div>
    <TodoLayout />
    </div>
  )
}

