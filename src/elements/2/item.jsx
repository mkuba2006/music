
export default function Item(props){
    return(
        <div id="item">
            <img src={props.Img}/>
            <div id="rest">
                <h1>{props.B}</h1>
                <h2>{props.A}</h2>
            </div>
        </div>
    )
}