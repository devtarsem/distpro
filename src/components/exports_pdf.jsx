import distStore from "../store/distributionStore"
import './../styles/exports.css'
import menu from './../icons/menu.png'
import { useState, useEffect, createRef } from "react";
import resStore from "../store/responsiveStore";
import cross from './../icons/del.png'

export default function ExportsPDF(){

    const {excelContent_as_json, extracted_columns, exportDistributionAsExcel, addingPDFCOLTOEXCEL} = distStore();
    const disval = createRef()
    const [distSelected, setDisSelected] = useState('')
    const [load, setLoad] = useState(false);
    const {displayNavBarExportstab, setDisplayNavOpenExportstab, CloseDisplayNavOpenExportstab} = resStore();
    const [desclaimer, setDisclaimer] = useState(false)
    

    function distValChange(el){
        setDisSelected(distSelected=> disval.current.value);

    }

    function performingDistribution(event, el, index){
        if(distSelected == 'choose distribution pdf' || distSelected == ''){
            setDisclaimer(desclaimer=> true);
            return ;
        }
        addingPDFCOLTOEXCEL(distSelected, el, index)
        setDisclaimer(desclaimer=> false);

    }

    function ExcelExports(){
        exportDistributionAsExcel(excelContent_as_json)
    }

    function OpenNav(){
        setDisplayNavOpenExportstab();
    }
    function CloseNav(){
        CloseDisplayNavOpenExportstab();
    }

    return(
        <div className="exp pad16 flex flex-dir gap16">
            {displayNavBarExportstab &&
                <div className="mininavOfExp pad16">
                    <div className="flex flex-dir gap16">
                        <select onChange={distValChange} ref={disval} className="select inp selectDistToexp">
                            {["choose distribution pdf", "Gaussian", "Exponential"].map(el=>
                                <option className="opt" value={el} >
                                    {el}
                                </option>
                            )}

                        </select>
                        {desclaimer &&
                            <div className="desclaim flex flex-2">
                                <p className="desclaimer">Select valid distribution first</p>
                            </div>
                        }
                        {extracted_columns.map((el,index)=>
                            <button onClick={(event)=>performingDistribution(event,el,index)} className="btn">{el}</button>
                        )}
                    </div>
                </div>
            }

            {!displayNavBarExportstab &&
                <button onClick={OpenNav} className="exportMenu">
                    <img src={menu} className="menuicon" alt="menu"/>
                </button>
            }
            {displayNavBarExportstab &&
                <button onClick={CloseNav} className="exportMenu">
                    <img src={cross} className="menuicon" alt="menu"/>
                </button>
            }

            <button onClick={ExcelExports} className="exportExcel btn">Export as excel</button>
            {/* <div className="essentials__ flex flex-1 flex-dir gap16 pad16">
                <div className="grid grid-10-col gap16">
                    <select onChange={distValChange} ref={disval} className="select inp selectDistToexp">
                        {["choose distribution pdf", "Gaussian", "Exponential"].map(el=>
                            <option className="opt" value={el} >
                                {el}
                            </option>
                        )}

                    </select>
                    {extracted_columns.map((el,index)=>
                        <button onClick={(event)=>performingDistribution(event,el,index)} className="btn">{el}</button>
                    )}
                </div>
            </div> */}
            <div className="colData flex flex-dir gap16">
                
                <table className="table">
                    <thead>
                        <tr>
                            {excelContent_as_json[0]?.map(el=>
                                <th>{el}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {excelContent_as_json.slice(1)?.map(el=>
                            <tr>
                                {el.map(val=>
                                    <td>{val}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

