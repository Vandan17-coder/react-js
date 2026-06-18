import React from 'react'
import Profile from './components/profile.jsx'

const App = () => {

const profiles = [
  {
    profileImage: "https://i.pravatar.cc/300?img=1",
    username: "insta.codes",
    posts: 342,
    followers: "125K",
    following: 218,
    dashboardViews: "111K views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=2",
    username: "sarah.designs",
    posts: 891,
    followers: "2.4M",
    following: 156,
    dashboardViews: "2.1M views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=3",
    username: "techwithraj",
    posts: 567,
    followers: "785K",
    following: 432,
    dashboardViews: "892K views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=4",
    username: "fitness.julia",
    posts: 1243,
    followers: "3.8M",
    following: 189,
    dashboardViews: "4.7M views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=5",
    username: "travelwithalex",
    posts: 456,
    followers: "910K",
    following: 301,
    dashboardViews: "1.3M views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=6",
    username: "coding.daily",
    posts: 289,
    followers: "64K",
    following: 127,
    dashboardViews: "95K views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=7",
    username: "foodie.lens",
    posts: 1520,
    followers: "1.9M",
    following: 412,
    dashboardViews: "3.2M views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=8",
    username: "crypto.ninja",
    posts: 678,
    followers: "540K",
    following: 98,
    dashboardViews: "740K views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=9",
    username: "movie.reviewer",
    posts: 823,
    followers: "1.2M",
    following: 245,
    dashboardViews: "1.8M views in the last 30 days."
  },
  {
    profileImage: "https://i.pravatar.cc/300?img=10",
    username: "ai.explorer",
    posts: 194,
    followers: "210K",
    following: 87,
    dashboardViews: "325K views in the last 30 days."
  }
];

  return (
    <div className="parent">
        {profiles.map(function(elem,idx){
    
    return  <div className="idx">
      <Profile image={elem.profileImage} userName={elem.username} posts={elem.posts} followers={elem.followers} following={elem.following} views={elem.dashboardViews} />
      </div>

    })}

    </div>  
  )  
}

export default App