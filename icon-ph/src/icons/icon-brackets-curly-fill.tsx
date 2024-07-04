/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBracketsCurlyFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 155.84c.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16c-31.27 0-31.72-22.43-32-35.84-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16.28-13.41.73-35.84 32-35.84a8 8 0 0 1 0 16c-15.59 0-15.71 5.9-16 20.16-.17 8.31-.41 20.09-8 27.84 7.59 7.75 7.83 19.53 8 27.84M200 136c-15.59 0-15.71 5.9-16 20.16-.28 13.41-.73 35.84-32 35.84a8 8 0 0 1 0-16c15.59 0 15.71-5.9 16-20.16.17-8.31.41-20.09 8-27.84-7.6-7.75-7.84-19.53-8-27.84-.29-14.26-.41-20.16-16-20.16a8 8 0 0 1 0-16c31.27 0 31.72 22.43 32 35.84.29 14.26.41 20.16 16 20.16a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBracketsCurlyFill))
export { Memo as IconBracketsCurlyFill }
