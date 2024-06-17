/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicrosoftOutlookLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M88 100a28 28 0 1 0 28 28 28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20m128-40h-12V48a12 12 0 0 0-12-12h-80a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h36v20a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-88a12 12 0 0 0-12-12m-57.17 56L220 119.84a.78.78 0 0 1 0 .16v88a1 1 0 0 1 0 .17Zm52.8-48-7.63 5.51V116ZM108 48a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v79.29l-44 31.78-4-2.89V80a12 12 0 0 0-12-12h-28ZM36 176V80a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m48 32v-20h52a12 12 0 0 0 12-12v-9.95L211.63 212H88a4 4 0 0 1-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMicrosoftOutlookLogoThin))
export { Memo as IconMicrosoftOutlookLogoThin }
