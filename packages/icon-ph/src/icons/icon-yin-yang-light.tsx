/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconYinYangLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M38 128a90.1 90.1 0 0 1 90-90 42 42 0 0 1 0 84 54 54 0 0 0-44.88 84A90.06 90.06 0 0 1 38 128m90 90a42 42 0 0 1 0-84 54 54 0 0 0 44.88-84A90 90 0 0 1 128 218m12-42a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-22-96a10 10 0 1 1 10 10 10 10 0 0 1-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconYinYangLight))
export { Memo as IconYinYangLight }
