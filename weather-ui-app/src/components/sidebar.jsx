import React from 'react'
import { CloudRain, List, Map, Settings,} from "lucide-react";

const Sidebar = (props) => {

const Icon = props.icon;

    return (
        <div className="p-2 m-1 rounded-xl hover:bg-gray-500">
            <div className="flex flex-col  items-center">
                <Icon size={15}/>
                <p className="text-xs">{props.name}</p>
            </div>
        </div>
    )
}

export default Sidebar