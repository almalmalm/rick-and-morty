function Promo() {
  if (window.innerWidth < 767) {
    return (
      <div
        className="w-full h-screen bg-center"
        style={{
          backgroundImage: 'url(/rick-and-morty-mobile.jpg)',
          backgroundSize: 'cover',
        }}
      ></div>
    );
  } else {
    return (
      <div
        className="w-full h-screen bg-center"
        style={{
          backgroundImage: 'url(/rick-and-morty-wallpaper.png)',
          backgroundSize: 'cover',
        }}
      ></div>
    );
  }
}

export default Promo;
