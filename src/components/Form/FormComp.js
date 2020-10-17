import React from 'react'

function FormComponent(props) {
    
    return(
        <div className= "formDiv" onFocus= {props.openForm}>
            <form className= "form">
                <input
                    type= "text"
                    name= "noteTitle" 
                    className= {props.data.form_open ? `form-title open` : "form-title" }
                    onChange= {props.handleChange} 
                    placeholder= "Title" 
                />

                <textarea
                    type= "text"
                    name= "noteText" 
                    className= {props.data.form_open ? `form-text open` : "form-text" }
                    onChange= {props.handleChange} 
                    placeholder= "Create a note..." 
                />

                <div className= {props.data.form_open ? `note-options open` : "note-options" }>
                    
                    <button className= "note-btn" onClick={props.getAndSaveData}>Save Note</button>
                    <button className= "note-btn" onClick= {props.closeForm}>Close</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent