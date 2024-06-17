/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStethoscopeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M210 152a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-4.35 37.58A46.05 46.05 0 0 1 160 230h-24a46.06 46.06 0 0 1-46-46v-42.29A62 62 0 0 1 34 80V40a14 14 0 0 1 14-14h16a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v40a50 50 0 0 0 50 50h.67c27.2-.36 49.33-23.16 49.33-50.83V40a2 2 0 0 0-2-2h-16a6 6 0 0 1 0-12h16a14 14 0 0 1 14 14v39.17c0 32.43-24.68 59.44-56 62.52V184a34 34 0 0 0 34 34h24a34.05 34.05 0 0 0 33.56-28.56 38 38 0 1 1 12.09.14M226 152a26 26 0 1 0-26 26 26 26 0 0 0 26-26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStethoscopeLight))
export { Memo as IconStethoscopeLight }
