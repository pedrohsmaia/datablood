/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunglassesFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 40a8 8 0 0 0 0 16 16 16 0 0 1 16 16v56H40V72a16 16 0 0 1 16-16 8 8 0 0 0 0-16 32 32 0 0 0-32 32v92a44 44 0 0 0 88 0v-20h32v20a44 44 0 0 0 88 0V72a32 32 0 0 0-32-32M93.66 181.66a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32m120 0a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunglassesFill))
export { Memo as IconSunglassesFill }
