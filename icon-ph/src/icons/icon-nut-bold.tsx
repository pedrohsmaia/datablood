/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNutBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M76 128a52 52 0 1 0 52-52 52.05 52.05 0 0 0-52 52m80 0a28 28 0 1 1-28-28 28 28 0 0 1 28 28m69.6-65.36-88-48.17a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.17a20 20 0 0 0 10.4-17.55V80.19a20 20 0 0 0-10.4-17.55M212 173.44l-84 46-84-46V82.56l84-46 84 46Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNutBold))
export { Memo as IconNutBold }
