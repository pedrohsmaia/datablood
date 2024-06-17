/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUmbrellaThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 127A108.44 108.44 0 0 0 54.46 56.69 107.53 107.53 0 0 0 20 127a12 12 0 0 0 12 13h92v60a28 28 0 0 0 56 0 4 4 0 0 0-8 0 20 20 0 0 1-40 0v-60h92a12 12 0 0 0 12-13m-204 5a4 4 0 0 1-4-4.38 100.2 100.2 0 0 1 89.73-91.09C106 49.76 85.08 80.45 84 132Zm60 0c1.21-56 27.6-86.37 35.94-94.57 8.41 8.21 34.79 38.57 36 94.57Zm134.87-1.3a4 4 0 0 1-3 1.3H172c-1-51.55-22-82.24-33.7-95.47a100.2 100.2 0 0 1 89.7 91.09 4 4 0 0 1-1.07 3.08Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUmbrellaThin))
export { Memo as IconUmbrellaThin }
