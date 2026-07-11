import { ClipLoader } from "react-spinners";
import "./Loader.scss";

const Loader = ({ size = 20 }) => {
  return <ClipLoader size={size} className="loader" />;
};

export default Loader;
