/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDetectiveBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 104h-24.79l-43.39-59.76a20 20 0 0 0-31.61-.94l-12.82 14.86c-.1.11-.2.23-.29.35a4 4 0 0 1-6.2 0c-.09-.12-.19-.24-.29-.35L111.79 43.3a20 20 0 0 0-31.61.94L36.79 104H12a12 12 0 0 0 0 24h232a12 12 0 0 0 0-24M96.62 62.45l9.69 11.24a28 28 0 0 0 43.38 0l9.69-11.24L189.55 104H66.45ZM180 140a40.07 40.07 0 0 0-39.2 32h-25.6a40 40 0 1 0-2.55 24h30.7A40 40 0 1 0 180 140M76 196a16 16 0 1 1 16-16 16 16 0 0 1-16 16m104 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDetectiveBold))
export { Memo as IconDetectiveBold }
