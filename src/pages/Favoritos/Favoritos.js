import React from "react";
import { MdDelete } from "react-icons/md";

import { BeerTable } from "./styles";

export default function Favoritos() {
  return (
    <BeerTable>
      <thead>
        <tr>
          <th />
          <th>Cerveja</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="https://images.punkapi.com/v2/2.png" alt="" />
          </td>
          <td>
            <strong>Trashy Blonde</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tr>
      </tbody>
    </BeerTable>
  );
}
