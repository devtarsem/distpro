import distStore from "../store/distributionStore"
import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Standard_gausian_distribution(){
    const [data, setData] = useState();

    const {standard_gaussian_Distribution_results,settingStandardExponentialDataTOCache,choosen_distribution,settingStandardGaussianDataTOCache} = distStore();
    useEffect(el=>{
        if(choosen_distribution == 'Gaussian'){
            setData(data=> standard_gaussian_Distribution_results)
            settingStandardGaussianDataTOCache()
        }
        
    }, [choosen_distribution])
    return(
        <div className='ciw3 flex flex-dir flex-2 gap16'>
            <h2 className='head2'>Standard {choosen_distribution} distribution</h2>
            <div className="flex flex-2">
                <div style={{ width: '100%', height: '100%' }}>
                    <LineChart
                        width={300}
                        height={300}
                        
                        data={standard_gaussian_Distribution_results?.pdf_points}
                        
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
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