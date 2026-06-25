import React from 'react'
import ContentGrid from './ContentGrid'

const Content = () => {

const videos = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/ZxKM3DCV2kE/hqdefault.jpg",
    title: "ReactJS Full Course | ReactJS - Learn Everything",
    channel: "Sheryians Coding School",
    views: "1.5M",
    uploaded: "8 months ago",
    profile: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg",
    title: "JavaScript Complete Course for Beginners",
    channel: "Apna College",
    views: "2.3M",
    uploaded: "1 year ago",
    profile: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    thumbnail: "https://i.ytimg.com/vi/HcOc7P5BMi4/hqdefault.jpg",
    title: "Complete Java DSA Course",
    channel: "CodeWithHarry",
    views: "4.8M",
    uploaded: "2 years ago",
    profile: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 4,
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    title: "Learn React in One Video",
    channel: "Programming with Mosh",
    views: "3.1M",
    uploaded: "1 year ago",
    profile: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 5,
    thumbnail: "https://i.ytimg.com/vi/BLl32FvcdVM/hqdefault.jpg",
    title: "Node.js Crash Course",
    channel: "Traversy Media",
    views: "2M",
    uploaded: "10 months ago",
    profile: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 6,
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    title: "JavaScript Tutorial for Beginners",
    channel: "Programming with Mosh",
    views: "7.2M",
    uploaded: "3 years ago",
    profile: "https://i.pravatar.cc/150?img=16"
  },
  {
    id: 7,
    thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
    title: "Tailwind CSS Full Course",
    channel: "freeCodeCamp.org",
    views: "1.8M",
    uploaded: "11 months ago",
    profile: "https://i.pravatar.cc/150?img=17"
  },
  {
    id: 8,
    thumbnail: "https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg",
    title: "Git & GitHub Crash Course",
    channel: "Traversy Media",
    views: "5.4M",
    uploaded: "4 years ago",
    profile: "https://i.pravatar.cc/150?img=18"
  },
  {
  id: 9,
  thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvThhPGFMjmP2S2dCHaCYN1z6EgKraWFP2o4spRXXInA&s=10",
  title: "Bigges Forest In the World | Water Flow | Flow With Nature",
  channel: "Flow With Nature",
  views: "1.5M",
  uploaded: "8 months ago",
  profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10"
}
];    
    
    return (
        <div className='grid grid-cols-3 gap-5 p-5 w-full overflow-x-hidden'>
            {videos.map(function(elem,idx){
                return <ContentGrid key={idx} thumbnail={elem.thumbnail} title={elem.title} channel={elem.channel} views={elem.views} uploaded={elem.uploaded} profile={elem.profile}/>
            })}
        </div>
    )
}

export default Content