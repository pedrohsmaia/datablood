/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBezierCurveThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M217.83 148.07A92.6 92.6 0 0 0 165.53 84H240a4 4 0 0 0 0-8h-84.29a28 28 0 0 0-55.42 0H16a4 4 0 0 0 0 8h74.47a92.6 92.6 0 0 0-52.3 64.07 28 28 0 1 0 8.07.64 84.51 84.51 0 0 1 55-60.36 28 28 0 0 0 53.46 0 84.53 84.53 0 0 1 55 60.36 28 28 0 1 0 8.07-.64ZM60 176a20 20 0 1 1-20-20 20 20 0 0 1 20 20m68-76a20 20 0 1 1 20-20 20 20 0 0 1-20 20m88 96a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBezierCurveThin))
export { Memo as IconBezierCurveThin }
