import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../Components/TableComponent";
import SearchBarComponent from "../Components/SearchBarComponent";
import { fetchTransaction } from "../Store/Actions/transactionAction";
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
  const [postsPerPage] = useState(5);
  const dispatch = useDispatch();
  const { historyTransaction, isLoading } = useSelector(
    (state) => state.transactionReducer
  );

  useEffect(() => {
    const fetchTransactions = () => {
      dispatch(fetchTransaction());
    };

    fetchTransactions();
  }, []);

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
        <SearchBarComponent filterByName={filterByName} />
      </div>
      {/* <Button className="DateFilter" variant="outline-secondary">
        Date
      </Button> */}
      <div className="TableHistory">
        <CharDisplayComponent 
          isLoading={isLoading}
          currentPosts={filteredName ? filteredTransaction : currentPosts }
        />

      </div>

      <PaginateComponent
        postsPerPage={postsPerPage}
        totalPosts={historyTransaction.length}
        paginate={paginate}
      />
    </div>
  );
}
