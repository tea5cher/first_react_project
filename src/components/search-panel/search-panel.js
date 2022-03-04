import { Component } from 'react';

import './search-panel.css';


class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onChangeVal = (e) => {
        const newTerm = e.target.value;

        this.setState({term: newTerm})

        console.log(this.state.term);
        console.log(newTerm);

        this.props.onUpdateSearch(newTerm);
    }

    render() {

        // const {onUpdateSearch} = onUpdateSearch;
        return (
            <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={(e) => this.onChangeVal(e)} />
        );
    }
    
}


export default SearchPanel;