/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFigmaLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180.45 96A38 38 0 0 0 160 26H88a38 38 0 0 0-20.45 70A38 38 0 0 0 69 160.89 42 42 0 1 0 134 196v-40.32A38 38 0 1 0 180.45 96M186 64a26 26 0 0 1-26 26h-26V38h26a26 26 0 0 1 26 26M62 64a26 26 0 0 1 26-26h34v52H88a26 26 0 0 1-26-26m26 90a26 26 0 0 1 0-52h34v52zm34 42a30 30 0 1 1-30-30h30Zm38-42a26 26 0 1 1 26-26 26 26 0 0 1-26 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFigmaLogoLight))
export { Memo as IconFigmaLogoLight }
