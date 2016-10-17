import React from 'react'
import Link from  'react-router'

const NewPlaylistForm = function (props) {

  const handleSubmit = props.handleSubmit
  console.log(props)

  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" >Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}


function FormDecorator (InnerComponent) {
    return class StatefulForm extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                input: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange (event) {
            this.setState({ input: event.target.value });
        }

        handleSubmit (event) {
            console.log('submitted')
            event.preventDefault()
            const formInput = this.state.input;
            this.props.handleSubmit(formInput)
        }

        render () {
            return (
                <InnerComponent input={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            )
        }
    }
}

let DecoratedForm = FormDecorator(NewPlaylistForm)

export default DecoratedForm

