const ProfileCard = () => {
  const { name, age, bio } = {
    name: "Shaon",
    age: 24,
    bio: "I'm learning web development",
  };
  return (
    <>
      <div className="profileCard-container" style={{ border: "1px solid red", borderRadius: "20px", fontWeight: 'bold' }}>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
      </div>
    </>
  );
};

export default ProfileCard;
