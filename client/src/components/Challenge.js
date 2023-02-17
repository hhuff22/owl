import React, { useState } from "react";
import axios from "axios";
import ItemRow from "./ItemRow";

export default function Challenge() {
  const [lowStock, setLowStock] = useState({
    data: "",
    loading: true,
  });
  const [restockCost, setRestockCost] = useState([]);

  const handleClickLowStock = async () => {
    const data = await axios.get("http://localhost:4567/low-stock");
    setLowStock({
      data: data.data,
      loading: false,
    });
  };

  const handleClickReorderCost = async () => {
    const data = await axios.post(
      "http://localhost:4567/restock-cost",
      lowStock.data
    );
    setRestockCost(data.data);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>SKU</td>
            <td>Item Name</td>
            <td>Amount in Stock</td>
            <td>Capacity</td>
            <td>Order Amount</td>
          </tr>
        </thead>
        <tbody>
          {lowStock.loading
            ? ""
            : lowStock.data.map((item) => (
                <ItemRow
                  data-testid={"item-row"}
                  key={item.id}
                  item={item}
                  lowStock={lowStock}
                  setLowStock={setLowStock}
                />
              ))}
        </tbody>
      </table>
      <div class="totalCost" data-testid="total-cost">
        Total Cost: ${Math.round((restockCost + Number.EPSILON) * 100) / 100}
      </div>
      <button onClick={handleClickLowStock} data-testid="low-stock-button">Get Low-Stock Items</button>
      <button onClick={handleClickReorderCost} data-testid="reorder-button">Determine Re-Order Cost</button>
    </>
  );
}
