'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Artists from '../all-artists/Artists'
import ArtistsContainer from '../all-artists/ArtistsContainer'

export class Form extends React.Component {
    render() {
        return (
        <div>
              <form className="form-group" onSubmit={this.props.handleSubmit}>
                <label htmlFor="post">Filter Artists: </label>
                <input className="form-control" name="post" type="text" onChange={this.props.handleChange} />
              </form>
              <p>{this.props.input}</p>
              <ArtistsContainer input={this.props.input} />
        </div>
        )
    }
}

function FormDecorator (InnerComponent) {
    return class StatefulForm extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                input: ''
            }
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange (event) {
            this.setState({ input: event.target.value });
        }

        render () {
            return (
                <InnerComponent input={this.state.input} handleChange={this.handleChange} />
            )
        }
    }
}

const DecoratedStatefulForm = FormDecorator(Form);

export default DecoratedStatefulForm;
