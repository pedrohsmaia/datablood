/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHOneThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 112v96a4 4 0 0 1-8 0v-88.53l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 228 112m-84-60a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHOneThin))
export { Memo as IconTextHOneThin }
