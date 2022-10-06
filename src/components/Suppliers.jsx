import React from "react";
import AddSupplier from "./AddSupplier"


function Suppliers(){
    return(
        <div>
            <div className="ml-5 mr-9 mt-8">
            <div className="bg-white h-14 flex justify-between items-center shadow-inner">
                <p className="ml-4 font-bold">Your Suppliers</p>  
                <div>
                <button className="bg-green-400 mr-6 p-4">Import Data</button>
                <AddSupplier></AddSupplier> 
                </div>
            </div>
            <div className="w-full height35 flex flex-col justify-center items-center border-4 border-dotted">
                <p>Your Contacts List is empty!</p>
                <p>Click here to create a new contact here</p>
            </div>
        </div>
        <div className="mt-6 text-center p-2 bg-zinc-400">
        <p className="text-white font-semibold">Kavida Technologies © 2021</p>
        </div>
        </div>
    )
}

export default Suppliers;