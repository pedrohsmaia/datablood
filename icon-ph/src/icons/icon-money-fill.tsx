/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMoneyFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 128a40 40 0 1 1-40-40 40 40 0 0 1 40 40m80-64v128a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h224a8 8 0 0 1 8 8m-16 46.35A56.78 56.78 0 0 1 193.65 72H62.35A56.78 56.78 0 0 1 24 110.35v35.3A56.78 56.78 0 0 1 62.35 184h131.3A56.78 56.78 0 0 1 232 145.65Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMoneyFill))
export { Memo as IconMoneyFill }
