/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSelectionInverseBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M156 216a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24M228 48v160a20 20 0 0 1-20 20h-24a12 12 0 0 1 0-24h3L52 69v3a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H69l135 135Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSelectionInverseBold))
export { Memo as IconSelectionInverseBold }
