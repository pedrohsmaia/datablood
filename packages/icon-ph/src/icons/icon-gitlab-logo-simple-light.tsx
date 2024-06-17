/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitlabLogoSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m228.21 117.61-19.89-76.12a9.94 9.94 0 0 0-19-.93L171.17 90H84.83L66.66 40.56a9.94 9.94 0 0 0-19 .93l-19.87 76.12A55.18 55.18 0 0 0 49 176.42l73.27 51.77a9.94 9.94 0 0 0 11.44 0L207 176.42a55.18 55.18 0 0 0 21.21-58.81m-28.15 49L128 217.53l-72.06-50.91a43.12 43.12 0 0 1-16.54-46l18.25-69.8L75 98.07a6 6 0 0 0 5.64 3.93h94.72a6 6 0 0 0 5.64-3.93l17.36-47.25 18.25 69.82a43.12 43.12 0 0 1-16.55 45.98Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitlabLogoSimpleLight))
export { Memo as IconGitlabLogoSimpleLight }
