import React from 'react'
import Note from './Note/Note.js'


function Grid(props) {

    let getData = JSON.parse(localStorage.getItem('noteList')) || props.notes || []
    let printNotes = getData.map( data => <Note key= {data.id} title= {data.title} text= {data.text}/>)

    return( <div className = "grid"> {printNotes} </div> )
}

export default Grid