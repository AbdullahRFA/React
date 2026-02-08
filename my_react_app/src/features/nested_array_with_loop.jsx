import College from "./college";

function App(){
    const CollegeData = [
        {
            collegeName: "ABC College",
            location: "New York",
            courses: ["Math", "Science", "History"]
        },
        {
            collegeName: "XYZ University",
            location: "California",
            courses: ["Engineering", "Arts", "Business"]
        },
        {
            collegeName: "LMN Institute",
            location: "Texas",
            courses: ["Medicine", "Law", "Architecture"]
        }
    ];
    return(
        <div>
            <h1>Nested Array with Loop</h1>
            <College  collegeData={CollegeData}/>
        </div>
    )
}
export default App;