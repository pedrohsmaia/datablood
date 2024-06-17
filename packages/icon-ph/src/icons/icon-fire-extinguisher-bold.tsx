/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFireExtinguisherBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M219.45 44.51 170.07 29.7 185 22.93a12 12 0 1 0-10-21.85l-41.78 19A84.09 84.09 0 0 0 52 104v104a12 12 0 0 0 24 0v-28h16v52a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V104a44.08 44.08 0 0 0-32-42.32V48.13l64.55 19.37a11.81 11.81 0 0 0 3.45.5 12 12 0 0 0 3.45-23.49M76 156v-52a60.1 60.1 0 0 1 48-58.79v16.47A44.06 44.06 0 0 0 92 104v52Zm40 72v-48h40v48Zm40-124v52h-40v-52a20 20 0 0 1 40 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFireExtinguisherBold))
export { Memo as IconFireExtinguisherBold }
