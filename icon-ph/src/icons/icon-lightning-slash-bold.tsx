/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLightningSlashBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M56.88 31.93a12 12 0 1 0-17.76 16.14L75.9 88.52l-36.67 39.29a12 12 0 0 0 4.56 19.43l54.44 20.41-14 70a12 12 0 0 0 20.54 10.54l58.9-63.11 35.45 39a12 12 0 0 0 17.76-16.14Zm59.17 169 7.72-38.58a12 12 0 0 0-7.56-13.59L69 131.07l23.07-24.73 55.38 60.92Zm-4.64-132.87a12 12 0 0 1-.59-17l40.41-43.25a12 12 0 0 1 20.54 10.54l-14 70 54.44 20.41a12 12 0 0 1 4.56 19.43l-16.82 18a12 12 0 0 1-17.55-16.37l4.58-4.91-47.19-17.69a12 12 0 0 1-7.56-13.59L140 55.07l-11.63 12.41a12 12 0 0 1-16.96.58"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLightningSlashBold))
export { Memo as IconLightningSlashBold }
