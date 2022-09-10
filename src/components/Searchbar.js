import React from "react";
class Searchbar extends React.Component{
state={term: ''}
onInputChange =(e)=>{
    this.setState({term:e.target.value})
}
onFormSubmit = (e)=> {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.term)
}
    render(){
        return(
            <div className="ui container">
                <div className="ui action input">
                    <form 
                        className="ui form"
                        onSubmit={this.onFormSubmit}
                        >
                        <input 
                            type="text" 
                            placeholder="Search..."
                            onChange={this.onInputChange}
                            value={this.state.term}
                            />
                    </form>
                </div>
            </div>

    )
}
}
export default Searchbar;