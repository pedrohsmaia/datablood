/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCirclesFourLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M80 42a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26m96 12a38 38 0 1 0-38-38 38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26 26 26 0 0 1 26-26m-96 84a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26m96-64a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCirclesFourLight))
export { Memo as IconCirclesFourLight }
