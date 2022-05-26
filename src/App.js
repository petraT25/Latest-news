import "./App.css";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";
import LoadButton from "./components/LoadButton";

export default function App() {
  return (
    <>
      <Navbar />
      <NewsList />
      <LoadButton />
      <Brand />
    </>
  );
}
