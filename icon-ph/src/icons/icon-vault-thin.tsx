/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVaultThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h20v20a4 4 0 0 0 8 0v-20h120v20a4 4 0 0 0 8 0v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m0 152H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v68h-24.19a44 44 0 1 0 0 8H220v60a4 4 0 0 1-4 4m-52.7-72a12 12 0 1 0 0 8h24.47a36 36 0 1 1 0-8Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVaultThin))
export { Memo as IconVaultThin }
