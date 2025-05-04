import distStore from "../store/distributionStore"
import Loader from "./loader";
import './../styles/media.css'

export default function DisplayColData(){

    const {demandedCol_data, isLoading} = distStore();
    console.log(isLoading)
    return(
        <div className='covertable'> 
            {isLoading ?
                <div className="load flex flex-2">
                    <Loader/>
                </div>
                :
                <table className='table'>
                    <thead>
                        <tr>
                            <th className="tabhead" >Sno</th>
                            <th className="tabhead" >{demandedCol_data?.feature}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demandedCol_data?.dataCol.map((el,index)=>
                            <tr>
                                <td>{index+1}.</td>
                                <td>{el}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }       
        </div>
    )
}