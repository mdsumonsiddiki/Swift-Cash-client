import Header from "../shared/Header";
import Nav from "../shared/Nav";


const Root = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-primary via-cyan-900 relative to-secondary">
      <div>
        <Header/>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Nav/>
      </div>
    </div>
  );
};

export default Root;