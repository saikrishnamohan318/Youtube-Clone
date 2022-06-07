import React from "react";
class Searchbar extends React.Component{
    constructor(){
        super();
        this.state = {
            searchterm: ''
        }
    }
    search = (event) => {
        event.preventDefault();
        this.props.clickonSearch(this.state.searchterm)
    }
    render(){
        return(
            <div className="input-group">
                <input onChange={event =>this.setState({searchterm:event.target.value})} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-primary" onClick={this.search}>Search</button>
            </div>
        )
    }
}
export default Searchbar;