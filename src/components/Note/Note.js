import React, { Component } from 'react'
import NoteComponent from './NoteComp'

class Note extends Component {

    constructor(){
        super()
        this.textStyle = React.createRef()
    }

    state= {
        bold: false,
        value: '',
        underline: false,
        italic: false,
        pinned: false,
    }

    handleChange = (event) => {
        const textRef = this.textStyle.current.style
        const targetedEvent = event.target

        if (targetedEvent.name === "fonts") {
            this.setState({value: targetedEvent.value});
            textRef.fontFamily = this.state.value
        } 
        
        else {
            
            if (targetedEvent.ariaLabel === "bold") {
                this.setState(({ [targetedEvent.ariaLabel]: !this.state.bold })) 
                return this.state.bold ? textRef.fontWeight = "bold" : textRef.fontWeight = "normal"
            }
            if (targetedEvent.ariaLabel === "underline") {
                this.setState(({ [targetedEvent.ariaLabel]: !this.state.underline }))
                return this.state.underline ? textRef.textDecoration = "underline" 
                                            : textRef.textDecoration = "none"
            }
            if (targetedEvent.ariaLabel === "italic") {
                this.setState(({ [targetedEvent.ariaLabel]: !this.state.italic }))
                return this.state.italic ? textRef.fontStyle = "italic" 
                                         : textRef.fontStyle = "normal"
            }
            else { console.log("NO EXISTE ESA OPCION") }
        }    
    }
    
    deleteNote = (event) => {
        let oldNote = event.target.parentNode.parentNode
        let newList = JSON.parse(localStorage.getItem('noteList'))
        let index = newList.findIndex(el => el.text === this.props.text)
        oldNote.remove()
        newList.splice(index, 1)
        localStorage.setItem('noteList', JSON.stringify(newList))
    }

    render() {
        return(
            <NoteComponent 
                textStyle = {this.textStyle}
                data = {this.state}
                handleChange = {this.handleChange}
                deleteNote = {this.deleteNote}
                text = {this.props.text}
                title = {this.props.title}
                id = {this.props.id}
            />
        )
    }
}

export default Note