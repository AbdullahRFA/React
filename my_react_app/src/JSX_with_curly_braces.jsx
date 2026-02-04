function App(){
    var x = 10;
    var y = 20;

    function fruits(){
        return(
            <div>
                     <h1>
                <ol>
                    <li>Apple</li>
                    <li>Bannana</li>
                </ol>
            </h1>
            </div>
           
        )
    }

    function SumOfTwoDigit(a,b){
        return a+b
    }

    function OPT(a,b,opt){

        if(opt =="+"){
            return a+b
        }
        else if(opt =="-"){
            return a-b
        }
        else if(opt =="/"){
            return a/b
        }
        else if(opt =="*"){
            return a*b
        }
    }

    const person={
        name:"Abdullah Nazmus-Sakib",
        age:24,
        profesion:"Student"
    };

    const userArray = [1,2,3,4,5,6];

    return(
        <div>
            <h1>Hello, React!</h1>
            <h2>Sum of {x} and {y} = {x+y}</h2>
            {fruits()}
            <h2>{SumOfTwoDigit(x,y)}</h2>
            <h3>{x}+{y}={OPT(x,y,"+")}</h3>
            <h3>{x}-{y}={OPT(x,y,"-")}</h3>
            <h3>{x}/{y}={OPT(x,y,"/")}</h3>
            <h3>{x}*{y}={OPT(x,y,"*")}</h3>

            <h1>Person Detailed:</h1>
            <h2>Name: {person.name}</h2>
            <h2>Age: {person.age}</h2>
            <h2>Profesion: {person.profesion}</h2>
            <hr></hr>
            <h2>Array Elements:</h2>
            <h3>{userArray[0]}</h3>
            <h3>{userArray[1]}</h3>
            <h3>{userArray[2]}</h3>
            <h3>{userArray[3]}</h3>
            <h3>{userArray[4]}</h3>
            <h3>{userArray[5]}</h3>
        </div>
    )
}

export default App