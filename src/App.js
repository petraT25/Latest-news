import "./App.css";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";

export default function App() {
  return (
    <>
      <Navbar />
      <NewsList />
      <Brand />
    </>
  );
}
