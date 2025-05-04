import distStore from "../store/distributionStore";
import { useState } from "react";

export default function ExcelUpload(){
    const [file, setFile] = useState();
    const [formatCheck, setFormatCheck] = useState(false);
    const {fileUploadToStore, isLoading, settingLoaderON, settingLoaderOFF} = distStore();

    function FileUpload(el){
        
        setFile(file=> el.target.files[0])

    }

    function submitFile(el){
        el.preventDefault
        console.log(file)
        if(file.name.split('.')[1] != 'csv' && file.name.split('.')[1] != 'xlsx'){
            setFormatCheck(true)
            return;
        }
        fileUploadToStore(file);
        setFormatCheck(true)

    }


    return(
        <div className='upload_file flex flex-dir gap16'>
            <label className='uploadfile'>Upload file in Excel format</label>
            {formatCheck &&
                <div className="desclaim flex flex-2">
                    <p className="desclaimer">Upload Data in excel format only</p>
                </div>
            }
            <input onChange={FileUpload} className='inp' type='file' placeholder='file'/>
            {isLoading ?
                <div className="loader"></div>
            : 
                <button onClick={submitFile} className='submit btn'>Add +  </button>
            }
        </div>
    )
}