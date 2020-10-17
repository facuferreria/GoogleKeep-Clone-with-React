import React from 'react'

function NoteComponent (props) {
    return(
        <div className= "note" key= {props.id}>
            <h2 className= "note-title">{props.title}</h2>
            <p className= "note-text" ref= {props.textStyle}>{props.text}</p>
            <div className= "option-bar">
                <select className= "fonts" 
                    name="fonts" 
                    value={props.data.value} 
                    onChange={props.handleChange}
                >
                    <option value="montserrat">Montserrat</option>
                    <option value="arial">Arial</option>
                    <option value="roboto">Roboto</option>
                    <option value="calibri">Calibri</option>
                </select>
                <i aria-label= "bold" className="fas fa-bold" onClick={props.handleChange}></i>
                <i aria-label= "underline" className="fas fa-underline" onClick={props.handleChange}></i>
                <i aria-label= "italic" className="fas fa-italic" onClick={props.handleChange}></i>
                <i className="fas fa-trash-alt" onClick={props.deleteNote}></i>
            </div>
        </div>
    )
}

export default NoteComponent