/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMarkerCircleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46M88 206.37V176h80v30.37a88.38 88.38 0 0 1-80 0M104 136h48v24h-48Zm86.22 54.23c-2 2-4.08 3.87-6.22 5.64V176a16 16 0 0 0-16-16v-24a16 16 0 0 0-13.74-15.82L143.6 73.3a16 16 0 0 0-31.2 0l-10.66 46.88A16 16 0 0 0 88 136v24a16 16 0 0 0-16 16v19.87a88.917 88.917 0 0 1-6.22-5.64 88 88 0 1 1 124.44 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMarkerCircleFill))
export { Memo as IconMarkerCircleFill }
