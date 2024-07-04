/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGavelLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m241.91 118.1-16-16a14 14 0 0 0-19.55-.23l-52.23-52.23a14 14 0 0 0-.23-19.55l-16-16a14 14 0 0 0-19.8 0l-64 64a14 14 0 0 0 0 19.8l16 16a14 14 0 0 0 19.55.23l9.87 9.88-66.79 66.79a23 23 0 0 0 32.48 32.49L132 156.49l9.87 9.87a14 14 0 0 0 .23 19.55l16 16a14 14 0 0 0 19.8 0l64-64a14 14 0 0 0 .01-19.81m-91.56 39.76-52.21-52.2 47.52-47.52 52.2 52.2Zm-71.76-52.45-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83l-64 64a2 2 0 0 1-2.83 0M56.73 214.8a11 11 0 0 1-15.52-15.52L108 132.49 123.52 148Zm176.69-85.38-64 64a2 2 0 0 1-2.83 0l-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGavelLight))
export { Memo as IconGavelLight }
