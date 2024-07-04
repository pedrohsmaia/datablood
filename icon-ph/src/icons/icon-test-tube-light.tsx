/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTestTubeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m236.24 87.76-60-60a6 6 0 0 0-8.48 0L38.53 157A42.77 42.77 0 1 0 99 217.47l112.24-112.23 22.66-7.55a6 6 0 0 0 2.34-9.93M90.53 209A30.77 30.77 0 1 1 47 165.47l29.13-29.12c8.84-3.14 22.84-4.56 41.08 5 12.28 6.41 23.13 8.66 32.27 8.71ZM206.1 94.31a6 6 0 0 0-2.34 1.45l-39.9 39.89c-8.84 3.14-22.84 4.56-41.08-5-12.28-6.38-23.13-8.65-32.27-8.65L172 40.49l48.89 48.89Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTestTubeLight))
export { Memo as IconTestTubeLight }
