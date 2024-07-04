/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWallBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 44H32a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M92 140v-24h72v24Zm-48 0v-24h24v24Zm144-24h24v24h-24Zm24-24h-72V68h72Zm-96-24v24H44V68Zm-72 96h72v24H44Zm96 24v-24h72v24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWallBold))
export { Memo as IconWallBold }
