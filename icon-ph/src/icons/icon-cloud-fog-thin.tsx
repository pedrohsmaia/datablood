/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudFogThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M120 196H72a4 4 0 0 1 0-8h48a4 4 0 0 1 0 8m64-8h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m-24 32h-56a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8m68-128a72.08 72.08 0 0 1-72 72H76a48 48 0 1 1 11.51-94.61A72.08 72.08 0 0 1 228 92m-8 0a64.06 64.06 0 0 0-128-3.77 4 4 0 0 1-8-.46 71.63 71.63 0 0 1 1.42-10.65A40 40 0 1 0 76 156h80a64.07 64.07 0 0 0 64-64"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudFogThin))
export { Memo as IconCloudFogThin }
