/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHOneLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230 112v96a6 6 0 0 1-12 0v-84.79L203.33 133a6 6 0 0 1-6.66-10l24-16a6 6 0 0 1 9.33 5m-86-62a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHOneLight))
export { Memo as IconTextHOneLight }
