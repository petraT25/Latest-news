export default function Brand(props) {
  return (
    <div className={props.darkMode ? "brand dark" : "brand"}>
      <a href="https://developer.nytimes.com" className="brand__link">
        <img className="brand__img"
          src="https://developer.nytimes.com/files/poweredby_nytimes_150a.png?v=1583354208339"
          alt="New York Times logo"
        />
      </a>
    </div>
  );
}
