/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHighlighterCircleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M204.37 51.59A108 108 0 1 0 236 128a108.11 108.11 0 0 0-31.63-76.41M140 136h-24v-24.61l24-12Zm-40 71.25V160h56v47.25a84.73 84.73 0 0 1-56 0m87.4-19.84a84.53 84.53 0 0 1-7.4 6.55V156a20 20 0 0 0-16-19.6V80a12 12 0 0 0-17.37-10.73l-48 24A12 12 0 0 0 92 104v32.41A20 20 0 0 0 76 156v38a84.53 84.53 0 0 1-7.4-6.55 84 84 0 1 1 118.8 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHighlighterCircleBold))
export { Memo as IconHighlighterCircleBold }
