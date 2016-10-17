import { connect } from 'react-redux'
import DecoratedForm from './playlistForm'
import { createPlaylist } from '../../ducks/playlistFormRedux'


const mapDispatchToProps = function(dispatch) {

  return {
    handleSubmit: function(playlistFormInput) {
      dispatch(createPlaylist(playlistFormInput))
    }
  }

}

const playlistFormContainer = connect(null, mapDispatchToProps)(DecoratedForm)

export default playlistFormContainer
