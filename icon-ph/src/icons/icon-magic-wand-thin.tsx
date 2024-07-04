/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMagicWandThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 152a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4M56 68h20v20a4 4 0 0 0 8 0V68h20a4 4 0 0 0 0-8H84V40a4 4 0 0 0-8 0v20H56a4 4 0 0 0 0 8m128 128h-12v-12a4 4 0 0 0-8 0v12h-12a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8m32.48-118.83L77.17 216.49a12 12 0 0 1-17 0L39.51 195.8a12 12 0 0 1 0-17L178.83 39.51a12 12 0 0 1 17 0l20.65 20.69a12 12 0 0 1 0 16.97M170.34 112 144 85.66l-98.83 98.83a4 4 0 0 0 0 5.65l20.68 20.69a4 4 0 0 0 5.66 0Zm40.49-46.14-20.69-20.69a4 4 0 0 0-5.66 0L149.65 80 176 106.34l34.83-34.83a4 4 0 0 0 0-5.65"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMagicWandThin))
export { Memo as IconMagicWandThin }
