/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconApplePodcastsLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M161.36 130a40 40 0 1 0-66.72 0 28.35 28.35 0 0 0-4.52 4.51 27.86 27.86 0 0 0-5.42 23.67l12.75 56A27.87 27.87 0 0 0 124.77 236h6.46a27.87 27.87 0 0 0 27.32-21.79l12.75-56a27.86 27.86 0 0 0-5.42-23.67 28.35 28.35 0 0 0-4.52-4.54M128 92a16 16 0 1 1-16 16 16 16 0 0 1 16-16m19.89 60.88-12.74 56a4 4 0 0 1-3.92 3.12h-6.46a4 4 0 0 1-3.92-3.12l-12.74-56a3.92 3.92 0 0 1 .77-3.37A4 4 0 0 1 112 148h32a4 4 0 0 1 3.15 1.51 3.92 3.92 0 0 1 .74 3.37M236 128a107.25 107.25 0 0 1-31.77 76.5 12 12 0 0 1-16.94-17 84 84 0 1 0-118.58 0 12 12 0 1 1-16.94 17A108 108 0 1 1 236 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconApplePodcastsLogoBold))
export { Memo as IconApplePodcastsLogoBold }
