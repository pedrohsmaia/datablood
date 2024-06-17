/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPasswordBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M48 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0m82.73 50.7L116 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52 9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52 14.72-4.79a12 12 0 1 0-7.41-22.82m111.12 7.7a12 12 0 0 0-15.12-7.7L212 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52 9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52 14.72-4.79a12 12 0 0 0 7.71-15.12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPasswordBold))
export { Memo as IconPasswordBold }
