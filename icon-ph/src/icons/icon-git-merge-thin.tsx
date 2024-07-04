/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitMergeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 116a28 28 0 0 0-27.71 24H152a44.2 44.2 0 0 1-35.2-17.6L87.28 83a28 28 0 1 0-11.28.71v88.58a28 28 0 1 0 8 0V92l26.4 35.2A52.26 52.26 0 0 0 152 148h28.29A28 28 0 1 0 208 116M60 56a20 20 0 1 1 20 20 20 20 0 0 1-20-20m40 144a20 20 0 1 1-20-20 20 20 0 0 1 20 20m108-36a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitMergeThin))
export { Memo as IconGitMergeThin }
