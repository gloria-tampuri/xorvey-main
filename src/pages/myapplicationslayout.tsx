import { Outlet } from "react-router-dom";
import ApplicantHeader from "../components/ApplicantHeader/ApplicantHeader";

const Myapplicationslayout = () => {
  return (
    <div>
      <ApplicantHeader />
      <Outlet />
    </div>
  );
};

export default Myapplicationslayout;
