/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBasket = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 120v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m103.86-21.89L226 202.12A16 16 0 0 1 210.13 216H45.87A16 16 0 0 1 30 202.12l-13.87-104A16 16 0 0 1 32 80h36.37L122 18.73a8 8 0 0 1 12 0L187.63 80H224a16 16 0 0 1 15.85 18.11ZM89.63 80h76.74L128 36.15ZM224 96H32l13.87 104h164.26Zm-51.16 23.2-5.6 56a8 8 0 0 0 7.16 8.8 7.44 7.44 0 0 0 .81 0 8 8 0 0 0 7.95-7.2l5.6-56a8 8 0 0 0-15.92-1.6m-89.68 0a8 8 0 0 0-15.92 1.6l5.6 56a8 8 0 0 0 8 7.2 7.44 7.44 0 0 0 .81 0 8 8 0 0 0 7.16-8.76Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBasket))
export { Memo as IconBasket }
