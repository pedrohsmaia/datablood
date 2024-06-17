/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFinnTheHumanBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 88H96a52 52 0 0 0 0 104h64a52 52 0 0 0 0-104m0 80H96a28 28 0 0 1 0-56h64a28 28 0 0 1 0 56m-48-28a16 16 0 1 1-16-16 16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m36-112a36 36 0 0 0-33.94 24H77.94A36 36 0 0 0 8 64v76a88.1 88.1 0 0 0 88 88h64a88.1 88.1 0 0 0 88-88V64a36 36 0 0 0-36-36m12 112a64.07 64.07 0 0 1-64 64H96a64.07 64.07 0 0 1-64-64V64a12 12 0 0 1 24 0 12 12 0 0 0 12 12h120a12 12 0 0 0 12-12 12 12 0 0 1 24 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFinnTheHumanBold))
export { Memo as IconFinnTheHumanBold }
