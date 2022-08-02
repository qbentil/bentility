import React from 'react'
import Unit from './unit'
import {categories as Cats} from '../../../util/data'
import SectionTitle from '../../SectionTitle'
function Categories() {
  return (
    <div>
        <SectionTitle title='Categories' />
        <div className='grid grid-cols-3 gap-4'>
          {
            Cats.map(Cat => (
              <Unit key={Cat._id} data={Cat} />
            ))
          }

        </div>
    </div>
  )
}

export default Categories