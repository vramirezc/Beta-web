import banner from "../assets/banner.mp4";

function Banner() {
  return (
    <div className="banner background">
      <video className="bannerVideo" src={banner} autoPlay muted loop />
    </div>
  );
}

export default Banner;
