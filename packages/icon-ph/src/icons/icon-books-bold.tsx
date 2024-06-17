/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBooksBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m235.57 193.73-33.19-157.8a20 20 0 0 0-23.76-15.48l-46.81 10.06a19.82 19.82 0 0 0-11 6.65A20 20 0 0 0 104 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V90.25l25.62 121.82A20 20 0 0 0 169.15 228a20.27 20.27 0 0 0 4.23-.45l46.81-10.06a20.1 20.1 0 0 0 15.38-23.76M148.19 88.65l39-8.38 2.53 12-39 8.38Zm7.46 35.5 39-8.38 9.16 43.58-39 8.38Zm24.06-79.39 2.53 12-39 8.38-2.53-12ZM60 88h40v80H60Zm40-36v12H60V52ZM60 204v-12h40v12Zm112.29-.76-2.53-12 39-8.38 2.53 12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBooksBold))
export { Memo as IconBooksBold }
