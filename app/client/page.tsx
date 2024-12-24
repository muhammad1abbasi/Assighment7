"use client";

import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const ClientPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products"); // Corrected 'responce' to 'response'
            const data: Product[] = await response.json();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="w-full p-4 bg-blue-600 text-white">
                <h1 className="text-2xl font-bold text-center">Client-Side Data Fetching</h1>
            </nav>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded shadow p-4 flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-32 h-32 object-cover mb-4"
                        />
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-500">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientPage;
