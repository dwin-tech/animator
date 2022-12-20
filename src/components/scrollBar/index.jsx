import './index.css';


export default function ScrollBar() {
    console.log(new Array(20).map((el)=>el))
    return (
        <div className="scrollBar">

            {new Array(17).map((el, index) => {
                <div className='point' key={index}>
                </div>
            })}






        </div>
    )
}
