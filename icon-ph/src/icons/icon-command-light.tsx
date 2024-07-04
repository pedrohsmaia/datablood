/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCommandLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180 146h-22v-36h22a34 34 0 1 0-34-34v22h-36V76a34 34 0 1 0-34 34h22v36H76a34 34 0 1 0 34 34v-22h36v22a34 34 0 1 0 34-34m-22-70a22 22 0 1 1 22 22h-22ZM54 76a22 22 0 0 1 44 0v22H76a22 22 0 0 1-22-22m44 104a22 22 0 1 1-22-22h22Zm12-70h36v36h-36Zm70 92a22 22 0 0 1-22-22v-22h22a22 22 0 0 1 0 44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCommandLight))
export { Memo as IconCommandLight }
