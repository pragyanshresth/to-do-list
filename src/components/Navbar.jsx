import { Link } from "react-router-dom";
// import { HomeIcon } from "reactsax-icons";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "25px", justifyContent:"space-between",
                  padding: "30px 100px",backgroundColor: "black ",color:"#fff", 
                  alignItems:"center",borderbottom:"1px solid #444"}}>
      {/* <HomeIcon/> */}
      <h2>
        <Link to={"/"}>Home</Link>
      </h2>
      <h2>
        <Link to={"/about"}>About</Link>
      </h2>
      <h2>
        <Link to={"/contact"}>Contact</Link>
      </h2>
    </div>
  );
};

export default Navbar;

