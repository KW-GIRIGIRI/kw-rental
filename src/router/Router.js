import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWrapper from '../layouts/MainWrapper';
import AddEquipment from '../pages/AddEquipment';
import EquipmentBox from '../pages/EquipmentBox';
import EquipmentDetail from '../pages/EquipmentDetail';
import EquipmentItemDetail from '../pages/EquipmentItemDetail';
import EquipmentList from '../pages/EquipmentList';
import EquipmentRental from '../pages/EquipmentRental';
import Notice from '../pages/Notice';
import RentalSuccess from '../pages/RentalSuccess';
import RentalApplication from '../pages/RentalApplication';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Notice />} />
          <Route element={<EquipmentRental />}>
            <Route path="/equipment" element={<EquipmentList />} />
            <Route path="/equipment/:id" element={<EquipmentDetail />} />
            <Route path="/equipment/edit" element={<AddEquipment />} />
            <Route path="/equipment/add" element={<AddEquipment />} />
            <Route path="/equipment/item" element={<EquipmentItemDetail />} />
            <Route path="/equipment/inventory" element={<EquipmentBox />} />
            <Route path="/equipment/inventory/application" element={<RentalApplication />} />
            <Route path="/equipment/inventory/success" element={<RentalSuccess />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
