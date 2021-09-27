import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBarComponent from "../Components/SearchBarComponent";
import { fetchTransaction } from "../Store/Actions/transactionAction";
import { Dropdown, DropdownButton } from "react-bootstrap";
import moment from "moment";
import LoadingComponent from "../Components/LoadingComponent";
import { convertToRupiah } from "../helpers/convertToRupiah";
import { Button } from "react-bootstrap";
import "../Styles/History.css";
import PaginateComponent from "../Components/PaginateComponent";
import CharDisplayComponent from "../Components/HistoryDisplayComponent";

export default function History() {
  const [filteredName, setFilteredName] = useState("");
  const [filteredTransaction, setFilteredTransaction] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [month, setMonth] = useState("");
  const [postsPerPage] = useState(5);
  const dispatch = useDispatch();
  const { historyTransaction, isLoading } = useSelector(
    (state) => state.transactionReducer
  );

  useEffect(() => {
    dispatch(fetchTransaction(month));
  }, [month]);

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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = historyTransaction.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function filterByName(e) {
    setFilteredName(e.target.value);
    filterTransaction(e.target.value);
  }

  function filterTransaction(text) {
    let data = historyTransaction.filter((value) => {
      return value.nama_user.toLowerCase().includes(text.toLowerCase());
    });

    setFilteredTransaction(data);
  }

  return (
    <div className="History">
      <h2>Users Transaction</h2>
      <div className="SearchBar">
        <DropdownButton
          id="dropdown-basic-button"
          title={title()}
          variant="secondary"
          style={{ paddingRight: 30, marginTop: 10 }}
        >
          <Dropdown.Item onClick={() => setMonth("")}>All Months</Dropdown.Item>
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
        <SearchBarComponent filterByName={filterByName} />
      </div>
      <div className="TableHistory">
        <CharDisplayComponent
          isLoading={isLoading}
          currentPosts={filteredName ? filteredTransaction : currentPosts}
        />
      </div>

      {filteredName ? (
        <></>
      ) : (
        <div className="Paginate">
          <PaginateComponent
            postsPerPage={postsPerPage}
            totalPosts={historyTransaction.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
}
