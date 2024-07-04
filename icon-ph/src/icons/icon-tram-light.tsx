/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTramLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M184 50h-50V22h34a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h34v28H72a30 30 0 0 0-30 30v104a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V80a30 30 0 0 0-30-30M72 62h112a18 18 0 0 1 18 18v42H54V80a18 18 0 0 1 18-18m112 140H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-90-30a10 10 0 1 1-10-10 10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTramLight))
export { Memo as IconTramLight }
