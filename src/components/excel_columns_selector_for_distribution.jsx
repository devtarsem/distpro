import distStore from "../store/distributionStore";
import { useState } from "react";
import './../styles/media.css'
import ChooseDistribution from "./chossing_distribution";

export default function ExcelColumnsSelector(){

    const [feature, setFeature] = useState();
    const {showCols, fileUploadToStore,selectedColumnIndex,Calculation_for_Exponantial,settingLoaderON,choosen_distribution, settingStandardGaussianDataTOCache, standard_gaussian_Distribution_results,extracted_columns, Gaussian_Distribution_results,Calculation_for_gaussian,demandedCol_data,specific_feature_col_data_extract,excelContent_as_json} = distStore();

    const [desclaimer, setDesclaimer] = useState(false);

    
    function ExtractCols(event, el,index){
        if(choosen_distribution == '' || choosen_distribution == 'choose distribution to compare'){
            setDesclaimer(desclaimer=> true);
            return;
        }
        setFeature(index)
        
        specific_feature_col_data_extract(excelContent_as_json, el,index);
        if(choosen_distribution == 'Gaussian'){
            Calculation_for_gaussian(excelContent_as_json,index)
        }else if(choosen_distribution == 'Exponential'){
            Calculation_for_Exponantial(excelContent_as_json,index)
        }
        setDesclaimer(desclaimer=> false);

    }

    return(
        <div className='cols flex flex-dir gap16'>
            <h2 className='head2'>Select distribution</h2>
            <ChooseDistribution featureIndex = {selectedColumnIndex} />
            <hr/>
            <h2 className='head2'>Columns in data set</h2>
            {desclaimer &&
                <div className="desclaim flex flex-2">
                    <p className="desclaimer">Select valid distribution first</p>
                </div>
            }
            <div className='colcols flex-dir gap116'>
                {extracted_columns?.map((el,index)=>
                    <button onClick={(event)=> ExtractCols(event,el,index)} key={el} className='btn btn__empty'>{el}</button>
                )}
            </div>

        </div>
    )
}