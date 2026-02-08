import App from "./Course";

const College=({collegeData})=>{
    return(
        <div>
            <h1>College Component</h1>
            {collegeData.map((college,index)=>(
                <div key={index} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
                    <h2>{college.collegeName}</h2>
                    <p>Location: {college.location}</p>
                    <p>Courses:</p>
                    {/* <ul> */}
                        {/* <Course  courses={college.courses}/> */}
                        <App courses={college.courses}/>
                    {/* </ul> */}
                </div>
            ))}<br/>
        </div>
    )
}
export default College;