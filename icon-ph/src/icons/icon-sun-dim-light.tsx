/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunDimLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M122 40v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62 62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50 50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-8-8a6 6 0 0 0-8.48 8.48Zm0 119.52-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 1 0-8.48-8.48m136-136-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 0 0-8.48-8.48m.48 136a6 6 0 0 0-8.48 8.48l8 8a6 6 0 0 0 8.48-8.48ZM40 122h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12m88 88a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m96-88h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunDimLight))
export { Memo as IconSunDimLight }
