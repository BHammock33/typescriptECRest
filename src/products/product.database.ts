import { Product, UnitProduct, Products } from "./product.interface";
import { v4 as random } from "uuid";
import fs from "fs";

let products: Products = loadProducts();

function loadProducts () : Products {
    try{
        const data = fs.readFileSync("./products.json", "utf-8")
        return JSON.parse(data)
    } catch(error){
        console.log(`Error ${error}`)
        return {}
    }
}

function saveProducts () {
    try{
        fs.writeFileSync("./products.json", JSON.stringify(products), "utf-8")
        console.log(`User saved Successfully`)
    } catch(error){
        console.log(`Error: ${error}`)
    }
}