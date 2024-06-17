/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWarningOctagonThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m104-44.45v72.9a12 12 0 0 1-3.51 8.49l-51.55 51.55a12 12 0 0 1-8.49 3.51h-72.9a12 12 0 0 1-8.49-3.51l-51.55-51.55a12 12 0 0 1-3.51-8.49v-72.9a12 12 0 0 1 3.51-8.49l51.55-51.55A12 12 0 0 1 91.55 28h72.9a12 12 0 0 1 8.49 3.51l51.55 51.55a12 12 0 0 1 3.51 8.49m-8 0a4 4 0 0 0-1.17-2.83l-51.55-51.55a4.06 4.06 0 0 0-2.83-1.17h-72.9a4.06 4.06 0 0 0-2.83 1.17L37.17 88.72A4 4 0 0 0 36 91.55v72.9a4 4 0 0 0 1.17 2.83l51.55 51.55a4.06 4.06 0 0 0 2.83 1.17h72.9a4.06 4.06 0 0 0 2.83-1.17l51.55-51.55a4 4 0 0 0 1.17-2.83ZM128 164a8 8 0 1 0 8 8 8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWarningOctagonThin))
export { Memo as IconWarningOctagonThin }
