import React, { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        price: 0,
        stock: 0,
        partitionKey: "",
        storeKey: "",
        storePartitionKey: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://localhost:7022/api/Product/New Product", formData); 
            alert("Product Added Successfully");
        } catch (error) {
            console.error("Post Error", error);
            alert("Error Ecorred");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="m-2 p-2">
            <input name="name" placeholder="ProdName" onChange={handleChange} required />
            <input name="color" placeholder="Color" onChange={handleChange} required />
            <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
            <input name="stock" type="number" placeholder="Quantity" onChange={handleChange} required />
            <input name="partitionKey" placeholder="Partition Key" onChange={handleChange} required />
            <input name="storeKey" placeholder="Store Key" onChange={handleChange} required />
            <input name="storePartitionKey" placeholder="Store Partition Key" onChange={handleChange} required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
