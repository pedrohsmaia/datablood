/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGoogleChromeLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 8a92.08 92.08 0 0 1 80.78 48H128a44.05 44.05 0 0 0-43.82 40.11L54.51 72.72A91.9 91.9 0 0 1 128 36m0 128a36 36 0 1 1 36-36 36 36 0 0 1-36 36m-92-36a91.52 91.52 0 0 1 13.51-47.95L89.9 150c0 .09.11.17.17.26a43.93 43.93 0 0 0 56.47 17.63l-29.7 51.43A92.13 92.13 0 0 1 36 128m92 92h-2.29l40.39-70a1.21 1.21 0 0 0 .09-.2A43.89 43.89 0 0 0 153.25 92h59.41A92 92 0 0 1 128 220"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGoogleChromeLogoThin))
export { Memo as IconGoogleChromeLogoThin }
