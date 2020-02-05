import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import api from "../../services/api";
import { MdFavoriteBorder } from "react-icons/md";

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

  handleFavorite = beer => {
    const { addFavorite } = this.props;

    this.setState(addFavorite(beer));
  };

  render() {
    return (
      <BeerList>
        {this.state.beers.map(beer => (
          <li key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <strong>{beer.name}</strong>
            <span>First Brewd: {beer.first_brewed}</span>
            <span>{beer.tagline}</span>
            <button onClick={() => this.handleFavorite(beer)}>
              <div>
                <MdFavoriteBorder size={18} />
              </div>
              <span>Favoritar</span>
            </button>
          </li>
        ))}
      </BeerList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
