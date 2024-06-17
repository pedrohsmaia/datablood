/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileHtmlFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 112V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8m-64-24V44l44 44Zm-24 64a8 8 0 0 1-8 8h-8v48a8 8 0 0 1-16 0v-48h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-56 0v56a8 8 0 0 1-16 0v-20H40v20a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0v20h16v-20a8 8 0 0 1 16 0m176 56a8 8 0 0 1-8 8h-20a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h12a8 8 0 0 1 8 8m-48-56v56a8 8 0 0 1-16 0v-27.12l-9.14 15.24a8 8 0 0 1-13.72 0L152 180.88V208a8 8 0 0 1-16 0v-56a8 8 0 0 1 14.86-4.12L168 176.45l17.14-28.57A8 8 0 0 1 200 152"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileHtmlFill))
export { Memo as IconFileHtmlFill }
