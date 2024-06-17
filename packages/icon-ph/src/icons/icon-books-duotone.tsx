/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBooksDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M48 72h64v112H48Zm142.64-33.61a8 8 0 0 0-9.5-6.21l-46.81 10a8.07 8.07 0 0 0-6.15 9.57L139.79 107l62.46-13.42Z"
          opacity={0.2}
        />
        <Path d="m231.65 194.55-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.25 16.25 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10 3.33 15.87L139.33 66Zm6.62 31.47 46.82-10.05 3.34 15.9L146 97.53Zm6.64 31.57 46.82-10.06 13.3 63.24-46.82 10.06ZM216 197.94l-46.8 10-3.33-15.87 46.8-10.07 3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm0 32h48v96H56Zm48 128H56v-16h48z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBooksDuotone))
export { Memo as IconBooksDuotone }
