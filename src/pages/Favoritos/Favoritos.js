import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MdDelete } from "react-icons/md";
import * as FavoriteActions from "../../store/modules/Favorite/actions";

import { BeerTable } from "./styles";

function Favoritos({ favorite, removeFavorite }) {
  return (
    <PersistGate persistor={persistor}>
      <BeerTable>
        <thead>
          <tr>
            <th />
            <th>Cerveja</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {favorite.map(beer => (
            <tr key={beer.id}>
              <td>
                <img src={beer.image_url} alt="" />
              </td>
              <td>
                <strong>{beer.name}</strong>
              </td>
              <td>
                <button type="button" onClick={() => removeFavorite(beer.id)}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </BeerTable>
    </PersistGate>
  );
}

const mapStateToProps = state => ({
  favorite: state.favorite
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);
