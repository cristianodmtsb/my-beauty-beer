import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import * as FavoriteActions from "../../store/modules/Favorite/actions";
import { Beer } from "./styles";

export default function SingleBeer({ match }) {
  const [singleBeer, setSingleBeer] = useState("");
  const { id } = match.params;

  const favoriteCheck = useSelector(state =>
    state.favorite.reduce((favorite, beer) => {
      favorite[beer.id] = beer.id;
      return favorite;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadBeer() {
      const response = await api.get(`/beers/${id}`);
      setSingleBeer(response.data[0]);
    }
    loadBeer();
  }, [id]);

  return (
    <Beer>
      <div className="infos-top">
        <div className="thumb">
          <img src={singleBeer.image_url} alt={singleBeer.name} />
        </div>
        <div className="infos">
          <h2>{singleBeer.name}</h2>
          <h4>{singleBeer.tagline}</h4>
          <span>
            <strong>First Brewd:</strong> {singleBeer.first_brewed}
          </span>

          <ul>
            <li>
              <strong>ABV: </strong>
              {singleBeer.abv}
            </li>
            <li>
              <strong>IBU: </strong>
              {singleBeer.ibu}%
            </li>
            <li>
              <strong>FINAL GRAVITY: </strong>
              {singleBeer.target_fg}
            </li>
            <li>
              <strong>ORIGIANL GRAVITY: </strong>
              {singleBeer.target_og}
            </li>
            <li>
              <strong>EBC: </strong>
              {singleBeer.ebc}%
            </li>
            <li>
              <strong>SRM: </strong>
              {singleBeer.srm}%
            </li>
            <li>
              <strong>PH: </strong>
              {singleBeer.ph}%
            </li>
            <li>
              <strong>ATTENUATION: </strong>
              {singleBeer.attenuation_level}%
            </li>
          </ul>
          {favoriteCheck[singleBeer.id] === singleBeer.id ? (
            <button
              onClick={() =>
                dispatch(FavoriteActions.removeFavorite(singleBeer.id))
              }
            >
              <div>
                <MdFavorite size={18} />
              </div>
              <span>Unlike</span>
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(FavoriteActions.addFavoriteRequest(singleBeer.id))
              }
            >
              <div>
                <MdFavoriteBorder size={18} />
              </div>
              <span>Like</span>
            </button>
          )}
        </div>
      </div>

      <div className="description">
        <h3>Beer Description</h3>
        <p>{singleBeer.description}</p>
      </div>
    </Beer>
  );
}
