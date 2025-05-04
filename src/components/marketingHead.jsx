import flower from './../icons/flower.png'

export default function Mhead(props){
    return(
        <div className='feahead'>
            <h2 className='head2 head2__big decenter'>{props.head}</h2>
            <img src={flower} className='flowIcon' alt='flower'/>
        </div>
    )
}