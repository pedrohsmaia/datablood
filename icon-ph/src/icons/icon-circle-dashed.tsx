/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCircleDashed = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M96.26 37.05a8 8 0 0 1 5.74-9.76 104.11 104.11 0 0 1 52 0 8 8 0 0 1-2 15.75 8.15 8.15 0 0 1-2-.26 88.09 88.09 0 0 0-44 0 8 8 0 0 1-9.74-5.73M53.79 55.14a104.05 104.05 0 0 0-26 45 8 8 0 0 0 15.42 4.27 88 88 0 0 1 22-38.09 8 8 0 0 0-11.42-11.18m-10.58 96.41a8 8 0 1 0-15.42 4.28 104.12 104.12 0 0 0 26 45 8 8 0 0 0 11.41-11.22 88.14 88.14 0 0 1-21.99-38.06M150 213.22a88 88 0 0 1-44 0 8 8 0 1 0-4 15.49 104.11 104.11 0 0 0 52 0 8 8 0 0 0-4-15.49M222.65 146a8 8 0 0 0-9.85 5.58 87.91 87.91 0 0 1-22 38.08 8 8 0 1 0 11.42 11.21 104 104 0 0 0 26-45 8 8 0 0 0-5.57-9.87m-9.86-41.54a8 8 0 0 0 15.42-4.28 104 104 0 0 0-26-45A8 8 0 1 0 190.8 66.4a88 88 0 0 1 21.99 38.05Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCircleDashed))
export { Memo as IconCircleDashed }
