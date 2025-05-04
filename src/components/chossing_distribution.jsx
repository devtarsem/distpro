import distStore from "../store/distributionStore"

export default function ChooseDistribution(props){

    const {Calculation_for_gaussian,excelContent_as_json, disableing, Calculation_for_Exponantial,setting_the_chossen_distribution} = distStore()

    function DistributionChooser(el){
        setting_the_chossen_distribution(el.target.value)
        // if(el.target.value === 'Gaussian'){
        //     Calculation_for_gaussian(excelContent_as_json,props.featureIndex)
        // }
        // if(el.target.value === 'Exponential'){
        //     Calculation_for_Exponantial(excelContent_as_json,props.featureIndex)
        // }
    }

    return(
        <div className='distributionDropBox'>
            {disableing 
            ?
            <button className="btn">Import data first to select distribution</button>
            :
            
            <select onChange={(event)=>DistributionChooser(event)} className='inp'>
                {["choose distribution to compare", "Gaussian", "Exponential"].map(el=>
                    <option  className='opt' value={el}>{el}</option>
                )}
            </select>
            }
        </div>
    )
}