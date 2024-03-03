import React from 'react'
import { SwiperProducts } from '../components/swipers/SwiperProducts'
import { ShopAllContentCardPurification } from './sections/ShopAllContentCardPurification'
import { ShopAllContentDrinkware } from './sections/ShopAllContentCardDrinware'
import { ShopAllContentCardSection } from './sections/ShopAllContentCardSection'
import { ShopAllNavigation } from './sections/ShopAllNavigation'


export const ShopAll = () => {
  return (
    <main>
      <ShopAllNavigation/>
    <SwiperProducts/>
    <ShopAllContentCardPurification/>
    <ShopAllContentDrinkware/>
    <ShopAllContentCardSection/>
    </main>
  )
}
