
const Greeting = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
};

export default Greeting;