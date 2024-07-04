/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDiceThreeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 92a10 10 0 1 1-10-10 10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10 10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10 10 10 0 0 1 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDiceThreeLight))
export { Memo as IconDiceThreeLight }
