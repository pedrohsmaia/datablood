/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUsersLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M112.6 158.43a58 58 0 1 0-57.2 0 93.83 93.83 0 0 0-50.19 38.29 6 6 0 0 0 10.05 6.56 82 82 0 0 1 137.48 0 6 6 0 0 0 10-6.56 93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46 46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12 46 46 0 1 0-17.08-88.73 6 6 0 1 1-4.46-11.14 58 58 0 0 1 50.14 104.3 93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUsersLight))
export { Memo as IconUsersLight }
