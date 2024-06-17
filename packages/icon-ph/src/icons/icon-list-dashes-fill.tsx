/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconListDashesFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 56v16a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8M56 48H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m160 64H96a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m-160 0H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m160 64H96a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m-160 0H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconListDashesFill))
export { Memo as IconListDashesFill }
