/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRugThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 20a4 4 0 0 0-4 4v20h-40V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H60V24a4 4 0 0 0-8 0v208a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0V24a4 4 0 0 0-4-4M60 52h136v152H60Zm68 120a4 4 0 0 0 3.43-1.94l24-40a4 4 0 0 0 0-4.12l-24-40a4 4 0 0 0-6.86 0l-24 40a4 4 0 0 0 0 4.12l24 40A4 4 0 0 0 128 172m0-76.23L147.33 128 128 160.23 108.67 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRugThin))
export { Memo as IconRugThin }
