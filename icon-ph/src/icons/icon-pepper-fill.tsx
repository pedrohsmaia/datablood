/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPepperFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M167.27 40.42A40.06 40.06 0 0 0 128 8a8 8 0 0 0 0 16 24 24 0 0 1 22.85 16.66A64.08 64.08 0 0 0 96 104c0 46.75-25.75 78-76.53 93a16 16 0 0 0 1.77 31.13A264.8 264.8 0 0 0 66.75 232c40.78 0 86.16-9.15 117.53-35.46C210.64 174.44 224 143.3 224 104a64.07 64.07 0 0 0-56.73-63.58M192 95l-28.42-14.17a8 8 0 0 0-7.16 0L128 95l-13.37-6.68a48 48 0 0 1 90.74 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPepperFill))
export { Memo as IconPepperFill }
