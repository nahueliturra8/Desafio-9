
import './App.css'
import UserList from './Components/UserList/UserList'
import UserDetails from './Components/UserDetails/UserDetails' 
import UserDelete from './Components/UserDelete/UserDelete'
import UserForm from './Components/UserForm/Userform'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext'

function App() {
  return (
    
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/create" element={<UserForm />} />
      
        <Route path="/delete/:id" element={<UserDelete />} />
      </Routes>
    </Router>
    </UserProvider>

  )
}

export default App
