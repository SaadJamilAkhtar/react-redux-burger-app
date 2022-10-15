import { Header } from "./components";
import './App.css';
import { Home, Order, AllOrder } from "./containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Home />
                    } />
                    <Route path="/order" element={
                        <Order/>
                    } />

                    <Route path="/all-orders" element={
                        <AllOrder/>
                    } />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
