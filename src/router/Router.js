import { lazy, Suspense, useContext } from "react";
import { AuthContext } from "../context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainWrapper from "../layouts/MainWrapper";
import AuthWrapper from "../layouts/AuthWrapper";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import AuthSuccess from "../pages/AuthSuccess";
import EquipmentDetail from "../pages/EquipmentDetail";

const EquipmentList = lazy(() => import("../pages/EquipmentList"));
const AddEquipment = lazy(() => import("../pages/AddEquipment"));
const EquipmentItemDetail = lazy(() => import("../pages/EquipmentItemDetail"));
const RentalStatus = lazy(() => import("../pages/RentalStatus"));
const EquipmentCart = lazy(() => import("../pages/EquipmentCart"));
const EquipmentBox = lazy(() => import("../pages/EquipmentCart/EquipmentBox"));
const RentalSuccess = lazy(() =>
  import("../pages/EquipmentCart/RentalSuccess")
);
const RentalApplication = lazy(() =>
  import("../pages/EquipmentCart/RentalApplication")
);
const LabRentalSched = lazy(() => import("../pages/LabRental/LabRentalSched"));
const LabInformation = lazy(() => import("../pages/LabRental/LabInformation"));
const LabRentalManage = lazy(() => import("../pages/LabRental/LabAuthManage"));

const EquipmentRental = lazy(() => import("../pages/EquipmentRental"));
const History = lazy(() => import("../pages/History"));
const EquipRentalHistory = lazy(() =>
  import("../pages/History/EquipRentalHistory")
);
const LabRentalHistory = lazy(() =>
  import("../pages/History/LabRentalHistory")
);
const PenaltyHistory = lazy(() => import("../pages/History/PenaltyHistory"));
const SetAccount = lazy(() => import("../pages/SetAccount"));
const LabRental = lazy(() => import("../pages/LabRental"));
const LabRentalApplication = lazy(() =>
  import("../pages/LabRental/LabRentalApplication")
);
const NotFound = lazy(() => import("../pages/NotFound"));

export default function Router() {
  const { isAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Suspense fallback={<MainWrapper />}>
        <Routes>
          <Route path="/" element={<AuthWrapper />}>
            <Route path="" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="success" element={<AuthSuccess />} />
          </Route>
          <Route element={<MainWrapper />}>
            <Route path="/equipment/*" element={<EquipmentRental />}>
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
              <Route path="success" element={<RentalSuccess />} />
              <Route path="edit" element={<LabInformation />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
