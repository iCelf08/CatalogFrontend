import React, { useEffect, useState } from 'react';
import axios from './axios'; // Assuming axios is correctly set up
import Products from './Products'; // Assuming this is the component to render the products
import ProductLoadingComponent from './ProductLoading'; // Loading component

function App() {
    const ProductLoading = ProductLoadingComponent(Products);
    const [appState, setAppState] = useState({
        loading: true,
        products: [], // Initially empty array
    });

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/') // Ensure this is the correct endpoint
        .then((res) => {
            setAppState({ loading: false, products: res.data.results }); // Directly storing 'results' array
            console.log(res.data.results); // Debugging the output
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            setAppState({ loading: false, products: [] }); // Error handling
        });
    }, []);

    return (
        <div className="App">
            <h1>Fine Products</h1>
            <ProductLoading isLoading={appState.loading} products={appState.products} />
        </div>
    );
}

export default App;
