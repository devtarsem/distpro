import distStore from "../store/distributionStore"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Feature_gausian_distribution(){

    const {Gaussian_Distribution_results, choosen_distribution, demandedCol_data} = distStore();
    const chartRef = useRef();

    function distriDown(){
        if (chartRef.current) {

            html2canvas(chartRef.current).then((canvas)=>{
                const link = document.createElement("a");
                link.download =`${choosen_distribution}-gaussian.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
            })
        }
    }

    return(
        <>
            <div ref={chartRef} className='ciw3  flex flex-dir flex-2 gap16'>
                <h2 className='head2'>{choosen_distribution} distribution - {demandedCol_data.feature} </h2>
                <div  className="gaussian flex flex-2" style={{ width: '100%', height: '100%' }}>
                    <LineChart width={300} height={300} data={Gaussian_Distribution_results?.pdf_points}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="PDF" stroke="#8884d8" dot={false} />
                    </LineChart>
                </div>
                <div className='essentials grid grid-2-col'>
                    <p className='sss'>Mean : - {Gaussian_Distribution_results?.mean.toFixed(2)}</p>
                    <p className='sss'>Varience : - {Gaussian_Distribution_results?.variance.toFixed(2)}</p>
                    {/* <p className='sss'>Std : - 45</p> */}
                    {/* <p className='sss'>Poison : - 45</p> */}
                </div>
                <button onClick={distriDown} className="btn">Download distribution</button>
            </div>
        </>
    )
}