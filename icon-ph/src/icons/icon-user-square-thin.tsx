/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserSquareThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M63 212a68 68 0 0 1 130 0Zm149-4a4 4 0 0 1-4 4h-6.66a76 76 0 0 0-52.75-53.13 44 44 0 1 0-41.18 0A76 76 0 0 0 54.66 212H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-52a36 36 0 1 1 36-36 36 36 0 0 1-36 36"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserSquareThin))
export { Memo as IconUserSquareThin }
