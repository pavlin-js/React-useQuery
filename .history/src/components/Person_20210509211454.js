const Person = ( { person } ) => {
  return (
    <div className="card">
      <h3>{ person.name }</h3>
      <p>Gender - </p>
    </div>
  );
}
 
export default Person;