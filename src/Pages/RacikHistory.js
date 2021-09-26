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
import RacikDisplayComponent from "../Components/RacikHistoryDisplayComponent";
import { url } from "../helpers/urlConfig";
import axios from "axios";

export default function RacikHistory() {
  const [filteredName, setFilteredName] = useState("");
  const [filteredTransaction, setFilteredTransaction] = useState("");
  const [transactionList, setTransactionList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const dispatch = useDispatch();
  const { historyTransaction, isLoading } = useSelector(
    (state) => state.transactionReducer
  );

  useEffect(() => {
    axios.get(`${url}/getRacikTransaction`)
    .then((res) => {
      setTransactionList(res.data.result)
      console.log("getRacik:", transactionList)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = transactionList.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  console.log("currentPosts:", currentPosts)
  console.log("history:", historyTransaction)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function filterByName(e) {
    setFilteredName(e.target.value);
    filterTransaction(e.target.value);
  }

  function filterTransaction(text) {
    let data = transactionList.filter((value) => {
      return value.nama.toLowerCase().includes(text.toLowerCase());
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
        <RacikDisplayComponent 
          isLoading={isLoading}
          currentPosts={filteredName ? filteredTransaction : currentPosts }
        />

      </div>

      <PaginateComponent
        postsPerPage={postsPerPage}
        totalPosts={transactionList.length}
        paginate={paginate}
      />
    </div>
  );
}
