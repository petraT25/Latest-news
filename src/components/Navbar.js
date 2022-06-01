export default function Navbar(props) {
  return (
    <div className={props.darkMode ? "navbar dark" : "navbar"}>
      <ul className="navbar__list">
        <li>World</li>
        <li>Sports</li>
        <li>Science</li>
        <li>Tech</li>
        <li>Bussiness</li>
        <li>Lifestyle</li>
       
      </ul>
      <div className="toggler">
        
        <div className="toggler__slider" onClick={props.toggleDarkMode}>
          <div className="slider__circle"></div>
        </div>
        
      </div>

      <h2 className="navbar__title">Latest World News</h2>
    </div>
  );
}
