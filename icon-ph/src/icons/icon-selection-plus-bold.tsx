/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSelectionPlusBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M156 40a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-12 164h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24m60-152v20a12 12 0 0 0 24 0V48a20 20 0 0 0-20-20h-24a12 12 0 0 0 0 24Zm12 48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12M40 156a12 12 0 0 0 12-12v-32a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12m32 48H52v-20a12 12 0 0 0-24 0v24a20 20 0 0 0 20 20h24a12 12 0 0 0 0-24m0-176H48a20 20 0 0 0-20 20v24a12 12 0 0 0 24 0V52h20a12 12 0 0 0 0-24m168 176h-12v-12a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v12a12 12 0 0 0 24 0v-12h12a12 12 0 0 0 0-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSelectionPlusBold))
export { Memo as IconSelectionPlusBold }
