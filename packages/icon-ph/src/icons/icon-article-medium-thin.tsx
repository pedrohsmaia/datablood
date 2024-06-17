/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArticleMediumThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M52 136a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h12V60H24a4 4 0 0 1 0-8h16a4 4 0 0 1 3.39 1.87L80 112.45l36.61-58.57A4 4 0 0 1 120 52h16a4 4 0 0 1 0 8h-12v72h12a4 4 0 0 1 0 8h-24a4 4 0 0 1 0-8h4V70l-32.61 52.12a4 4 0 0 1-6.78 0L44 70v62h4a4 4 0 0 1 4 4m116-28h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8m72 24h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 32H72a4 4 0 0 0 0 8h168a4 4 0 0 0 0-8m0 32H72a4 4 0 0 0 0 8h168a4 4 0 0 0 0-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArticleMediumThin))
export { Memo as IconArticleMediumThin }
