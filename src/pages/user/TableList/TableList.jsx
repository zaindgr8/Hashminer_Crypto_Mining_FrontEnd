
import React from "react";
import "./tableList.scss";

// mui table
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// import dummy image
import book1 from "../Images/book1.jpg";
import book2 from "../Images/book2.jpg";
import book3 from "../Images/book3.jpg";
import book4 from "../Images/book4.jpg";
import book5 from "../Images/book5.jpg";

function TableList() {
  // Replace this data with your own
  const data = [
    {
      _id: 23423343,
      product: "Programing Book 1",
      image: book1,
      customer: "Devid John",
      date: "3 October, 2022",
      ammount: 45,
      method: "Online Payment",
      status: "Approved",
    },
    {
      _id: 235343343,
      product: "Programing Book 2",
      image: book2,
      customer: "Julia Ani",
      date: "23 April, 2022",
      ammount: 55,
      method: "Cash On Delivery",
      status: "Pending",
    },

    
  ];

  return (
    <TableContainer component={Paper} className="table_list">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table_cell">Tracking Id</TableCell>
            <TableCell className="table_cell">Package</TableCell>
            <TableCell className="table_cell">Name</TableCell>
            <TableCell className="table_cell">Invested</TableCell>
            <TableCell className="table_cell">Date</TableCell>
            <TableCell className="table_cell">Bonus</TableCell>
            <TableCell className="table_cell">Referrals-1st</TableCell>
            <TableCell className="table_cell">Referrals-2nd</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row" className="table_cell">
                <div className="product_idd">
                  <img src={row.image} alt="product" className="product_img" />
                  {row._id}
                </div>
              </TableCell>
              <TableCell className="table_cell">{row.product}</TableCell>
              <TableCell className="table_cell">{row.customer}</TableCell>
              <TableCell className="table_cell">{row.ammount}</TableCell>
              <TableCell className="table_cell">{row.date}</TableCell>
              <TableCell className="table_cell">{row.method}</TableCell>
              <TableCell className="table_cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableList;
