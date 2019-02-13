import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import RouteContext from '../RouteContext'
import { findNote } from '../notes-helpers'

export default class NotePageMain extends React.Component{
  static contextType = RouteContext;
  render() {
    const note = findNote(this.context.notes, this.props.match.params.noteId)
    return (
    <section className='NotePageMain'>
      <Note
        id={this.props.match.params.noteId}
        name={note.name}
        modified={note.modified}
      />
      <div className='NotePageMain__content'>
        {note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}
