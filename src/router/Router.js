import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWrapper from '../layouts/MainWrapper';
import EquipmentDetail from '../pages/EquipmentDetail';
import EquipmentList from '../pages/EquipmentList';
import EquipmentRental from '../pages/EquipmentRental';
import Notice from '../pages/Notice';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Notice />} />
          <Route element={<EquipmentRental />} >
            <Route path="/equipment" element={<EquipmentList />}/>
            <Route path="/equipment/:id" element={<EquipmentDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
