/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserSwitchFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M84 120a44 44 0 1 1 44 44 44 44 0 0 1-44-44m126.16 57.18a8.21 8.21 0 0 0-10.86 2.41 87.42 87.42 0 0 1-5.52 6.85A79.76 79.76 0 0 0 172 165.1a4 4 0 0 0-4.84.32 59.8 59.8 0 0 1-78.26 0 4 4 0 0 0-4.9-.32 79.71 79.71 0 0 0-21.79 21.31A87.66 87.66 0 0 1 40.37 136h15.4a8.2 8.2 0 0 0 6.69-3.28 8 8 0 0 0-.8-10.38l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0-.8 10.38A8.2 8.2 0 0 0 8.23 136H24.3a104 104 0 0 0 188.18 52.67 8 8 0 0 0-2.32-11.49m45.23-52.24A8 8 0 0 0 248 120h-16.3A104 104 0 0 0 43.52 67.33a8 8 0 0 0 13 9.34A88 88 0 0 1 215.63 120H200a8 8 0 0 0-5.66 13.66l24 24a8 8 0 0 0 11.32 0l24-24a8 8 0 0 0 1.73-8.72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserSwitchFill))
export { Memo as IconUserSwitchFill }
