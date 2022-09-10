import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RightSide from "../rightside/RightSide";
import "./Table.css";

function createData(name, Amount, Time, Type, Status) {
  return { name, Amount, Time, Type, Status };
}

const rows = [
  createData(
    "Olgafernadez",
    `$${10000.0}`,
    new Date().toLocaleString(),
    "bonus",
    "Approved"
  ),
  createData(
    "Olgafernadez",
    `$${10000.0}`,
    new Date().toLocaleString(),
    "bonus",
    "Pending"
  ),
  createData(
    "Olgafernadez",
    `$${10000.0}`,
    new Date().toLocaleString(),
    "bonus",
    "Pending"
  ),
  createData(
    "Olgafernadez",
    `$${10000.0}`,
    new Date().toLocaleString(),
    "bonus",
    "Approved"
  ),
  createData(
    "Olgafernadez",
    `$${10000.0}`,
    new Date().toLocaleString(),
    "bonus",
    "declined"
  ),
  createData(
    "Olgafernadez",
    `$${10000.0}`,
    new Date().toLocaleString(),
    "bonus",
    "Pending"
  ),
  createData(
    "Olgafernadez",
    `$${10000.0}`,
    new Date().toLocaleString(),
    "bonus",
    "Pending"
  ),
];
const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 /47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "orange",
      color: "yellow",
    };
  } else {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  }
};

export default function BasicTable() {
  return (
    <>
      <div className="table">
        <h2>Recent Transactions</h2>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 12px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  Amount
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  Type
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  Time
                </TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.Amount}</TableCell>
                  <TableCell align="left">{row.Type}</TableCell>
                  <TableCell align="left">{row.Time}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.Status)}>
                      {row.Status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <RightSide />
    </>
  );
}
