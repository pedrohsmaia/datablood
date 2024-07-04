/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExcludeBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M178 78A84 84 0 1 0 78 178 84 84 0 1 0 178 78m42 82a60.75 60.75 0 0 1-.38 6.65l-44-44a83.31 83.31 0 0 0 4-19.34A60.09 60.09 0 0 1 220 160m-119.84-4.16a60.07 60.07 0 0 1 55.68-55.68 60.07 60.07 0 0 1-55.68 55.68m52.51-79.5a83.31 83.31 0 0 0-19.34 4l-44-44A60.75 60.75 0 0 1 96 36a60.09 60.09 0 0 1 56.67 40.34M64.19 45.16l46.73 46.73a85 85 0 0 0-19 19l-46.76-46.7a60.45 60.45 0 0 1 19.03-19.03M36 96a60.75 60.75 0 0 1 .38-6.65l44 44a83.31 83.31 0 0 0-4 19.34A60.09 60.09 0 0 1 36 96m67.33 83.66a83.31 83.31 0 0 0 19.34-4l44 44a60.75 60.75 0 0 1-6.67.34 60.09 60.09 0 0 1-56.67-40.34m88.48 31.18-46.73-46.73a85 85 0 0 0 19-19l46.73 46.73a60.45 60.45 0 0 1-19 19"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconExcludeBold))
export { Memo as IconExcludeBold }
