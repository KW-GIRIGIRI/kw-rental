import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWrapper from '../layouts/MainWrapper';
import AddEquipment from '../pages/AddEquipment';
import EquipmentBox from '../pages/EquipmentCart/EquipmentBox';
import EquipmentDetail from '../pages/EquipmentDetail';
import EquipmentItemDetail from '../pages/EquipmentItemDetail';
import EquipmentList from '../pages/EquipmentList';
import EquipmentRental from '../pages/EquipmentRental';
import Notice from '../pages/Notice';
import RentalSuccess from '../pages/RentalSuccess';
import RentalApplication from '../pages/RentalApplication';
import EquipmentCart from '../pages/EquipmentCart';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Notice />} />
          <Route path="/equipment/*" element={<EquipmentRental />}>
            <Route path="" element={<EquipmentList />} />
            <Route path=":id" element={<EquipmentDetail />} />
            <Route path="edit" element={<AddEquipment />} />
            <Route path="add" element={<AddEquipment />} />
            <Route path="item" element={<EquipmentItemDetail />} />
            <Route path="inventory/*" element={<EquipmentCart />}>
              <Route path="" element={<EquipmentBox />} />
              <Route path="application" element={<RentalApplication />} />
              <Route path="success" element={<RentalSuccess />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
