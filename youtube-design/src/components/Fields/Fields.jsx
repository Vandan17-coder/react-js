import React from 'react'
import FieldsName from './FieldsName'

const Fields = () => {

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "Java" },
  { id: 4, name: "Data Structures" },
  { id: 5, name: "Music" },
  { id: 6, name: "Software Testing" },
  { id: 7, name: "Live" },
  { id: 8, name: "Databases" },
  { id: 9, name: "Marvel Cinematic Universe" },
  { id: 10, name: "Podcasts" },
  { id: 11, name: "Google" },
  { id: 12, name: "Gaming" },
  { id: 13, name: "Mixes" },
  { id: 14, name: "Wickets" },
  { id: 15, name: "Job Interviews" },
  { id: 16, name: "Operating Systems" },
  { id: 17, name: "Thoughts" }
];

    return (
        <div className='flex h-15 gap-3 items-center whitespace-nowrap overflow-x-auto scrollbar-none'>
            {categories.map(function(elem,idx){
                return <FieldsName key={idx} cat={elem.name}/>
            })}
        </div>
    )
}

export default Fields