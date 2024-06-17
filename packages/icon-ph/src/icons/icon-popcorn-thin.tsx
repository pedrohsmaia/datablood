/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPopcornThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M226.76 77.11a4 4 0 0 0-3.86-1l-3.49 1a40 40 0 0 0-53.71-30.47 40 40 0 0 0-75.4 0 40 40 0 0 0-53.71 30.51l-3.49-1a4 4 0 0 0-5 4.77l30.56 129.83A11.94 11.94 0 0 0 70.34 220h115.32a11.94 11.94 0 0 0 11.68-9.25l30.55-129.83a4 4 0 0 0-1.13-3.81M76 52a32.08 32.08 0 0 1 15 3.72 4 4 0 0 0 5.78-2.66 32 32 0 0 1 62.47 0 4 4 0 0 0 5.75 2.66 32 32 0 0 1 46.65 23.64l-43.43 12.42-35.76-14.31a12 12 0 0 0-8.92 0L87.78 91.78 44.33 79.36A32 32 0 0 1 76 52m-5.66 160a4 4 0 0 1-3.9-3.08l-29-123.2 46.94 13.41L99.43 212Zm37.16 0L92.38 98.56l34.14-13.66a4 4 0 0 1 3 0l34.13 13.66L148.5 212Zm82.06-3.08a4 4 0 0 1-3.9 3.08h-29.09l15.05-112.87 46.92-13.41Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPopcornThin))
export { Memo as IconPopcornThin }
