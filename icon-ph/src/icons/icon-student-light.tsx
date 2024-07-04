/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStudentLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m225.9 58.31-96-32a6 6 0 0 0-3.8 0l-96 32A6 6 0 0 0 26 64v80a6 6 0 0 0 12 0V72.32l38.68 12.9A62 62 0 0 0 99 174.75c-19.25 6.53-36 19.59-48 38a6 6 0 0 0 10 6.53C76.47 195.59 100.88 182 128 182s51.53 13.59 67 37.28a6 6 0 0 0 10-6.56c-12-18.38-28.73-31.44-48-38a62 62 0 0 0 22.27-89.53l46.63-15.5a6 6 0 0 0 0-11.38M178 120a50 50 0 1 1-89.37-30.8l37.47 12.49a6 6 0 0 0 3.8 0l37.47-12.49A49.78 49.78 0 0 1 178 120m-50-30.32L51 64l77-25.68L205 64Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStudentLight))
export { Memo as IconStudentLight }
