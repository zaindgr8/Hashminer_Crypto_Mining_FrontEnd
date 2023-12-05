
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import man1 from "../Images/man1.jpg";
import man2 from "../Images/man2.jpg";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./datatable.scss";

// Replace this data with your own
const userData = [
 {
    id: "Tom",
    totalInvestment:"2000",
    totalBonus: "500",
    dailyWithdrawl: "50",
    image: man1,
    firstReferrals: "30",
    secondReferrals: "20",
    otherReferrals: "10",
  },
  {
    id: "John",
    totalInvestment:"2000",
    totalBonus: "500",
    dailyWithdrawl: "50",
    image: man2,
    firstReferrals: "30",
    secondReferrals: "20",
    otherReferrals: "10",
  },

];

function DataTable() {
  const [data, setData] = useState(userData);

  const handleDlt = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 310,
      renderCell: (param) => (
        <div className="userr">
          <img src={param.row.image} alt="User Image" className="userr_image" />
          {param.row.id}
        </div>
      ),
    },
    {
      field: "totalInvestment",
      headerName: "Total Investment",
      width: 180,
    },
    {
      field: "dailyWithdrawl",
      headerName: "Daily Withdrawl",
      width: 180,
    },
    { field: "totalBonus", headerName: "Total Bonus", width: 280 },
    {
      field: "firstReferrals",
      headerName: "1st Referrals",
      width: 150,
    },
    {
      field: "secondReferrals",
      headerName: "2nd Referrals",
      width: 150,
    },
    {
      field: "otherReferrals",
      headerName: "Other Referrals",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => (
        <div className="actionn">
          <button
            type="button"
            className="delete_btn"
            onClick={() => handleDlt(params.row.id)}
          >
            Stop Withdrawl
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="details">
      <div className="home_sidebar">
        <Sidebar />
      </div>
      <div className="detail_page_main">
        <Navbar />
      <div className="data_table">
        <DataGrid
          className="data_grid"
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
        />
      </div>
    </div>
    </div>
  );
}

export default DataTable;
