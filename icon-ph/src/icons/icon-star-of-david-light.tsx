/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStarOfDavidLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m198.91 128 30.3-53a6 6 0 0 0-5.21-9h-60.51l-30.28-53a6 6 0 0 0-10.42 0L92.5 66H32a6 6 0 0 0-5.21 9l30.28 53-30.28 53a6 6 0 0 0 5.21 9h60.5l30.29 53a6 6 0 0 0 10.42 0l30.28-53H224a6 6 0 0 0 5.21-9Zm14.75-50L192 115.91 170.34 78Zm-28.57 50-28.56 50H99.46L70.9 128l28.56-50h57.07ZM128 28.09 149.67 66h-43.35ZM42.34 78h43.3L64 115.91Zm0 99.92L64 140.09 85.64 178ZM128 227.91 106.32 190h43.35ZM170.34 178 192 140.09 213.66 178Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStarOfDavidLight))
export { Memo as IconStarOfDavidLight }
