import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { MdFavoriteBorder, MdFavorite, MdLink } from "react-icons/md";

import * as FavoriteActions from "../../store/modules/Favorite/actions";
import { BeerList } from "./styles";

class Home extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    const response = await api.get("beers");

    this.setState({ beers: response.data });
  }

  handleFavor = id => {
    const { addFavoriteRequest } = this.props;

    addFavoriteRequest(id);
  };

  handleDisfavor = id => {
    const { removeFavorite } = this.props;

    removeFavorite(id);
  };

  render() {
    const { favoriteCheck } = this.props;

    return (
      <BeerList>
        {this.state.beers.map(beer => (
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
                <button onClick={() => this.handleDisfavor(beer.id)}>
                  <div>
                    <MdFavorite size={18} color="#630404" />
                  </div>
                </button>
              ) : (
                <button onClick={() => this.handleFavor(beer.id)}>
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
}

const mapStateToProps = state => ({
  favoriteCheck: state.favorite.reduce((favorite, beer) => {
    favorite[beer.id] = beer.id;
    return favorite;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
