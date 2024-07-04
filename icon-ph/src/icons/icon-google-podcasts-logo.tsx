/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGooglePodcastsLogo = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M136 16v32a8 8 0 0 1-16 0V16a8 8 0 0 1 16 0m40 40a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-48 144a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0-120a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M80 56a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m96 72a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8M32 104a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m48 48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m144-48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGooglePodcastsLogo))
export { Memo as IconGooglePodcastsLogo }
