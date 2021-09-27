import React, { useEffect, useState } from "react";
import "../Styles/Report.css";
import ListTableComponent from "../Components/ListTableComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchReport } from "../Store/Actions/transactionAction";
import { convertToRupiah } from "../helpers/convertToRupiah";
import PaginateComponent from "../Components/PaginateComponent";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Bar, Line, Pie } from "react-chartjs-2";
import moment from "moment";

export default function Report() {
  const [chart, setChart] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const { reportTransaction, filterTransactionReport } = useSelector(
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
    chartData();
    dispatch(fetchReport(month));
  }, [month]);

  function chartData() {
    setChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Total Transaction",
          data:
            filterTransactionReport.length === 0
              ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              : filterTransactionReport,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    });
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reportTransaction.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Report">
      <h2>Sales Report</h2>
      <div className="Chart">
        <Line data={chart} />
      </div>
      <div className="Dropdowns">
        <DropdownButton
          id="dropdown-basic-button"
          title={title()}
          variant="secondary"
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
      </div>
      <div className="TableBorder">
        {currentPosts.map((value) => {
          return (
            <>
              <div className="Table">
                <ListTableComponent
                  tanggal={moment(value.tanggal).format("LL")}
                  id={value.id}
                  nama_user={value.nama_user}
                  alamat={value.alamat}
                  nama={value.nama}
                  quantity={value.quantity}
                  total={convertToRupiah(value.total)}
                />
              </div>
            </>
          );
        })}

        <div className="Paginate">
          <PaginateComponent
            postsPerPage={postsPerPage}
            totalPosts={reportTransaction.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
