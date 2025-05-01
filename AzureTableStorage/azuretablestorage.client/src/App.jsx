import { useEffect, useState } from 'react';
import './App.css';
import GetProducts from './Components/Fetch/GetProduct';
import Header from './Components/Pages/Header';

function App() {
    return (
        <div>
            <Header/>
            <GetProducts />
        </div>
    );
}

export default App;