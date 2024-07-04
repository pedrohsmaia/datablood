/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileyXEyesLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m60.24-117.76L176.49 112l11.75 11.76a6 6 0 1 1-8.48 8.48L168 120.49l-11.76 11.75a6 6 0 0 1-8.48-8.48L159.51 112l-11.75-11.76a6 6 0 0 1 8.48-8.48L168 103.51l11.76-11.75a6 6 0 0 1 8.48 8.48m-80 0L96.49 112l11.75 11.76a6 6 0 1 1-8.48 8.48L88 120.49l-11.76 11.75a6 6 0 0 1-8.48-8.48L79.51 112l-11.75-11.76a6 6 0 0 1 8.48-8.48L88 103.51l11.76-11.75a6 6 0 0 1 8.48 8.48M138 180a10 10 0 1 1-10-10 10 10 0 0 1 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSmileyXEyesLight))
export { Memo as IconSmileyXEyesLight }
