

const Todofun = (props) =>{
   
    return(
        <ul>
            {
                props.inputarr.map((itam)=>{
                    return <li key={itam}>
                               {itam}<input type="checkbox" />
                           </li>;
                }
                )
            }
        </ul>
    )
}

export default Todofun;