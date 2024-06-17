/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBandaidsDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M206.63 94.63 173.25 128 128 82.75l33.37-33.38a32 32 0 0 1 45.26 45.26M49.37 161.37a32 32 0 0 0 45.26 45.26L128 173.25 82.75 128ZM82.75 128 128 82.75 94.63 49.37a32 32 0 0 0-45.26 45.26Zm90.5 0L128 173.25l33.37 33.38a32 32 0 0 0 45.26-45.26Z"
          opacity={0.2}
        />
        <Path d="m184.57 128 27.71-27.72a40 40 0 1 0-56.56-56.56L128 71.43l-27.72-27.71a40 40 0 1 0-56.56 56.56L71.43 128l-27.71 27.72a40 40 0 1 0 56.56 56.56L128 184.57l27.72 27.71a40 40 0 1 0 56.56-56.56ZM167 55a24 24 0 1 1 34 34l-27.72 27.72-33.97-33.97Zm-5.09 73L128 161.94 94.06 128 128 94.06ZM55 89a24 24 0 1 1 34-34l27.72 27.72-33.97 33.97Zm34 112a24 24 0 1 1-34-34l27.72-27.72 33.94 33.94Zm112 0a24 24 0 0 1-34 0l-27.72-27.72 33.94-33.94L201 167a24 24 0 0 1 0 34m-85-73a12 12 0 1 1 12 12 12 12 0 0 1-12-12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBandaidsDuotone))
export { Memo as IconBandaidsDuotone }
