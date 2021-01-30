import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
function PageOneContent({data}){
    React.useEffect(()=>console.log(data),[data])
    const classes = useStyles()
    return(
        <div>
            Page One Content (table)
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">RM</TableCell>
            <TableCell align="right">Nama</TableCell>            
            <TableCell align="right">Penjamin</TableCell>
            <TableCell align="right">Umur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">{row.no}</TableCell>
              <TableCell align="right">{row.RM}</TableCell>
              <TableCell align="right">{row.Nama_pasien}</TableCell>              
              <TableCell align="right">{row.Penjamin}</TableCell>
              <TableCell align="right">{row.umur}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    )
}

export default PageOneContent;