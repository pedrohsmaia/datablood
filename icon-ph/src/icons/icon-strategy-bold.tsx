/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStrategyBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M72 144a40 40 0 1 0 40 40 40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16 16 16 0 0 1-16 16m-32-72a12 12 0 0 1-8.49-20.49L43 96 31.51 84.49a12 12 0 0 1 17-17L60 79l11.51-11.49a12 12 0 0 1 17 17L77 96l11.52 11.51a12 12 0 0 1-17 17L60 113l-11.51 11.49A12 12 0 0 1 40 128m184.49 75.51a12 12 0 0 1-17 17L196 209l-11.51 11.52a12 12 0 0 1-17-17L179 192l-11.52-11.51a12 12 0 0 1 17-17L196 175l11.51-11.52a12 12 0 0 1 17 17L213 192Zm-43.4-92.62c-5.21 23-23.33 43.53-45.09 51.22a12 12 0 1 1-8-22.63c14.07-5 26.27-18.91 29.67-33.9 2.37-10.46.4-20.84-5.68-30.54v9a12 12 0 0 1-24 0V44a12 12 0 0 1 12-12h40a12 12 0 0 1 0 24H168c12.77 16.61 17.42 35.76 13.09 54.89"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStrategyBold))
export { Memo as IconStrategyBold }
