/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBirdThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172 68a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-55.07 65.44-40 48a4 4 0 0 0 .51 5.63A3.94 3.94 0 0 0 80 188a4 4 0 0 0 3.07-1.44l40-48a4 4 0 0 0-6.14-5.12M236 80a4 4 0 0 1-1.78 3.33L212 98.14V120a100.11 100.11 0 0 1-100 100H8a4 4 0 0 1-3.12-6.5L100 94.6V76a56 56 0 0 1 109.79-15.61l24.43 16.28A4 4 0 0 1 236 80m-11.21 0-20.68-13.78a4.08 4.08 0 0 1-1.65-2.33A48 48 0 0 0 108 76v20a4 4 0 0 1-.88 2.5L16.32 212H112a92.1 92.1 0 0 0 92-92V96a4 4 0 0 1 1.78-3.33Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBirdThin))
export { Memo as IconBirdThin }
