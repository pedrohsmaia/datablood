/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookOpenTextLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 50h-64a38 38 0 0 0-32 17.55A38 38 0 0 0 96 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h64a26 26 0 0 1 26 26 6 6 0 0 0 12 0 26 26 0 0 1 26-26h64a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M96 194H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h64a26 26 0 0 1 26 26v116.31A37.86 37.86 0 0 0 96 194m130-2a2 2 0 0 1-2 2h-64a37.87 37.87 0 0 0-26 10.32V88a26 26 0 0 1 26-26h64a2 2 0 0 1 2 2Zm-20-96a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookOpenTextLight))
export { Memo as IconBookOpenTextLight }
