const Singers = ({ singer }) => {
  const { name, age } = singer;
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Singers;
