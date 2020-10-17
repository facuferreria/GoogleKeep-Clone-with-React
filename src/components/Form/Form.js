import React, { Component } from 'react'
import FormComponent from './FormComp.js'
import Grid from '../Grid.js'

class Form extends Component {

    state = {
        noteTitle: '',
        noteText: '',
        form_open: false,
        notesArr: []
    }

    openForm = () => { this.setState({form_open: true}) }

    closeForm = (event) => {
        event.preventDefault() 
        this.setState({form_open: false}) 
    }

    handleChange = (event) => {
        const targetedEvent = event.target
        this.setState({[targetedEvent.name]: targetedEvent.value});
    }

    getAndSaveData = (event) => {
        event.preventDefault()
        if ((this.state.noteText || this.state.noteTitle) === '') return 

        let list = JSON.parse(localStorage.getItem('noteList')) || []
        let data = {title : this.state.noteTitle, text: this.state.noteText, id: `${list.length}`}

        list.push(data)
        this.setState({ notesArr: list })
        localStorage.setItem('noteList', JSON.stringify(list))

        this.inputForm.current.value = ''
        this.textForm.current.value = ''
    }

    render() {
        return(
            <div>
                <FormComponent 
                    data= {this.state}
                    handleChange= {this.handleChange}
                    openForm= {this.openForm}
                    getAndSaveData= {this.getAndSaveData}
                    closeForm= {this.closeForm}
                />
                <Grid notes={this.state.notesArr} />
            </div>
            
        )
    }
}

export default Form