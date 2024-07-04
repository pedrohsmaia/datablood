/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilePptLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 152a6 6 0 0 1-6 6h-14v50a6 6 0 0 1-12 0v-50h-14a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M90 172a26 26 0 0 1-26 26H54v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14H54v28h10a14 14 0 0 0 14-14m80 0a26 26 0 0 1-26 26h-10v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14h-10v28h10a14 14 0 0 0 14-14M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilePptLight))
export { Memo as IconFilePptLight }
