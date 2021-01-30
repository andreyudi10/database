import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import React,{ useState, useEffect } from 'react';

function App() {
  const [data,setData] = useState([    
      {
        "no": 1,
        "RM": "00900005",
        "BPJS": "",
        "Nama_pasien": "Andri Yudi",
        "Jenis_Kelamin": "Laki-laki",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 26
      },
      {
        "no": 2,
        "RM": "00900004",
        "BPJS": "",
        "Nama_pasien": "Yudi Andri",
        "Jenis_Kelamin": "Perempuan",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 26
      },
      {
        "no": 3,
        "RM": "00900003",
        "BPJS": "",
        "Nama_pasien": "Rian Reyes",
        "Jenis_Kelamin": "Perempuan",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 23
      },
      {
        "no": 4,
        "RM": "00900002",
        "BPJS": "",
        "Nama_pasien": "Fabregas",
        "Jenis_Kelamin": "Laki-laki",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 27
      },
      {
        "no": 5,
        "RM": "00900001",
        "BPJS": "",
        "Nama_pasien": "Nasri",
        "Jenis_Kelamin": "Laki-laki",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 26
      },
      {
        "no": 6,
        "RM": "00900000",
        "BPJS": "",
        "Nama_pasien": "Wilshere",
        "Jenis_Kelamin": "Laki-laki",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 28
      },
      {
        "no": 7,
        "RM": "00899999",
        "BPJS": "",
        "Nama_pasien": "Santos",
        "Jenis_Kelamin": "Laki-laki",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 21
      },
      {
        "no": 8,
        "RM": "00899998",
        "BPJS": "",
        "Nama_pasien": "Ozil",
        "Jenis_Kelamin": "Perempuan",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 25
      },
      {
        "no": 9,
        "RM": "00899997",
        "BPJS": "",
        "Nama_pasien": "Odegard",
        "Jenis_Kelamin": "Laki-laki",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 22
      },
      {
        "no": 10,
        "RM": "00899996",
        "BPJS": "",
        "Nama_pasien": "Saka",
        "Jenis_Kelamin": "Laki-laki",
        "Penjamin": "PASIEN BAYAR SENDIRI",
        "umur": 21
      }    
  ])

  useEffect(()=>
    console.log('kosong'),[]
  )
  useEffect(()=>
    console.log(data),[data]
  )

  return (
    <div className="App">
      <Router>
        Hello World        
        <Button variant="contained" color="secondary">halo dunia
        </Button> 
        <br />
        <br />

        <Link to="/">ke halaman 1</Link>
        <Link to="2">ke halaman 2</Link>
        <Link to="3">ke halaman 3</Link>

        <Switch>
          <Route path="/2">
            <PageTwo />
          </Route>
          <Route path="/3">
            <PageThree data={data}/>
          </Route>
          <Route path="/">
            <PageOne data={data}/>
          </Route>
        </Switch>

        

      </Router>
    </div>
  );
}

export default App;
