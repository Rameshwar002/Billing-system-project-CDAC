

import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';
import DashBoardComponent from './components/DashBoardComponent';
import ForgotPwdComponent from './components/ForgotPwdComponent';
import AddFoodComponent from './components/AddFoodComponent';
import EditFoodComponent from './components/EditFoodComponent';
 import NotFounComponent from './components/NotFounComponent';
import OrderFoodComponent from './components/OrderFoodComponent';
function App() {
  return (

    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegistrationComponent/>}/>
        <Route path="/dashboard" element={<DashBoardComponent/>}/>
        <Route path="/forgot" element={<ForgotPwdComponent/>}/>
        <Route path="/gotoaddfood" element={<AddFoodComponent/>}/>
        <Route  path="/dashboard/edit/:id" element={<EditFoodComponent/>}/>
        <Route  path="/orderfood" element={<OrderFoodComponent/>}/>
        <Route path="*" element={<NotFounComponent/>}/>
      </Routes>
    </BrowserRouter>
       

  );
}

export default App;
