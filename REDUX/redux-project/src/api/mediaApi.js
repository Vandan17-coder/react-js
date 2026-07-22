
import axios from 'axios';
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
function fetchVideo(query,per_page=1){
   const response = axios.get('https://api.pexels.com/v1/videos',{
    params : { query:query ,per_page:per_page},
    header:{Authorization: PEXELS_KEY},
   });
}

