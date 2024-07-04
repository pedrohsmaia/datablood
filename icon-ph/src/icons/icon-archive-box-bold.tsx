/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArchiveBoxBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m226.73 66.63-16-32A12 12 0 0 0 200 28H56a12 12 0 0 0-10.73 6.63l-16 32A12 12 0 0 0 28 72v136a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a12 12 0 0 0-1.27-5.37M192.58 52l6 12H57.42l6-12ZM52 204V88h152v116Zm116.49-64.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 151v-39a12 12 0 0 1 24 0v39l11.51-11.52a12 12 0 0 1 16.98.03"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArchiveBoxBold))
export { Memo as IconArchiveBoxBold }
