// function College(props){
//     return(
//         <div>
//             <h1>College Information</h1>
//             <p>Name: {props.name}</p>
//             <p>Location: {props.location}</p>
//             <p>Established: {props.established}</p>
//         </div>
//     )
// }

// export default College;


export function College(props){
    return(
        <div>
            <h1>College Information</h1>
            <p>COllege1: {props[0]}</p>
            <p>COllege2: {props[1]}</p>
            <p>COllege3: {props[2]}</p>
        </div>
    )
}