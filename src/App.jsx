import React from "react"
import Sidebar from "./components/Sidebar"
import ProfileBar from "./components/Profilebar"
import SearchBar from "./components/Searchbar"
import Suppliers from "./components/Suppliers"

function App() {

  return (
   <div className="flex">
    <Sidebar></Sidebar>
    <div className="w-10/12 bg-zinc-100">
    <ProfileBar></ProfileBar>
    <SearchBar></SearchBar>
    <Suppliers></Suppliers>
    </div>
   </div>
  )
}

export default App
