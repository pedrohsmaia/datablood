/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNotebookThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180 112a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-92v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M48 212h28V44H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4M212 48a4 4 0 0 0-4-4H84v168h124a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNotebookThin))
export { Memo as IconNotebookThin }
