import React, {useEffect,useState} from 'react'
import axios from 'axios';

const PageOneContent = () =>{
    const [dataApi, setDataApi] = useState([])
    useEffect(()=>{                
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
                console.log(response.data)                
                setDataApi(response.data.data)                
            })
            .catch(function (error) {
            console.log(error);
            });                        
        }
            getData();
        }, [])    

    useEffect(()=>console.log('efek2',dataApi[0]?.data_pasien?.nama_pasien));

    return(
        <div>
            Page One
            {dataApi[0]?.data_pasien?.nama_pasien}
        </div>
    )
}

export default PageOneContent

