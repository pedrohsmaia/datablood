/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPrinterLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M214.67 74H198V40a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v34H41.33C28.47 74 18 83.87 18 96v80a6 6 0 0 0 6 6h34v34a6 6 0 0 0 6 6h128a6 6 0 0 0 6-6v-34h34a6 6 0 0 0 6-6V96c0-12.13-10.47-22-23.33-22M70 46h116v28H70Zm116 164H70v-52h116Zm40-40h-28v-18a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v18H30V96c0-5.51 5.08-10 11.33-10h173.34c6.25 0 11.33 4.49 11.33 10Zm-28-54a10 10 0 1 1-10-10 10 10 0 0 1 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPrinterLight))
export { Memo as IconPrinterLight }
