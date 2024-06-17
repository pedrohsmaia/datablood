/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitlabLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M230.15 117.1 210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61m-189.47 7 73.45 51.9-20.72 14.65L57.09 165a41.06 41.06 0 0 1-16.41-40.89Zm87.32 91-20.73-14.65L128 185.8l20.73 14.64Zm70.91-50.1-36.32 25.66L141.87 176l73.45-51.9a41.06 41.06 0 0 1-16.41 40.9"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitlabLogoFill))
export { Memo as IconGitlabLogoFill }
