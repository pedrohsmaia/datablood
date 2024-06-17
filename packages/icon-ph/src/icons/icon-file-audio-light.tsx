/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFileAudioLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M98.3 130.46a6 6 0 0 0-6.54 1.3L69.51 154H48a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h21.51l22.25 22.24A6 6 0 0 0 102 224v-88a6 6 0 0 0-3.7-5.54m-8.3 79-13.76-13.7A6 6 0 0 0 72 194H54v-28h18a6 6 0 0 0 4.24-1.76L90 150.49ZM150 180a38.53 38.53 0 0 1-19 33.18 6 6 0 0 1-6-10.36 26.5 26.5 0 0 0 0-45.64 6 6 0 0 1 6-10.36A38.53 38.53 0 0 1 150 180m62.24-96.24-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48 193.52 82H158Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFileAudioLight))
export { Memo as IconFileAudioLight }
