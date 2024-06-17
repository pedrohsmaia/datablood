/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBezierCurveLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M219.44 146.2A94.66 94.66 0 0 0 173.92 86H240a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H16a6 6 0 0 0 0 12h66.08a94.66 94.66 0 0 0-45.52 60.2 30 30 0 1 0 12.09 1.08 82.53 82.53 0 0 1 51.4-56.39 30 30 0 0 0 55.9 0 82.53 82.53 0 0 1 51.4 56.39 30 30 0 1 0 12.09-1.08M58 176a18 18 0 1 1-18-18 18 18 0 0 1 18 18m70-78a18 18 0 1 1 18-18 18 18 0 0 1-18 18m88 96a18 18 0 1 1 18-18 18 18 0 0 1-18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBezierCurveLight))
export { Memo as IconBezierCurveLight }
