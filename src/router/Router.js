import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWrapper from '../layouts/MainWrapper';
import AddEquipment from '../pages/AddEquipment';
import EquipmentDetail from '../pages/EquipmentDetail';
import EquipmentItemDetail from '../pages/EquipmentItemDetail';
import EquipmentList from '../pages/EquipmentList';
import EquipmentRental from '../pages/EquipmentRental';
import Notice from '../pages/Notice';

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
            <Route path='/equipment/item/:id' element={<EquipmentItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
