/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArchiveBoxThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m219.58 70.21-16-32A4 4 0 0 0 200 36H56a4 4 0 0 0-3.58 2.21l-16 32A4 4 0 0 0 36 72v136a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V72a4 4 0 0 0-.42-1.79M58.47 44h139.06l12 24H46.47ZM208 212H48a4 4 0 0 1-4-4V76h168v132a4 4 0 0 1-4 4m-45.17-62.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 174.34V104a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 0 1 5.66 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArchiveBoxThin))
export { Memo as IconArchiveBoxThin }
