import distStore from "../store/distributionStore"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Feature_exponantial_distribution(){

    const {Exponential_Distribution_results} = distStore();

    return(
        <div className='ciw3 flex flex-dir flex-2 gap16'>
            <h2 className='head2'>Your column distribution</h2>
            <div className="flex flex-2" style={{ width: '100%', height: '100%' }}>
                <LineChart width={300} height={300} data={Exponential_Distribution_results?.pdf_points}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="PDF" stroke="#8884d8" dot={false} />
                </LineChart>
            </div>
            <div className='essentials grid grid-2-col'>
                <p className='sss'>Mean : - {Exponential_Distribution_results?.mean.toFixed(2)}</p>
                <p className='sss'>Lambda(λ) : - {(1/Exponential_Distribution_results?.mean).toFixed(2)}</p>
                {/* <p className='sss'>Std : - 45</p> */}
                {/* <p className='sss'>Poison : - 45</p> */}
            </div>
        </div>
    )
}