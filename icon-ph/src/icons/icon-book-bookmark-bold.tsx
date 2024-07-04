/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookBookmarkBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 20H72a36 36 0 0 0-36 36v168a12 12 0 0 0 12 12h144a12 12 0 0 0 0-24H60v-4a12 12 0 0 1 12-12h136a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12m-88 24h40v60l-12.81-9.6a12 12 0 0 0-14.4 0L120 104Zm76 128H72a35.59 35.59 0 0 0-12 2.06V56a12 12 0 0 1 12-12h24v84a12 12 0 0 0 19.2 9.6L140 119l24.81 18.6A12 12 0 0 0 184 128V44h12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookBookmarkBold))
export { Memo as IconBookBookmarkBold }
