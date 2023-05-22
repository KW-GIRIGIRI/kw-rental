import SingularDatePicker from '../../../components/DatePicker/SingularDatePicker';
import LabSched from '../../../components/LabSched';
import { Cal } from "./style";

export default function LabRentalManage() {
  return (
    <>
      <Cal>
        <SingularDatePicker className='admin' />
      </Cal>
      <LabSched />
    </>
  )
}
