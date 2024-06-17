/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArticleMediumLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M54 136a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h10V62H24a6 6 0 0 1 0-12h16a6 6 0 0 1 5.09 2.8L80 108.68l34.91-55.86A6 6 0 0 1 120 50h16a6 6 0 0 1 0 12h-10v68h10a6 6 0 0 1 0 12h-24a6 6 0 0 1 0-12h2V76.92l-28.91 46.26a6 6 0 0 1-10.18 0L46 76.92V130h2a6 6 0 0 1 6 6m114-26h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12m72 20h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 32H72a6 6 0 0 0 0 12h168a6 6 0 0 0 0-12m0 32H72a6 6 0 0 0 0 12h168a6 6 0 0 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArticleMediumLight))
export { Memo as IconArticleMediumLight }
