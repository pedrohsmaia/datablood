/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatDownLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M229.54 133.7A6 6 0 0 0 224 130h-42V48a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v82H32a6 6 0 0 0-4.24 10.24l96 96a6 6 0 0 0 8.48 0l96-96a6 6 0 0 0 1.3-6.54M128 223.51 46.49 142H80a6 6 0 0 0 6-6V48a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2v88a6 6 0 0 0 6 6h33.51Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatDownLight))
export { Memo as IconArrowFatDownLight }
