import React, { useState, useEffect } from 'react'
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'
import axios from 'axios';
import deleteIcon from '../Components/logo192.png'
import editIcon from '../Components/logo192.png'


const PageTwoContent = () => {
  const [caseSensivite, setCaseSensivite] = useState(false)
  const [sortable, setSortable] = useState(true)
  const [filterable, setFilterable] = useState(true)
  const [data, setData] = useState([])
  const [downloadExcelProps, setDownloadExcelProps] = useState({
    type: 'all',
    title: 'test',
    showLabel: true
  })
  useEffect(() => {
    var axios = require('axios');    
    var config = {
        method: 'get',
        url: 'https://laporan.vklaim.com/ci_laporan/870_laporan_sensus_igd?dept_prefix=C&jenis_periode=1&periode_start=2021-01-29&periode_end=2021-01-29&is_reg_del_date_null=1&is_visit_del_date_null=1&offset=0&limit=10&search=&',
        headers: { 
            'x-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTkFNQSAyIiwiaWRfdXNlciI6IjM3MzY4MSIsInJtX251bWJlciI6ImFkbWluIiwicnNfa2V5IjoiQTEyMyIsImlwX2FkZHJlc3MiOiIxMjcuMC4xLjEiLCJhY2Nlc3MiOiJ1c2VyIn0.ubW6fyc7ErYOW2T5qFbjXvLIVTLp05s3A0paQ6wfcmo'
        }
    };
    const getData = async () => {
        const datas = await axios(config)
        .then(function (response) {                                
            console.log(response.data.data)                
            setData(response.data.data)    

        })
        .catch(function (error) {
        console.log(error);
        });                        
    }
        getData();    
  }, [])
  
  const sorting = data.map((value,idx)=>value.data_pasien.umur)
  const sorting2 = data.map((value,idx)=>value.data_pasien.nama_pasien!==null?value.data_pasien.nama_pasien:'zero')
  const sorting3 = data.map((value,idx)=>value.data_catatan.icd_9.code!==null?value.data_catatan.icd_9.code:'-')
  // const sorting4 = sorting3.map((value,idx)=>value!==null?'isi';'null')
  let arayKosong = []
  let objekKosong = {}  
  for(let i=0;i<sorting.length;i++){
    objekKosong={}
    objekKosong['makan']=sorting[i]
    objekKosong['minum']=sorting2[i]
    objekKosong['medok']=sorting3[i]
    arayKosong.push(objekKosong)
  }

  useEffect(()=>
    console.log(data,arayKosong)    
  ,[sorting])



  const additionalCols = [
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            <img
              src={deleteIcon}
              alt='delete'
              width='30'
              height='20'
              onClick={() => alert('this is delete for id ' + data.id)}
            />
            <img
              src={editIcon}
              alt='edit'
              width='30'
              height='20'
              onClick={() => alert('this is edit for id ' + data.id)}
            />
          </div>
        )
      }
    }
  ]
  const columns = [
    {
      header: 'name',
      key: 'user.name'
    },
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            <img
              src={deleteIcon}
              alt='delete'
              width='30'
              height='20'
              onClick={() => alert('this is delete for id ' + data.id)}
            />
            <img
              src={editIcon}
              alt='edit'
              width='30'
              height='20'
              onClick={() => alert('this is edit for id ' + data.id)}
            />
          </div>
        )
      }
    }
  ]
  const editDownloadProps = (e) => {
    let newProps = { ...downloadExcelProps }

    newProps[e.target.name] = e.target.value
    setDownloadExcelProps(newProps)
  }
  const editDownloadPropsCheckBox = (e) => {
    let newProps = { ...downloadExcelProps }

    newProps[e.target.name] = e.target.checked
    setDownloadExcelProps(newProps)
  }
  return (
    <div style={{ margin: '30px' }}>
      <h2 style={{ textAlign: 'center' }}>react-flexy-table</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '30px' }}>
          <label>Handle search case sensivite</label>
          <select
            onChange={(e) => setCaseSensivite(e.target.value === 'true')}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={caseSensivite}
          >
            <option value={false}>Close</option>
            <option value={true}>Open</option>
          </select>
        </div>
        <div style={{ margin: '30px' }}>
          <label>Handle sortable</label>
          <select
            onChange={(e) => setSortable(e.target.value === 'true')}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={sortable}
          >
            <option value={false}>Close</option>
            <option value={true}>Open</option>
          </select>
        </div>
        <div style={{ margin: '30px' }}>
          <label>Handle filterable</label>
          <select
            onChange={(e) => setFilterable(e.target.value === 'true')}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={filterable}
          >
            <option value={false}>Close</option>
            <option value={true}>Open</option>
          </select>
        </div>

        <div style={{ margin: '30px' }}>
          <label>Download Excel Type</label>
          <select
            onChange={editDownloadProps}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={downloadExcelProps.type}
            name='type'
          >
            <option value={'filtered'}>Filtered</option>
            <option value={'paged'}>Paged</option>
            <option value={'all'}>All</option>
          </select>
        </div>

        <div style={{ margin: '30px' }}>
          <label>Download Excel Show Label</label>
          <input
            type='checkbox'
            onChange={editDownloadPropsCheckBox}
            style={{ marginLeft: '10px', padding: '5px' }}
            checked={downloadExcelProps.showLabel}
            name='showLabel'
          />
        </div>
        <div style={{ margin: '30px' }}>
          <label>Download Excel title</label>
          <input
            type='text'
            onChange={editDownloadProps}
            style={{ marginLeft: '10px', padding: '5px' }}
            value={downloadExcelProps.title}
            name='title'
          />
        </div>
      </div>
      <ReactFlexyTable
        data={arayKosong}
        sortable={sortable}
        filterable={filterable}
        caseSensitive={caseSensivite}
        additionalCols={additionalCols}
        globalSearch
        downloadExcelProps={downloadExcelProps}
        showExcelButton
      />
    </div>
  )
}

export default PageTwoContent