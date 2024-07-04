/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCookingPotLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M90 48V16a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m91.6 46.8L222 123v61a30 30 0 0 1-30 30H64a30 30 0 0 1-30-30v-61L4.4 100.8a6 6 0 0 1 7.2-9.6L34 108V88a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14v20l22.4-16.8a6 6 0 0 1 7.2 9.6M210 88a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v96a18 18 0 0 0 18 18h128a18 18 0 0 0 18-18Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCookingPotLight))
export { Memo as IconCookingPotLight }
