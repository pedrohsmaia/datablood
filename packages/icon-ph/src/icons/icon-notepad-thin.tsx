/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNotepadThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 128a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m52-108v152a28 28 0 0 1-28 28H72a28 28 0 0 1-28-28V48a12 12 0 0 1 12-12h20V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h20a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4h-20v12a4 4 0 0 1-8 0V44h-40v12a4 4 0 0 1-8 0V44H84v12a4 4 0 0 1-8 0V44H56a4 4 0 0 0-4 4v152a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNotepadThin))
export { Memo as IconNotepadThin }
