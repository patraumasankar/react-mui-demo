import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Peggi",
    last_name: "Digan",
    email: "pdigan0@facebook.com",
    gender: "Female",
    ip_address: "250.254.190.106",
  },
  {
    id: 2,
    first_name: "Reinhard",
    last_name: "Peeke-Vout",
    email: "rpeekevout1@deliciousdays.com",
    gender: "Male",
    ip_address: "121.58.149.15",
  },
  {
    id: 3,
    first_name: "Alard",
    last_name: "Cockerham",
    email: "acockerham2@fda.gov",
    gender: "Male",
    ip_address: "116.98.142.43",
  },
  {
    id: 4,
    first_name: "Becki",
    last_name: "Pelcheur",
    email: "bpelcheur3@altervista.org",
    gender: "Bigender",
    ip_address: "1.160.189.212",
  },
  {
    id: 5,
    first_name: "Almire",
    last_name: "Bernardinelli",
    email: "abernardinelli4@dagondesign.com",
    gender: "Female",
    ip_address: "81.157.183.149",
  },
  {
    id: 6,
    first_name: "Ozzy",
    last_name: "Crilly",
    email: "ocrilly5@istockphoto.com",
    gender: "Male",
    ip_address: "116.210.120.156",
  },
  {
    id: 7,
    first_name: "Alexandro",
    last_name: "Gwyther",
    email: "agwyther6@elpais.com",
    gender: "Male",
    ip_address: "176.179.67.229",
  },
  {
    id: 8,
    first_name: "Art",
    last_name: "Worstall",
    email: "aworstall7@cdbaby.com",
    gender: "Male",
    ip_address: "109.48.178.177",
  },
  {
    id: 9,
    first_name: "Bryce",
    last_name: "Folling",
    email: "bfolling8@ted.com",
    gender: "Male",
    ip_address: "109.213.84.193",
  },
  {
    id: 10,
    first_name: "Romonda",
    last_name: "Glandon",
    email: "rglandon9@hc360.com",
    gender: "Female",
    ip_address: "67.54.207.56",
  },
];
