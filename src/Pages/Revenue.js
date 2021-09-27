import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRevenueTransaction } from "../Store/Actions/transactionAction";
import { convertToRupiah } from "../helpers/convertToRupiah";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../Styles/Revenue.css";

export default function Revenue() {
  const dispatch = useDispatch();
  const [month, setMonth] = useState("");
  const { revenueTransaction } = useSelector(
    (state) => state.transactionReducer
  );

  function title() {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "All Months";
    }
  }

  useEffect(() => {
    dispatch(fetchRevenueTransaction(month));
  }, [month]);

  return (
    <div className="Revenue">
      <h2>Revenue Transaction</h2>
      <div className="TableBorder">
        <div className="Dropdown">
          <DropdownButton
            id="dropdown-basic-button"
            title={title()}
            variant="secondary"
          >
            <Dropdown.Item onClick={() => setMonth("")}>
              All Months
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(1)}>January</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(2)}>February</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(3)}>March</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(4)}>April</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(5)}>May</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(6)}>June</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(7)}>July</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(8)}>August</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(9)}>September</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(10)}>October</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(11)}>November</Dropdown.Item>
            <Dropdown.Item onClick={() => setMonth(12)}>December</Dropdown.Item>
          </DropdownButton>
        </div>
        {revenueTransaction.map((val) => (
          <div className="Text">
            <h5>
              Total Transactions :{" "}
              <span style={{ float: "right" }}>
                {val.total_transaction} Transactions
              </span>
            </h5>
            <h5>
              Total Revenues :{" "}
              <span style={{ float: "right" }}>
                {convertToRupiah(val.total_revenue)}
              </span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
