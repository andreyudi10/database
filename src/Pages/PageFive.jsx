import React from 'react'
import {Button, TableContainer, Paper, Table,TableHead,TableRow,TableCell,TableBody,makeStyles} from '@material-ui/core'


function PageFive(){

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      const classes = useStyles()
      const [isFilter,setFilter] = React.useState(false)
      const buton = () => setFilter(true)
    const [data1,setData1] = React.useState([      
        {
          "id": 4033,
          "no": 1,
          "RM": 900005,
          "BPJS": "",
          "Nama_pasien": "Andri Yudi",
          "Jenis_Kelamin": "Laki-laki",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 26
        },
        {
          "id": 110061,
          "no": 2,
          "RM": 900004,
          "BPJS": "",
          "Nama_pasien": "Yudi Andri",
          "Jenis_Kelamin": "Perempuan",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 26
        },
        {
          "id": 21954,
          "no": 3,
          "RM": 900003,
          "BPJS": "",
          "Nama_pasien": "Rian Reyes",
          "Jenis_Kelamin": "Perempuan",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 23
        },
        {
          "id": 158665,
          "no": 4,
          "RM": 900002,
          "BPJS": "",
          "Nama_pasien": "Fabregas",
          "Jenis_Kelamin": "Laki-laki",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 27
        },
        {
          "id": 394925,
          "no": 5,
          "RM": 900001,
          "BPJS": "",
          "Nama_pasien": "Nasri",
          "Jenis_Kelamin": "Laki-laki",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 26
        },
        {
          "id": 741,
          "no": 6,
          "RM": 900000,
          "BPJS": "",
          "Nama_pasien": "Wilshere",
          "Jenis_Kelamin": "Laki-laki",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 28
        },
        {
          "id": 250642,
          "no": 7,
          "RM": 899999,
          "BPJS": "",
          "Nama_pasien": "Santos",
          "Jenis_Kelamin": "Laki-laki",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 21
        },
        {
          "id": 532609,
          "no": 8,
          "RM": 899998,
          "BPJS": "",
          "Nama_pasien": "Ozil",
          "Jenis_Kelamin": "Perempuan",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 25
        },
        {
          "id": 52269,
          "no": 9,
          "RM": 899997,
          "BPJS": "",
          "Nama_pasien": "Odegard",
          "Jenis_Kelamin": "Laki-laki",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 22
        },
        {
          "id": 264462,
          "no": 10,
          "RM": 899996,
          "BPJS": "",
          "Nama_pasien": "Saka",
          "Jenis_Kelamin": "Laki-laki",
          "Penjamin": "PASIEN BAYAR SENDIRI",
          "umur": 21
        }    
    ])
    const [data2,setData2] = React.useState(data1)

    const [data3,setData3] = React.useState([   
        {
            "id": 264462,
            "no": 10,
            "RM": 899996,
            "BPJS": "",
            "Nama_pasien": "Saka",
            "Jenis_Kelamin": "Laki-laki",
            "Penjamin": "PASIEN BAYAR SENDIRI",
            "umur": 21
        }    
    ])

    React.useEffect(()=>setData2(data1),[])
    React.useEffect(()=>setData2(data3),[buton])

    const [r, setR] = React.useState(data2[0].id)

    React.useEffect(()=>setR('berubah'))

    return(
        <div>
            <Button onClick={buton}>Filter</Button>
            <Button>Batalkan Filter</Button>
            <div>{data2[0].id}</div>
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
          {data2.map((row,idx) => (
            <TableRow key={idx}>
                <TableCell align="right">tes</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )}

export default PageFive;