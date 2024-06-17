/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioactiveLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 134H40a13.94 13.94 0 0 1-10.28-4.56 14.17 14.17 0 0 1-3.66-10.84 101.81 101.81 0 0 1 42.75-74A14 14 0 0 1 89 49l26 45a6 6 0 0 1-10.4 6L78.62 55a2 2 0 0 0-2.88-.65A89.83 89.83 0 0 0 38 119.68a2.13 2.13 0 0 0 .57 1.67A1.88 1.88 0 0 0 40 122h52a6 6 0 0 1 0 12m137.94-15.4a101.81 101.81 0 0 0-42.75-74A14 14 0 0 0 167 49l-26 45a6 6 0 0 0 10.4 6l25.98-45a2 2 0 0 1 2.88-.65A89.83 89.83 0 0 1 218 119.68a2.13 2.13 0 0 1-.57 1.67 1.88 1.88 0 0 1-1.43.65h-52a6 6 0 0 0 0 12h52a13.94 13.94 0 0 0 10.28-4.56 14.17 14.17 0 0 0 3.66-10.84m-78.74 37.58a6 6 0 1 0-10.39 6l25.82 44.73a2 2 0 0 1-.88 2.82 90.29 90.29 0 0 1-75.5 0 2 2 0 0 1-.88-2.82l25.82-44.73a6 6 0 1 0-10.39-6L79 200.91a14 14 0 0 0 6.23 19.71 102.29 102.29 0 0 0 85.58 0 14 14 0 0 0 6.19-19.71ZM128 138a10 10 0 1 0-10-10 10 10 0 0 0 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadioactiveLight))
export { Memo as IconRadioactiveLight }
