import React from 'react'

const Card =  (props) => {

    return(
        <div className="card">
            <img src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"></img>
            <h1>{props.userName} {props.surName}</h1>
            <p>Full-Stack developer</p>
        </div>
    )
}

export default Card