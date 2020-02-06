import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { MdFavoriteBorder, MdFavorite, MdLink } from "react-icons/md";

import * as FavoriteActions from "../../store/modules/Favorite/actions";

import { BeerList } from "./styles";

export default function Home() {
  const [beers, setBeers] = useState([]);

  const favoriteCheck = useSelector(state =>
    state.favorite.reduce((favorite, beer) => {
      favorite[beer.id] = beer.id;
      return favorite;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadBeers() {
      const response = await api.get("beers");
      setBeers(response.data);
    }

    loadBeers();
  }, []);

  return (
    <BeerList>
      {beers.map(beer => (
        <li key={beer.id}>
          <img src={beer.image_url} alt={beer.name} />
          <strong>{beer.name}</strong>
          <span>
            First Brewd: {beer.first_brewed} <br /> {beer.tagline}
          </span>
          <div className="beerActions">
            <Link to={`/beer/${beer.id}`}>
              <div>
                <MdLink size={18} />
              </div>
              <span>Details</span>
            </Link>
            {favoriteCheck[beer.id] === beer.id ? (
              <button
                onClick={() =>
                  dispatch(FavoriteActions.removeFavorite(beer.id))
                }
              >
                <div>
                  <MdFavorite size={18} color="#630404" />
                </div>
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch(FavoriteActions.addFavoriteRequest(beer.id))
                }
              >
                <div>
                  <MdFavoriteBorder size={18} />
                </div>
              </button>
            )}
          </div>
        </li>
      ))}
    </BeerList>
  );
}
