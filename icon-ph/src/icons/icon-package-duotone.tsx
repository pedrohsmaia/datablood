/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPackageDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M128 129.09V232a8 8 0 0 1-3.84-1l-88-48.18a8 8 0 0 1-4.16-7V80.18a8 8 0 0 1 .7-3.25Z"
          opacity={0.2}
        />
        <Path d="m223.68 66.15-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44-29.77 16.3-80.35-44Zm0 88L47.66 76l33.9-18.56 80.34 44ZM40 90l80 43.78v85.79l-80-43.75Zm176 85.78-80 43.79v-85.75l32-17.51V152a8 8 0 0 0 16 0v-44.45L216 90v85.77Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPackageDuotone))
export { Memo as IconPackageDuotone }
