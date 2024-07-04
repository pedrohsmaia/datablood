/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatLineUpThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m226.83 117.17-96-96a4 4 0 0 0-5.66 0l-96 96A4 4 0 0 0 32 124h44v60a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-60h44a4 4 0 0 0 2.83-6.83M176 116a4 4 0 0 0-4 4v60H84v-60a4 4 0 0 0-4-4H41.66L128 29.66 214.34 116Zm4 100a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatLineUpThin))
export { Memo as IconArrowFatLineUpThin }
