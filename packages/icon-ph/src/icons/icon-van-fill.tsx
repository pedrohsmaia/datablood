/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVanFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m254.07 114.79-45.54-53.06A16 16 0 0 0 196.26 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21M32 112V72h56v40Zm48 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16m80-96h-56V72h56Zm32 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16m-16-96V72h20.26l34.33 40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVanFill))
export { Memo as IconVanFill }
