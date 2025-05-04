import './../utils/util.css'
import './../styles/dist.css'
import './../styles/media.css'

import { useState, useEffect } from 'react';
import distStore from '../store/distributionStore';
import * as XLSX from 'xlsx';
import DisplayColData from './col_data';
import ChooseDistribution from './chossing_distribution';
import Standard_gausian_distribution from './standard_gaussian_distribution';
import Feature_gausian_distribution from './feature_gausian_distribution';
import Nav from './reusable_nav';
import ExcelUpload from './excel_upload';
import ExcelColumnsSelector from './excel_columns_selector_for_distribution';
import Feature_exponantial_distribution from './exponantial_distribution';
import Standard_exponenetial_distribution from './standard_exponential_distribution';
import { Link } from 'react-router';
import Loader from './loader';
import menu from './../icons/menu.png'
import resStore from '../store/responsiveStore';
import del from './../icons/del.png'


function Distribution(){

    
    const {showCols, selectedColumnIndex,excelContent_as_json,choosen_distribution, disablingTheFeature, disableing} = distStore()

    const {displayNavBar,setDisplayNavOpen, CloseDisplayNavOpen} = resStore()

    useEffect(el=>{
        disablingTheFeature(excelContent_as_json);
    }, [])


    function showMinimenu(){
        setDisplayNavOpen()
    }

    function closeMiniMenu(){
        CloseDisplayNavOpen()
    }

    return(
        <div className="dust">
            {/* <Nav/> */}
            <div className='board grid grid-12-col'>
                {displayNavBar &&
                    <div className='resNav pad16'>
                        {!showCols &&
                            <ExcelUpload/>
                        }

                        {showCols &&
                            <ExcelColumnsSelector/>
                        }
                    </div>
                }

                <div className='navs pad16'>
                    {!showCols &&
                        <ExcelUpload/>
                    }

                    {showCols &&
                        <ExcelColumnsSelector/>
                    }
                </div>
                <div className='output pad16'>
                    {!displayNavBar &&
                        <button onClick={showMinimenu} className=' menuhiddensmall'>
                            <img src={menu} alt='menu' className='menuicon'/>
                        </button>
                    }
                    {displayNavBar &&
                        <button onClick={closeMiniMenu} className=' menuhiddensmall'>
                            <img src={del} alt='menu' className='menuicon'/>
                        </button>
                    }
                    <div className='out grid grid-12-col'>
                        <div className='col_display pad16 flex flex-dir gap16'>
                            <h2 className='head2'>Column data</h2>
                            <DisplayColData/>
                        </div>
                        <div className='dist_curves pad16 grid grid-2-col gap16 flex-2'>
                            
                            {disableing ?
                                <button className='btn exportsPDF link'>Import data first to add PDF's</button>
                            :
                                <Link to='/exports-pdf' className='btn exportsPDF link'>Add PDF's to dataset</Link>
                            }

                            {choosen_distribution == 'Gaussian' &&
                                <Feature_gausian_distribution/>
                            }
                            {choosen_distribution == 'Gaussian' &&
                                <Standard_gausian_distribution/>
                            }
                            {choosen_distribution == 'Exponential' &&
                                <Feature_exponantial_distribution/>
                            }
                            {choosen_distribution == 'Exponential' &&
                                <Standard_exponenetial_distribution/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Distribution;