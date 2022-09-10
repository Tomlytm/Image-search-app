import React from "react";
import Searchbar from "./components/Searchbar";
import axios from 'axios'

class App extends React.Component {
    onSearchSubmit = async term=>{
      const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID HeW0teZxF6Zf8Sfo4VuvtOG64F8GpB6bM3qRDaCjSjo'
            }
            
        })
        console.log(result)
    }
    render(){
        
        return (
            <div>
                <Searchbar onSearchSubmit = {this.onSearchSubmit}/>
            </div>
        )
    }
}
export default App;