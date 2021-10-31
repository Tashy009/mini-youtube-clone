import React, { Component } from 'react'
import {Paper, TextField} from "@material-ui/core"

class SearchBar extends Component {
    state = {
        searchterm: '',
    }

    handleChange = (event)=> {
        this.setState({ searchterm: event.target.value})
    }

    handlesubmit = (event)=>{
        const {searchterm} = this.state 
        const {onFormSubmit} = this.props

        onFormSubmit(searchterm);

        event.preventDefault()


    }
    render() {
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handlesubmit}>
                    <TextField fullWidth label="Searching..."  onChange={this.handleChange} />
                </form> 
           </Paper>
        )
    }
}

export default SearchBar
