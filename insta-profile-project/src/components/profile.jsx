import React from 'react'
import {UserPlus} from 'lucide-react'

const Profile = (props) => {

    return (
    
        <div className="instaId">

            <div className="user">
                <div className="image">
                    <img src={props.image}></img>
                </div>

                <div className="info">

                    <h3>{props.userName}</h3>
                
                <div className="stats">
                    
                    <div>
                        <p>{props.posts}</p>
                        <p>posts</p>
                    </div>

                    <div>
                        <p>{props.followers}</p>
                        <p>Followers</p>
                    </div>

                    <div>
                        <p>{props.following}</p>
                        <p>Following</p>
                    </div>

                </div>
            </div>
        </div>   

        <div className="dashboard">
            <button>
                <p>Your dashboard</p>
                <p className="views">{props.views}</p>
            </button>        
        </div>  

            <div className="bottom">
                <div className="profile-btn">
                    <button>Edit profile</button>
                    <button>Share profile</button>
                </div>    
                
                <div className="add-friend">
                    <button><UserPlus /></button>
                </div>
            </div>

        </div>    
    )
}

export default Profile