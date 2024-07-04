/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDesktopTowerLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M22 96v72a10 10 0 0 0 10 10h80a6 6 0 0 1 0 12H94v20h18a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h18v-20H32a22 22 0 0 1-22-22V96a22 22 0 0 1 22-22h80a6 6 0 0 1 0 12H32a10 10 0 0 0-10 10m186-30h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m0 32h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m38-50v160a14 14 0 0 1-14 14h-80a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h80a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2h-80a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2Zm-42 122a10 10 0 1 0 10 10 10 10 0 0 0-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDesktopTowerLight))
export { Memo as IconDesktopTowerLight }
