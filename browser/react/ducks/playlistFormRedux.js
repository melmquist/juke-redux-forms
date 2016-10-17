const CREATE_PLAYLIST = 'CREATE_PLAYLIST'
const initialPlaylist = {}


export const createPlaylist = function(playlist) {
  const action = {
    type: CREATE_PLAYLIST,
    playlist: playlist
  }
  return action
}

export default function playlistReducer (state = initialPlaylist, action) {
  switch (action.type) {
    case CREATE_PLAYLIST: return action.playlist;
    default: return state;
  }
}
