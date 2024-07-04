/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerXLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M154.64 26.61a6 6 0 0 0-6.32.65L77.94 82H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224V32a6 6 0 0 0-3.36-5.39M30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2m116 51.73-60-46.67V90.94l60-46.67Zm98.24-64a6 6 0 1 1-8.48 8.48L216 136.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L207.52 128l-19.76-19.76a6 6 0 0 1 8.48-8.48L216 119.52l19.76-19.76a6 6 0 0 1 8.48 8.48L224.48 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerXLight))
export { Memo as IconSpeakerXLight }
