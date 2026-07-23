import React from 'react'
import {House} from 'lucide-react'
import {Clapperboard} from 'lucide-react'
import { UserSquare2, History, ListVideo, Clock3, ThumbsUp, PlaySquare, Download,} from "lucide-react";
import { ChevronRight } from "lucide-react";

const SidebarWide = () => {

const mainItems = [
  { icon: <House />, label: "Home" },
  { icon: <Clapperboard />, label: "Shorts" }
];

const subscriptions = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp0yieJ1UCOgA4aQj6hH60kz3x_3mQXSk0NErXVID9w&s=10" , label: "Apna College" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGXx3f6JHP6uYGDy4rbiLpNitkey6By8rFg1wv4kFTw&s" , label: "freeCodeCamp" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCri0t06Vt3mCMEQ2kIz5_vTJ4E1lUfj2GK5uBUoYdQ&s" , label: "BCCI" }
];

const youItems = [
  { icon: <UserSquare2 size={22} />, label: "Your channel", },
  { icon: <History size={22} />, label: "History", },
  { icon: <ListVideo size={22} />, label: "Playlists", },
  { icon: <Clock3 size={22} />, label: "Watch later", },
  { icon: <ThumbsUp size={22} />, label: "Liked videos", },
  { icon: <PlaySquare size={22} />, label: "Your videos", },
  { icon: <Download size={22} />, label: "Downloads", },
];


    return (
        <div className="h-screen px-3 py-2 overflow-y-auto scrollbar-none">

            {mainItems.map((elem,idx) => (
                <button
                    key={idx}
                    className="flex items-center gap-6 w-full p-3 rounded-xl hover:bg-zinc-800"
                >
                    {elem.icon}
                    <span>{elem.label}</span>
                </button>
            ))}

            
        <hr className="border-zinc-700 my-3"></hr>

            <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold mb-2 mt-1">Subscription</h3>
                <ChevronRight size={17} />
            </div>

            {subscriptions.map((elem,idx) => (
                <button
                    key={idx}
                    className="flex items-center gap-6 w-full p-3 rounded-xl hover:bg-zinc-800"
                >
                    <img
                        src={elem.image}
                        className="h-7 w-7 rounded-full object-cover"
                        ></img>
                    <span>{elem.label}</span>
                </button>
            ))}

        <hr className="border-zinc-700 my-3"></hr>

            <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold mb-2 mt-1">You</h3>
                <ChevronRight size={17} />
            </div>

            {youItems.map((elem,idx) => (
                <button
                    key={idx}
                    className="flex items-center gap-6 w-full p-3 rounded-xl hover:bg-zinc-800"
                >
                    {elem.icon}
                    <span>{elem.label}</span>
                </button>
            ))}

        </div>
    )
}

export default SidebarWide