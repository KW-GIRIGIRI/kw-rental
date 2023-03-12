import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWrapper from '../layouts/MainWrapper';
import EquipmentDetail from '../pages/EquipmentDetail';
import EquipmentRental from '../pages/EquipmentRental';
import Notice from '../pages/Notice';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Notice />} />
          <Route path="/equipment" element={<EquipmentRental />} />
          <Route path="/equipment/detail" element={<EquipmentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
