import React, { useState, useEffect } from "react";
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

    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get("https://localhost:7022/api/stores");
                setStores(response.data);
            } catch (error) {
                console.error("Store fetch error:", error);
            }
        };
        fetchStores();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleStoreSelect = (e) => {
        const selectedStore = stores.find(store => store.rowKey === e.target.value);
        if (selectedStore) {
            setFormData((prev) => ({
                ...prev,
                storeKey: selectedStore.rowKey,
                storePartitionKey: selectedStore.partitionKey
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://localhost:7022/api/Product/New Product", formData);
            alert("Product Added Successfully");
        } catch (error) {
            console.error("Post Error", error);
            alert("Error Occurred");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="m-2 p-2">
            <input name="name" placeholder="ProdName" onChange={handleChange} required />
            <input name="color" placeholder="Color" onChange={handleChange} required />
            <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
            <input name="stock" type="number" placeholder="Quantity" onChange={handleChange} required />
            <input name="partitionKey" placeholder="Partition Key" onChange={handleChange} required />

            <select onChange={handleStoreSelect} required> {/*{added options select }*/}
                <option value="">Select Store</option>
                {stores.map((store) => (
                    <option key={store.rowKey} value={store.rowKey}>
                        {store.address} - {store.cityName}, {store.countryName}
                    </option>
                ))}
            </select>

            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
