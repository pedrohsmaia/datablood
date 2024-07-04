/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrayLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.94 13.94 0 0 0-9.9 4.1l-19.31 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.58L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.58l19.31 19.32a13.94 13.94 0 0 0 9.9 4.1h41.38a13.94 13.94 0 0 0 9.9-4.1l19.31-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrayLight))
export { Memo as IconTrayLight }
