import axios from "axios";
import React from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData : IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product : IProduct) => void
}

const CreateProduct = ({onCreate} : CreateProductProps) =>{
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('')
    const SubmitHandler = async (e : React.FormEvent) =>{
        e.preventDefault();
        setError('');
        if (value.trim().length === 0){
            setError('Please enter valid title')
            return;
        }
        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data);
    }
    const ChangeHandler = 
        (event : React.ChangeEvent<HTMLInputElement>) =>{
            setValue(event.target.value)
        }
    return(
        <form onSubmit={SubmitHandler}>
            <input 
            type="text"
            className="border py-2 px-4 mb-2 w-full"
            placeholder="Enter product title..."
            value={value}
            onChange={ChangeHandler}
             />
             {error && <ErrorMessage error={error}/>}
             <button type="submit" className=" hover:bg-cyan-400 py-2 px-4 border bg-yellow-400">Create</button>
        </form>
    )
}
export default CreateProduct