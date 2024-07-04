/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTentLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m253.48 197.56-64-144A6 6 0 0 0 184 50H72a6 6 0 0 0-5.45 3.51v.14L2.52 197.56A6 6 0 0 0 8 206h240a6 6 0 0 0 5.48-8.44M66 84.27V194H17.23ZM78 194V84.27L126.77 194Zm61.9 0L81.23 62h98.87l58.67 132Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTentLight))
export { Memo as IconTentLight }
