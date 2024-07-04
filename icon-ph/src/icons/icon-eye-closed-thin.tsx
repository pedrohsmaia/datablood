/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEyeClosedThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M226 171.47a3.92 3.92 0 0 1-2 .53 4 4 0 0 1-3.47-2l-21.15-37a120 120 0 0 1-41.91 19.53l6.53 38.81a4 4 0 0 1-3.29 4.6 3.79 3.79 0 0 1-.67.06 4 4 0 0 1-3.94-3.34l-6.41-38.5a128.17 128.17 0 0 1-43.28 0l-6.41 38.5a4 4 0 0 1-4 3.34 3.88 3.88 0 0 1-.67-.06 4 4 0 0 1-3.29-4.6l6.48-38.83A120 120 0 0 1 56.62 133l-21.15 37a4 4 0 0 1-3.47 2 3.92 3.92 0 0 1-2-.53 4 4 0 0 1-1.47-5.47l21.68-37.94a148.24 148.24 0 0 1-21.32-21.56 4 4 0 1 1 6.22-5C52.25 122.71 82.29 148 128 148s75.75-25.29 92.89-46.51a4 4 0 1 1 6.22 5 148.24 148.24 0 0 1-21.32 21.56L227.47 166a4 4 0 0 1-1.47 5.47"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEyeClosedThin))
export { Memo as IconEyeClosedThin }
