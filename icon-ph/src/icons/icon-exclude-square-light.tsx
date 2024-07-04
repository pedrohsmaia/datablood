/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExcludeSquareLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-53.52 120-44-44h39l44 44ZM46 54.48l44 44v39l-44-44ZM93.52 46l44 44h-39l-44-44ZM102 154v-52h52v52Zm64 3.52v-39l44 44v39Zm44-12L166.48 102H210Zm-56-56L110.48 46H154Zm-108 21L89.52 154H46Zm56 56L145.52 210H102Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconExcludeSquareLight))
export { Memo as IconExcludeSquareLight }
