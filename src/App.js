import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
        <div class="container">
                <h1 className='mt-3'>Shopping App</h1>
            <div class="row mt-3">
                <div class="col-sm">
                    <CartValue />
                </div>
                <div class="col-sm">
                    <Location />
                </div>
            </div>
                <h3 className='mt-3'>Shopping Cart</h3>
            <div class="row mt-3">
                <div class="col-sm">
                    <ExpenseList />
                </div>
            </div>
                <h3 className='mt-3'>Add Items</h3>
            <div class="row mt-3">
                <div class="col-sm">
                    <ItemSelected />
                </div>
            </div>
        </div>
    </AppProvider>
  );
}

export default App;
