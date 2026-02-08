function App(courses) {
  return (
    <div>
         <h1>Course Component</h1>
      <ul>
        {courses.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
