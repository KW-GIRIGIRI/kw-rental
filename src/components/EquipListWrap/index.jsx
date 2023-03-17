import React from 'react'
import GalType from './GalType'
import ListType from './ListType'

export default function EquipListWrap({type, data}) {
  return (
    <div>
      {
        type === 'list' ?
          <ListType data={data} />
          : <GalType data={data} />
      }
    </div>
  )
}
