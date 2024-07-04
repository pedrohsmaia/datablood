/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMedalMilitaryDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M168 184a40 40 0 1 1-40-40 40 40 0 0 1 40 40m39-144h-39v85.82l42.72-19.42a9 9 0 0 0 5.28-8.2V49a9 9 0 0 0-9-9M88 40H49a9 9 0 0 0-9 9v49.2a9 9 0 0 0 5.28 8.2L88 125.82Z"
          opacity={0.2}
        />
        <Path d="M207 32H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 113.68a17 17 0 0 0 10-15.47V49a17 17 0 0 0-17-17m-47 16v72.67l-32 14.54-32-14.54V48ZM48 98.21V49a1 1 0 0 1 1-1h31v65.39L48.59 99.12a1 1 0 0 1-.59-.91M128 216a32 32 0 1 1 32-32 32 32 0 0 1-32 32m80-117.79a1 1 0 0 1-.59.91L176 113.39V48h31a1 1 0 0 1 1 1Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconMedalMilitaryDuotone))
export { Memo as IconMedalMilitaryDuotone }
