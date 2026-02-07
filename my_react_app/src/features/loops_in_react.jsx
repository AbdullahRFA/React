function App() {
  const userData = [
    { id: 1, name: "John", age: 25, email: "john@example.com" },
    { id: 2, name: "Jane", age: 30, email: "jane@example.com" },
    { id: 3, name: "Bob", age: 35, email: "bob@example.com" },
    { id: 4, name: "Alice", age: 28, email: "alice@example.com" },
  ];

  return (
    <div>
      <h1>Loops with JSX using map</h1>
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
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Manual Table Rendering</h1>

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
            <td>1</td>
            <td>John</td>
            <td>25</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane</td>
            <td>30</td>
            <td>jane@example.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bob</td>
            <td>35</td>
            <td>bob@example.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Alice</td>
            <td>28</td>
            <td>alice@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
