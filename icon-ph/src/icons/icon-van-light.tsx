/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVanLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M252.55 116.09 207 63a14 14 0 0 0-10.74-5H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-1.45-3.91m-54.7-45.32L234.94 114H174V70h22.26a2 2 0 0 1 1.59.77M102 114V70h60v44ZM32 70h58v44H30V72a2 2 0 0 1 2-2m48 140a18 18 0 1 1 18-18 18 18 0 0 1-18 18m112 0a18 18 0 1 1 18-18 18 18 0 0 1-18 18m48-24h-18.6a30 30 0 0 0-58.8 0h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-58h212v58a2 2 0 0 1-2 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVanLight))
export { Memo as IconVanLight }
