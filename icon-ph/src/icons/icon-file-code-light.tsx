/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileCodeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M180.24 147.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L167.51 152l-19.75-19.76a6 6 0 1 1 8.48-8.48Zm-72-24a6 6 0 0 0-8.48 0l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 1 0 8.48-8.48L88.49 152l19.75-19.76a6 6 0 0 0 0-8.48M214 88v128a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Zm44 134V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileCodeLight))
export { Memo as IconFileCodeLight }
