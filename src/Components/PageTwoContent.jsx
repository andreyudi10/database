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
            console.log(response.data.data[0].data_catatan.icd_10_awal)                
            setData(response.data.data)                

        })
        .catch(function (error) {
        console.log(error);
        });                        
    }
        getData();    
  }, [])
  
  const no = data.map((value,idx)=>idx+1)
  const RM = data.map((value,idx)=>value.data_pasien.no_rm!==null?value.data_pasien.no_rm:'-')
  const no_bpjs = data.map((value,idx)=>value.data_pasien.no_bpjs!==null?value.data_pasien.no_bpjs:'-')
  const nama_pasien = data.map((value,idx)=>value.data_pasien.nama_pasien!==null?value.data_pasien.nama_pasien:'-')
  const kelamin = data.map((value,idx)=>value.data_pasien.kelamin!==null?value.data_pasien.kelamin:'-')
  const penjamin = data.map((value,idx)=>value.data_pasien.penjamin!==null?value.data_pasien.penjamin:'-')
  const umur = data.map((value,idx)=>value.data_pasien.umur!==null?value.data_pasien.umur:'-')
  const alamat_pasien = data.map((value,idx)=>value.data_pasien.alamat_1!==null?value.data_pasien.alamat_1:'-')
  const alamat_pasien2 = data.map((value,idx)=>value.data_pasien.alamat_2!==null?value.data_pasien.alamat_2:'-')
  const status = data.map((value,idx)=>value.data_pasien.status!==null?value.data_pasien.status:'-')
  const kunjungan_ke = data.map((value,idx)=>value.data_pasien.kunjungan_ke!==null?value.data_pasien.kunjungan_ke:'-')
  const id_visit = data.map((value,idx)=>value.data_visit.id_visit!==null?value.data_visit.id_visit:'-')
  const keterangan = data.map((value,idx)=>value.data_visit.keterangan_pulang!==null?value.data_visit.keterangan_pulang:'-')
  const kondisi_pulang = data.map((value,idx)=>value.data_visit.kondisi_pulang!==null?value.data_visit.kondisi_pulang:'-')
  const alasan_pulang = data.map((value,idx)=>value.data_visit.alasan_pulang!==null?value.data_visit.alasan_pulang:'-')
  const asal_pasien = data.map((value,idx)=>value.data_visit.asal_pasien!==null?value.data_visit.asal_pasien:'-')
  const nama_dpjp = data.map((value,idx)=>value.data_visit.nama_dpjp!==null?value.data_visit.nama_dpjp:'-')
  const nama_pj_ruangan = data.map((value,idx)=>value.data_visit.nama_pj_ruangan!==null?value.data_visit.nama_pj_ruangan:'-')
  const prefix_dept_asal = data.map((value,idx)=>value.data_visit.prefix_dept_asal!==null?value.data_visit.prefix_dept_asal:'-')
  const prefix_departement = data.map((value,idx)=>value.data_visit.prefix_departement!==null?value.data_visit.prefix_departement:'-')
  const tgl_checkin = data.map((value,idx)=>value.data_visit.tgl_checkin!==null?value.data_visit.tgl_checkin:'-')
  const nama_petugas_checkin = data.map((value,idx)=>value.data_visit.nama_petugas_checkin!==null?value.data_visit.nama_petugas_checkin:'-')
  const tgl_checkout = data.map((value,idx)=>value.data_visit.tgl_checkout!==null?value.data_visit.tgl_checkout:'-')
  const nama_petugas_checkout = data.map((value,idx)=>value.data_visit.nama_petugas_checkout!==null?value.data_visit.nama_petugas_checkout:'-')
  const durasi = data.map((value,idx)=>value.data_visit.durasi!==null?value.data_visit.durasi:'-')
  const waktu_pasien_tangani = data.map((value,idx)=>value.data_visit.waktu_pasien_tangani!==null?value.data_visit.waktu_pasien_tangani:'-')
  const waktu_pasien_pulang = data.map((value,idx)=>value.data_visit.waktu_pasien_pulang!==null?value.data_visit.waktu_pasien_pulang:'-')
  const icd_9 = data.map((value,idx)=>value.data_catatan.icd_9.code!==null?value.data_catatan.icd_9.code:'-')
  const icd_10_awal = data.map((value,idx)=>value.data_catatan.icd_10_awal!=={[""]:null}?value.data_catatan.icd_10_awal.code:'-')
  const icd_10_primary = data.map((value,idx)=>value.data_catatan.icd_10_primary.code!==null?value.data_catatan.icd_10_primary.code:'-')
  const icd_10_secondary = data.map((value,idx)=>value.data_catatan.icd_10_secondary.code!==null?value.data_catatan.icd_10_secondary.code:'-')


  
  // const sorting4 = sorting3.map((value,idx)=>value!==null?'isi';'null')
  let arayKosong = []
  let objekKosong = {}  
  for(let i=0;i<no.length;i++){
    objekKosong={}
    objekKosong['No']=no[i]
    objekKosong['RM']=RM[i]
    objekKosong['BPJS']=no_bpjs[i]
    objekKosong['Nama Pasien']=nama_pasien[i]
    objekKosong['Jenis Kelamin']=kelamin[i]
    objekKosong['Penjamin']=penjamin[i]
    objekKosong['Umur']=umur[i]
    objekKosong['Alamat Pasien']=`${alamat_pasien[i]}, ${alamat_pasien2[i]}`
    objekKosong['Status Pasien']=status[i]
    objekKosong['Kunjungan Ke']=kunjungan_ke[i]
    objekKosong['No Visit']=id_visit[i]
    objekKosong['Keterangan']=keterangan[i]
    objekKosong['Kondisi Pulang']=kondisi_pulang[i]
    objekKosong['Alasan Pulang']=alasan_pulang[i]
    objekKosong['Asal Pasien']=asal_pasien[i]
    objekKosong['Nama DPJP']=nama_dpjp[i]
    objekKosong['Nama Dept Asal']=prefix_dept_asal[i]
    objekKosong['Nama Dept Tujuan']=prefix_departement[i]
    objekKosong['Tanggal Checkin']=tgl_checkin[i]
    objekKosong['Nama Petugas Checkin']=nama_petugas_checkin[i]
    objekKosong['Tanggal Checkout']=tgl_checkout[i]
    objekKosong['Nama Petugas Checkout']=nama_petugas_checkout[i]
    objekKosong['Durasi']=durasi[i]
    objekKosong['Waktu Pasien Tangani']=waktu_pasien_tangani[i]
    objekKosong['Waktu Pasien Pulang']=waktu_pasien_pulang[i]
    objekKosong['ICD 10 Primary']=icd_10_primary[i]
    objekKosong['ICD 10 Secondary']=icd_10_secondary[i]
    // objekKosong['ICD 10 Awal']=icd_10_awal[i]    
    objekKosong['Icd 9']=icd_9[i]
    arayKosong.push(objekKosong)
  }

  useEffect(()=>
    console.log(data.data_catatan)    
  ,[no])

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
      <h2 style={{ textAlign: 'center' }}>Data Rumah Sakit</h2>
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
        globalSearch
        downloadExcelProps={downloadExcelProps}
        showExcelButton
      />
    </div>
  )
}

export default PageTwoContent