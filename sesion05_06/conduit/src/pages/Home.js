import Banner from "../components/banner";
import GlobalFeed from "../components/global-feed";
import Navbar from "../components/navbar";
import Tags from "../components/Tags";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mt-3">
        <div className="row">
          <div className="col-8">
            <GlobalFeed />
          </div>
          <div className="col-4">
            <Tags />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
