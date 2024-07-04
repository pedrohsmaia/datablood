/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitlabLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m228.21 117.61-19.89-76.12a9.94 9.94 0 0 0-19-.93L171.17 90H84.83L66.66 40.56a9.94 9.94 0 0 0-19 .93l-19.87 76.12A55.18 55.18 0 0 0 49 176.42l73.27 51.77a9.94 9.94 0 0 0 11.44 0L207 176.42a55.18 55.18 0 0 0 21.21-58.81M57.65 50.82 75 98.07a6 6 0 0 0 5.64 3.93h94.72a6 6 0 0 0 5.64-3.93l17.36-47.25 15 57.52L128 168.66l-85.38-60.32Zm-18.27 69.92L117.6 176l-24.19 17.1-37.47-26.48a43.1 43.1 0 0 1-16.56-45.88M128 217.53l-24.19-17.09L128 183.35l24.19 17.09Zm72.06-50.91-37.47 26.48L138.4 176l78.22-55.26a43.1 43.1 0 0 1-16.56 45.88"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitlabLogoLight))
export { Memo as IconGitlabLogoLight }
