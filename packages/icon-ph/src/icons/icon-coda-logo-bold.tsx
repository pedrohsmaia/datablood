/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodaLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 92a35.79 35.79 0 0 1 19.38 5.47A16 16 0 0 0 220 84V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-36a16 16 0 0 0-24.6-13.48c-6.58 4.22-11.89 5.76-18.92 5.48H176a36 36 0 0 1 0-72m-.24 96a52.4 52.4 0 0 0 20.24-3v19H60V52h136v19.3a61.55 61.55 0 0 0-20-3.3 60 60 0 0 0-.24 120"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodaLogoBold))
export { Memo as IconCodaLogoBold }
