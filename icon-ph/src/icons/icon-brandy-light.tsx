/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandyLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 88a93.64 93.64 0 0 0-15.21-51.28 6 6 0 0 0-5-2.72H54.23a6 6 0 0 0-5 2.72A93.64 93.64 0 0 0 34 88a94.1 94.1 0 0 0 88 93.8V218H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-36.2A94.1 94.1 0 0 0 222 88M57.56 46h140.88a81.62 81.62 0 0 1 11.34 36H46.22a81.62 81.62 0 0 1 11.34-36M128 170a82.09 82.09 0 0 1-81.76-76h163.52A82.09 82.09 0 0 1 128 170"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandyLight))
export { Memo as IconBrandyLight }
