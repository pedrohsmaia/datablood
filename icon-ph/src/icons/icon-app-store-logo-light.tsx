/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAppStoreLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m62.62 195.05-9.45 16A6 6 0 0 1 42.83 205l9.46-16a6 6 0 1 1 10.33 6.1ZM232 154h-48.94l-31.31-53a6 6 0 1 0-10.33 6.11l61.41 103.93a6 6 0 0 0 10.34-6.1l-23-38.95H232a6 6 0 0 0 0-12Zm-89.53 0H86.88l70.29-118.95A6 6 0 0 0 146.83 29L128 60.82 109.17 29a6 6 0 0 0-10.34 6.1L121 72.62 72.94 154H24a6 6 0 0 0 0 12h118.47a6 6 0 1 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAppStoreLogoLight))
export { Memo as IconAppStoreLogoLight }
