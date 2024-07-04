/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconProjectorScreenLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 78a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v16a14 14 0 0 0 14 14h2v100H32a6 6 0 0 0 0 12h90v20.84a22 22 0 1 0 12 0V190h90a6 6 0 0 0 0-12h-10V78Zm-78 154a10 10 0 1 1-10-10 10 10 0 0 1 10 10M38 64V48a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m164 114H54V78h148Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconProjectorScreenLight))
export { Memo as IconProjectorScreenLight }
