/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCameraSlashThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M51 37.31a4 4 0 0 0-6 5.38L60.78 60H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h151l6.08 6.69a4 4 0 1 0 5.92-5.38Zm97.58 119.23A31.69 31.69 0 0 1 128 164a32 32 0 0 1-22.48-54.78ZM48 204a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h20l32.09 35.3a40 40 0 0 0 53.79 59.16L191.69 204ZM228 80v106a4 4 0 0 1-8 0V80a12 12 0 0 0-12-12h-32a4 4 0 0 1-3.32-1.78L157.85 44H98.13l-.82 1.23a4 4 0 1 1-6.65-4.44l2-3A4 4 0 0 1 96 36h64a4 4 0 0 1 3.33 1.78L178.13 60H208a20 20 0 0 1 20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCameraSlashThin))
export { Memo as IconCameraSlashThin }
