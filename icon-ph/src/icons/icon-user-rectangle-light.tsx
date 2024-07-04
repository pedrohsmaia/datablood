/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserRectangleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M94 120a34 34 0 1 1 34 34 34 34 0 0 1-34-34m-24.79 82a66 66 0 0 1 117.58 0ZM218 200a2 2 0 0 1-2 2h-16a78.18 78.18 0 0 0-46.55-43.71 46 46 0 1 0-50.9 0A78.18 78.18 0 0 0 56 202H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserRectangleLight))
export { Memo as IconUserRectangleLight }
