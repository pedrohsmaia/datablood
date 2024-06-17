/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRobotLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 50h-66V16a6 6 0 0 0-12 0v34H56a30 30 0 0 0-30 30v112a30 30 0 0 0 30 30h144a30 30 0 0 0 30-30V80a30 30 0 0 0-30-30m18 142a18 18 0 0 1-18 18H56a18 18 0 0 1-18-18V80a18 18 0 0 1 18-18h144a18 18 0 0 1 18 18Zm-54-54H92a26 26 0 0 0 0 52h72a26 26 0 0 0 0-52m-26 12v28h-20v-28Zm-60 14a14 14 0 0 1 14-14h14v28H92a14 14 0 0 1-14-14m86 14h-14v-28h14a14 14 0 0 1 0 28m-90-70a10 10 0 1 1 10 10 10 10 0 0 1-10-10m88 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRobotLight))
export { Memo as IconRobotLight }
