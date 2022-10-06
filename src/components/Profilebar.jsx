import React from "react";

function ProfileBar(){
    return(
            <div className="h-16 flex justify-between items-center border-b-2">
                    <h1 className="ml-6 text-2xl font-bold">Supplier Relationship Manager</h1>
                <div className="flex items-center gap-4">
                    <p className="font-semibold">Jones Ferdinand</p>
                    <img className="w-8 mr-5" src="public\user-circle.svg"/>
                </div>
            </div>
    )
}

export default ProfileBar;