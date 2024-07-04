/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmReelLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 218h-48a102 102 0 1 0-48 12h96a6 6 0 0 0 0-12M38 128a90 90 0 1 1 90 90 90.1 90.1 0 0 1-90-90m90-26a22 22 0 1 0-22-22 22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10 10 10 0 0 1 10-10m22 106a22 22 0 1 0-22 22 22 22 0 0 0 22-22m-32 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10m58-26a22 22 0 1 0-22-22 22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10 10 10 0 0 1 10-10m-96-12a22 22 0 1 0 22 22 22 22 0 0 0-22-22m0 32a10 10 0 1 1 10-10 10 10 0 0 1-10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmReelLight))
export { Memo as IconFilmReelLight }
