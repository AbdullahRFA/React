function Wrapper({children,color="black"}) {
    return(
        <div style={{color:color, border:"5px solid blue", width:"400px",margin:"20px auto", padding:"20px"}}>
            {/* <h1>Wrapper Component</h1>
             <p>This is a wrapper component that can be used to wrap other components.</p>
             <hr></hr> */}
                {children}
        </div>
    )
}

export default Wrapper;