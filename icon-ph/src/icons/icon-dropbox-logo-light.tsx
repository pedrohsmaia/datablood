/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDropboxLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M235.42 151.07 190.54 120l44.88-31.07a6 6 0 0 0 0-9.86l-52-36a6 6 0 0 0-6.84 0L128 76.7 79.42 43.07a6 6 0 0 0-6.84 0l-52 36a6 6 0 0 0 0 9.86L65.46 120l-44.88 31.07a6 6 0 0 0 0 9.86l52 36a6 6 0 0 0 6.84 0L128 163.3l48.58 33.63a6 6 0 0 0 6.84 0l52-36a6 6 0 0 0 0-9.86M128 148.7 86.54 120 128 91.3l41.46 28.7Zm52-93.4L221.46 84 180 112.7 138.54 84Zm-104 0L117.46 84 76 112.7 34.54 84Zm0 129.4L34.54 156 76 127.3l41.46 28.7Zm104 0L138.54 156 180 127.3l41.46 28.7ZM156.82 208a6 6 0 0 1-1.51 8.35l-23.89 16.54a6 6 0 0 1-6.84 0l-23.89-16.54a6 6 0 0 1 6.83-9.86L128 220.7l20.48-14.17a6 6 0 0 1 8.34 1.47"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDropboxLogoLight))
export { Memo as IconDropboxLogoLight }
