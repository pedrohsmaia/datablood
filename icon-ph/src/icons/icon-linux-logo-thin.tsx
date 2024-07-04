/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinuxLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M226.49 219.12a4 4 0 0 1-5.61-.62C219.54 216.82 188 176.48 188 96a60 60 0 0 0-120 0c0 80.48-31.53 120.82-32.88 122.5a4 4 0 0 1-6.25-5C29.18 213.11 60 173.45 60 96a68 68 0 0 1 136 0c0 40.48 8.47 70.27 15.57 88.14 7.69 19.35 15.48 29.27 15.56 29.36a4 4 0 0 1-.64 5.62M100 100a8 8 0 1 0 8 8 8 8 0 0 0-8-8m64 8a8 8 0 1 0-8 8 8 8 0 0 0 8-8m-66.21 32.42a4 4 0 1 0-3.58 7.16l32 16a4 4 0 0 0 3.58 0l32-16a4 4 0 0 0-3.58-7.16L128 155.53ZM128 188a50.05 50.05 0 0 0-43.49 26.05 4 4 0 1 0 7 3.89 41.34 41.34 0 0 1 73 0A4 4 0 0 0 168 220a3.94 3.94 0 0 0 1.94-.51 4 4 0 0 0 1.55-5.44A50.07 50.07 0 0 0 128 188"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLinuxLogoThin))
export { Memo as IconLinuxLogoThin }
