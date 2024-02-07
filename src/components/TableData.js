import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material'; // Importing ShoppingBag icon
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const columns = [
  { id: 'channel', label: 'Channel', minWidth: 100 },
  { id: 'orderNo', label: 'Order No.', minWidth: 100 },
  { id: 'orderDate', label: 'Order Date', minWidth: 100 },
  { id: 'city', label: 'City', minWidth: 100 },
  { id: 'customerName', label: 'Customer Name', minWidth: 100 },
  { id: 'orderValue', label: 'Order Value', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'operation', label: 'Operation', minWidth: 100 },
];

// Function to create rows with custom data
function createData(channel, orderNo, orderDate, city, customerName, orderValue, status, operation) {
  return { channel, orderNo, orderDate, city, customerName, orderValue, status, operation };
}

// Sample data
const rows = [
  createData('ShoppingBag ', '#TKN20203754', '2022-05-04', 'Lucknow', 'Abhishek Dixit', 0.00, 'Pending', 'Actions'),
  createData('ShoppingBag ', '#TKN20203753', '2022-05-04', 'Lucknow', 'Abhishek Dixit', 0.00, 'Pending', 'Actions'),
  createData('ShoppingBag ', '#TKN20203752', '2022-05-04', 'Lucknow', 'Abhishek Dixit', 0.00, 'Pending', 'Actions'),
  // Add more rows as needed with createData function
];

export default function StickyHeadTable() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if it's a small screen
  const containerMaxHeight = isSmallScreen ? '60vh' : '80vh'; // Set max height based on screen size

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{ width: '98%', overflow: 'hidden', marginLeft: '10%' }}> {/* Adjusting marginLeft to move the table 10% to the right */}
        <TableContainer sx={{ maxHeight: containerMaxHeight }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="right" // Aligning all headers to the right
                    style={{ minWidth: column.minWidth, padding: '5px' }} // Adjusting padding to reduce space between columns
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.orderNo}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align="right" style={{ padding: '5px' }}> {/* Adjusting padding to reduce space between columns */}
                            {column.id === 'channel' ? ( // Check if it's the 'Channel' column
                              <Avatar sx={{ bgcolor: 'transparent', color: 'inherit' }}>
                                <ShoppingBag /> {/* Display ShoppingBag icon */}
                              </Avatar>
                            ) : (
                              value // Render other column values
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
