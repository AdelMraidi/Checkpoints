import "./App.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";

function App() {
  const firstname = "shady";
  return (
    <>
      <Name />
      <Price />
      <Description />
      <Image />
      <div>{firstname ? <h2>hello {firstname}</h2> : <h2>nothing</h2>}</div>
    </>
  );
}

export default App;
