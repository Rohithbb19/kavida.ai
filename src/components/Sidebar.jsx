import React from "react";

function Sidebar(){
    return(
        <div className="bg-neutral-800 w-2/12 ">
            <div className="flex justify-center items-end">
                <img className="mt-5 w-12" src="public\kavida.png"/>
                <h3 className="text-white font-bold text-xl ml-2">kavida.ai</h3>
            </div>
            <div className="flex flex-col">
            <div className="mt-10 p-4 flex items-center">
                <img className=" w-8" src="public\file-graph.svg"/>
                <h4 className="text-white text-sm font-bold ml-2">Command Center</h4>
            </div>
            <div className="p-4 flex items-center">
                <img className=" w-8" src="public\chart-pie-alt.svg"/>
                <h4 className="text-white text-sm font-bold ml-2">Overview</h4>
            </div>
            <div className="p-4 flex items-center">
                <img className=" w-8" src="public\university.svg"/>
                <h4 className="text-white text-sm font-bold ml-2">Supplier Financial Risk</h4>
            </div>
            <div className="p-4 flex items-center">
                <img className=" w-8" src="public\layer-group.svg"/>
                <h4 className="text-white text-sm font-bold ml-2">Intelligence</h4>
            </div>
            <div className="p-4 flex items-center bg-zinc-600">
                <img className="w-8" src="public\file-contract.svg"/>
                <h4 className="text-white text-sm font-bold ml-2">Supplier Relationship Manager</h4>
            </div>
            <div className="p-4 flex items-center">
                <img className=" w-8" src="public\setting.svg"/>
                <h4 className="text-white text-sm font-bold ml-2">Settings</h4>
            </div>
            </div>
        </div>
    )
}

export default Sidebar;