import "./App.css";
import BreakRules from "./BreakRules";
import Greeting from "./Greeting";
import ProductCard from "./ProductCard";
import ProfileCard from "./ProfileCard";

function App() {
  const name = "Shaon";
  const language = "English";

  const product = 'iPhone';
  const price = 5000;
  const inStock = true;

  return (
    <>
      <h1>Welcome to React Practice Session</h1>
      <ProfileCard></ProfileCard>
      <BreakRules></BreakRules>
      <Greeting name={name} language={language}></Greeting>
      <ProductCard product={product} price={price} inStock={inStock}></ProductCard>
    </>
  );
}

export default App;
