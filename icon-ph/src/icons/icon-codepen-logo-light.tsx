/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodepenLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m234.85 90.72-104-56a6 6 0 0 0-5.68 0l-104 56A6 6 0 0 0 18 96v64a6 6 0 0 0 3.15 5.28l104 56a6 6 0 0 0 5.68 0l104-56A6 6 0 0 0 238 160V96a6 6 0 0 0-3.15-5.28M226 150l-40.77-22L226 106Zm-53.43-28.77L134 100.42V50l85.34 46Zm-44.57 24L96.08 128 128 110.81 159.92 128ZM122 50v50.38l-38.57 20.8L36.66 96Zm-92 56 40.77 22L30 150Zm53.43 28.76L122 155.58V206l-85.34-46ZM134 206v-50.42l38.57-20.77L219.34 160Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodepenLogoLight))
export { Memo as IconCodepenLogoLight }
