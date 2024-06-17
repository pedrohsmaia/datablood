/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFoldersBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 56h-68l-26.67-20a20.12 20.12 0 0 0-12-4H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h152.89A19.13 19.13 0 0 0 208 204.89V184h20.89A19.13 19.13 0 0 0 248 164.89V76a20 20 0 0 0-20-20m-44 144H40V96h40l26.67 20a20.12 20.12 0 0 0 12 4H184Zm40-40h-16v-44a20 20 0 0 0-20-20h-68L93.33 76a20.12 20.12 0 0 0-12-4H80V56h40l26.67 20a20.12 20.12 0 0 0 12 4H224Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFoldersBold))
export { Memo as IconFoldersBold }
