/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerXThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M153.76 28.41a4 4 0 0 0-4.22.43L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84 3.92 3.92 0 0 0 1.76-.41A4 4 0 0 0 156 224V32a4 4 0 0 0-2.24-3.59M28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4m120 55.82L84 166V90l64-49.78Zm94.83-66.65a4 4 0 0 1-5.66 5.66L216 133.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L210.34 128l-21.17-21.17a4 4 0 0 1 5.66-5.66L216 122.34l21.17-21.17a4 4 0 1 1 5.66 5.66L221.66 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerXThin))
export { Memo as IconSpeakerXThin }
