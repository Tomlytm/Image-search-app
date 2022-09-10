import React from "react";
import Searchbar from "./components/Searchbar";
import ImageList from "./components/ImageList";
import axios from 'axios'

class App extends React.Component {
    state = {pics: []}
    onSearchSubmit = async term=>{
      const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID HeW0teZxF6Zf8Sfo4VuvtOG64F8GpB6bM3qRDaCjSjo'
            }
            
        })
        this.setState({pics:result.data.results})
    }
    render(){
        
        return (
            <div>
                <Searchbar onSearchSubmit = {this.onSearchSubmit}/>
                <p>you have {this.state.pics.length} results</p>
                <ImageList pics={this.state.pics}/>
            </div>
        )
    }
}
export default App;