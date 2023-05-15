import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainWrapper from "../layouts/MainWrapper";
import AddEquipment from "../pages/AddEquipment";
import EquipmentBox from "../pages/EquipmentCart/EquipmentBox";
import EquipmentDetail from "../pages/EquipmentDetail";
import EquipmentItemDetail from "../pages/EquipmentItemDetail";
import EquipmentList from "../pages/EquipmentList";
import EquipmentRental from "../pages/EquipmentRental";
import RentalSuccess from "../pages/EquipmentCart/RentalSuccess";
import RentalApplication from "../pages/EquipmentCart/RentalApplication";
import EquipmentCart from "../pages/EquipmentCart";
import RentalStatus from "../pages/RentalStatus";
import History from "../pages/History";
import AuthWrapper from "../layouts/AuthWrapper";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import AuthSuccess from "../pages/AuthSuccess";
import EquipRentalHistory from "../pages/History/EquipRentalHistory";
import LabRentalHistory from "../pages/History/LabRentalHistory";
import PenaltyHistory from "../pages/History/PenaltyHistory";
import SetAccount from "../pages/SetAccount";
import LabRental from "../pages/LabRental";
import LabInformation from "../pages/LabRental/LabInformation";
import LabRentalSched from "../pages/LabRental/LabRentalSched";
import LabRentalApplication from "../pages/LabRental/LabRentalApplication";
import LabRentalSuccess from "../pages/LabRental/LabRentalSuccess";
import { useContext } from "react";
import { AuthContext } from "../context/Context";
import LabRentalManage from "../pages/LabRental/LabAuthManage";

export default function Router() {
  const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path="/*" element={<EquipmentRental />}>
            <Route path="" element={<EquipmentList />} />
            <Route path=":id" element={<EquipmentDetail />} />
            <Route path=":id/edit" element={<AddEquipment />} />
            <Route path="add" element={<AddEquipment />} />
            <Route path="item" element={<EquipmentItemDetail />} />
            <Route path="status" element={<RentalStatus />} />
            <Route path="inventory/*" element={<EquipmentCart />}>
              <Route path="" element={<EquipmentBox />} />
              <Route path="application" element={<RentalApplication />} />
              <Route path="success" element={<RentalSuccess />} />
            </Route>
          </Route>
          <Route path="/history/*" element={<History />}>
            <Route path="equipment" element={<EquipRentalHistory />} />
            <Route path="lab" element={<LabRentalHistory />} />
            <Route path="penalty" element={<PenaltyHistory />} />
          </Route>
          <Route path="/setaccount" element={<SetAccount />} />
          <Route path="/lab/*" element={<LabRental />}>
            <Route
              path=""
              element={isAuth ? <LabRentalSched /> : <LabInformation />}
            />
            <Route
              path="status"
              element={isAuth ? <LabRentalManage /> : <LabRentalSched />}
            />
            <Route path="application" element={<LabRentalApplication />} />
            <Route path="success" element={<LabRentalSuccess />} />
            <Route path="edit" element={<LabInformation />} />
          </Route>
        </Route>
        <Route path="/auth/*" element={<AuthWrapper />}>
          <Route path="" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="success" element={<AuthSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
