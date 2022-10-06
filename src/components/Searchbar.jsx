import React from "react";

function SearchBar(){
    return(
        <div className="ml-5 mt-6">
        <h1 className="w-4/12">Manage all your supplier contacts and your interaction history within this page</h1>
            <div className="mt-5 p-1 w-96 flex items-center border-2 border-black">
                <img className="w-8" src="public\search.svg"/>
                <input className="ml-4 w-80 bg-zinc-100 outline-none" type="text" placeholder="search for a supplier" />
            </div>
            <div className="mt-7 flex border-b">
                <p className="text text-lg font-bold w-40 border-b-2 border-black">Suppliers</p>
                <p className="text text-lg w-40 pl-6">Contacts</p>
                <p className="text text-lg w-40 pl-6">Purchase Orders</p>
            </div>
        </div>
    )
}

export default SearchBar;