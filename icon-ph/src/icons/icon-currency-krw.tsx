/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyKrw = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 128h-22.11l21.52-53a8 8 0 1 0-14.82-6l-24 59h-41.21l-24-59a8 8 0 0 0-14.82 0l-24 59H55.38l-24-59a8 8 0 0 0-14.82 6l21.52 53H16a8 8 0 0 0 0 16h28.61l24 59a8 8 0 0 0 14.82 0l24-59h41.24l24 59a8 8 0 0 0 14.82 0l24-59H240a8 8 0 0 0 0-16M76 178.75 61.88 144h28.24ZM113.88 128 128 93.26 142.12 128ZM180 178.75 165.88 144h28.24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyKrw))
export { Memo as IconCurrencyKrw }
