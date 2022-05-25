function Avenger(props) {
  return (
    // the below is not HTML it is JSX (JavaScript XML)
    <div className="card">
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  );
}
export default Avenger;

//In JS if you want to use the above you have to write it like this:
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let h3 = document.createElement('h3');
// h1.append("");
// h3.append("");
// div.append(h1, h3);
