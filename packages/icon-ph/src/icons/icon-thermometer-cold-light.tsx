/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconThermometerColdLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m248.29 75.82-22.58 7.33 13.95 19.21a6 6 0 1 1-9.7 7.06L216 90.21l-14 19.21a6 6 0 1 1-9.7-7.06l13.95-19.21-22.58-7.33a6 6 0 1 1 3.71-11.41L210 71.74V48a6 6 0 0 1 12 0v23.74l22.58-7.33a6 6 0 0 1 3.71 11.41M150 184a30 30 0 1 1-36-29.4V120a6 6 0 0 1 12 0v34.6a30.05 30.05 0 0 1 24 29.4m-12 0a18 18 0 1 0-18 18 18 18 0 0 0 18-18m44 0a62 62 0 1 1-100-49V48a38 38 0 0 1 76 0v87a62.06 62.06 0 0 1 24 49m-12 0a50.07 50.07 0 0 0-21.43-41 6 6 0 0 1-2.57-5V48a26 26 0 0 0-52 0v90a6 6 0 0 1-2.57 5A50 50 0 1 0 170 184"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconThermometerColdLight))
export { Memo as IconThermometerColdLight }
