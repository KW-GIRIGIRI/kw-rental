import GalType from './GalType'
import ListType from './ListType'
import { TypeWrap } from './style'

export default function EquipListWrap({type, data}) {
  return (
    <TypeWrap>
      {
        type === 'list' ?
          <ListType data={data} />
          : <GalType data={data} />
      }
    </TypeWrap>
  )
}
