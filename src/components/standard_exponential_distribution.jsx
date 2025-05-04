import distStore from "../store/distributionStore"
import { useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Standard_exponenetial_distribution(){

    const {standard_exponential_Distribution_results,choosen_distribution,settingStandardExponentialDataTOCache,settingStandardGaussianDataTOCache} = distStore();
    useEffect(el=>{
        if(choosen_distribution == 'Exponential'){
            console.log("jha")
            settingStandardExponentialDataTOCache()
            console.log(standard_exponential_Distribution_results)
        }
    }, [choosen_distribution])
    return(
        <div className='ciw3 flex flex flex-2 flex-dir gap16'>
            <h2 className='head2'>Standard {choosen_distribution} distribution</h2>
            <div className="flex flex-2">
                <div style={{ width: '100%', height: '100%' }}>
                    <LineChart
                        width={300}
                        height={300}
                        data={standard_exponential_Distribution_results?.pdf_points}
                        
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>
        </div>
    )
}