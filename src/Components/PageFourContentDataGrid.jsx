import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
// ];


export default function PageFourDataGrid(props) {
    // const [rows, setRows] = React.useState()
    React.useEffect(()=>console.log(props.data),[props.data])
    const [data2,setData2] = React.useState(props.data)
    
    const columns = [        
        {field:'no',headerName:'no',type:'number', width:70},
        {field:'RM',headerName:'RM',type:'number', width:130},
        {field:'Jenis_Kelamin',headerName:'Jenis Kelamin', width:230},
        {field:'Penjamin',headerName:'Penjamin', width:230},
        {field:'umur',headerName:'umur',type:'number', width:130},
    ]
    //bisa ditampilkan kolom tanpa id
    const [rows,setRows] = React.useState([    
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
    
  return (
    <div style={{ height: 400, width: '100%' }}>
        {data2 ? 'ada':"tidak ada"}
      <DataGrid rows={rows} columns={columns} pageSize={[4]} rowsPerPageOptions={[5,10]} pagination={5}/>
    </div>
  );
}
