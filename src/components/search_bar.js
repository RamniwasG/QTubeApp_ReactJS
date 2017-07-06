import React, {Component} from 'react';

//class based component
class SearchBar extends Component{

    constructor(props){
      super(props);
      this.state={ term: ' '};
    }

    render(){
      //console.log(this.props.selectedVideo);
      return(
        <div className="search-bar">
          <h1>Qtube.com</h1>
           <input
           className="form-control"
            value={this.props.term}
            onChange={ e => this.onInputChange(e.target.value)}
           />
         </div>
       );
    }
    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
