import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import api from "../../services/api";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

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

  handleFavor = beer => {
    const { addFavorite } = this.props;

    this.setState(addFavorite(beer));
  };

  handleDisfavor = beer => {
    const { removeFavorite } = this.props;

    this.setState(removeFavorite(beer));
  };

  render() {
    const { favoriteCheck } = this.props;

    return (
      <BeerList>
        {this.state.beers.map(beer => (
          <li key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <strong>{beer.name}</strong>
            <span>First Brewd: {beer.first_brewed}</span>
            <span>{beer.tagline}</span>

            {favoriteCheck[beer.id] === beer.id ? (
              <button onClick={() => this.handleDisfavor(beer.id)}>
                <div>
                  <MdFavorite size={18} />
                </div>
                <span>Desfavoritar</span>
              </button>
            ) : (
              <button onClick={() => this.handleFavor(beer)}>
                <div>
                  <MdFavoriteBorder size={18} />
                </div>
                <span>Favoritar</span>
              </button>
            )}
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
