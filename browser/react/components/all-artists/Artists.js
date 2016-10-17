'use strict';

import React from 'react';
import { Link } from 'react-router';

import AllArtistForm from '../newForm/AllArtistForm.js';

export default function (props) {
  const artists = props.artists;

  var re = new RegExp(props.input.toLowerCase())

  var filteredArtists = artists.filter(function(eachArtist) {
      var testing = re.test(eachArtist.name.toLowerCase());
      return testing;
  })

  return (
    <div>
      <h3>Artists</h3>
      <div className="list-group">
        {
          filteredArtists.map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}


//props.input
//index of with artists.map
