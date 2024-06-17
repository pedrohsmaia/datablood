/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmSlateLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 106H86.68l122.85-32.43a6 6 0 0 0 4.26-7.38l-8.16-30a13.94 13.94 0 0 0-17-9.72L36.32 66.67a13.77 13.77 0 0 0-8.48 6.47 13.57 13.57 0 0 0-1.36 10.42L34 111.34V200a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-88a6 6 0 0 0-6-6m-90.25-50.52 33 19.07-42.43 11.2-33-19.07Zm66-17.41a1.92 1.92 0 0 1 2.34 1.26l6.57 24.18-25.4 6.69-33-19.07ZM38.23 79.14a1.85 1.85 0 0 1 1.15-.87L66.86 71l33 19.08-55.2 14.6-6.6-24.27a1.63 1.63 0 0 1 .17-1.27M210 200a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-82h164Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmSlateLight))
export { Memo as IconFilmSlateLight }
