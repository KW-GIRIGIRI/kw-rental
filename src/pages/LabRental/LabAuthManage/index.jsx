import SingularDatePicker from '../../../components/DatePicker/SingularDatePicker';
import LabSched from '../../../components/LabSched';
import useTitle from '../../../hook/useTitle';
import { Cal } from "./style";

export default function LabRentalManage() {
  useTitle('랩실 대여 관리')

  return (
    <>
      <Cal>
        <SingularDatePicker className='admin' />
      </Cal>
      <LabSched />
    </>
  )
}
