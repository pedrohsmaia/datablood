/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFolderBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 68h-82.61l-26-29.29a20 20 0 0 0-15-6.71H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h177.51A19.13 19.13 0 0 0 236 200.89V88a20 20 0 0 0-20-20M44 56h46.61l10.67 12H44Zm168 140H44V92h168Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFolderBold))
export { Memo as IconFolderBold }
