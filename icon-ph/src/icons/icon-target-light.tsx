/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTargetLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220.06 84a102.06 102.06 0 1 1-24.31-32.27l24-24a6 6 0 0 1 8.48 8.49l-96 96a6 6 0 1 1-8.48-8.49l29.39-29.4a42 42 0 1 0 16.78 31.24 6 6 0 1 1 12-.68 54 54 0 1 1-20.22-39.06l25.54-25.55a89.91 89.91 0 1 0 22 28.93A6 6 0 1 1 220.06 84"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTargetLight))
export { Memo as IconTargetLight }
