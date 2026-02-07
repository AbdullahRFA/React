function ReusableComponent({user}){
    return(
        <div>
            <h1>{user.name}'s Information</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ReusableComponent;