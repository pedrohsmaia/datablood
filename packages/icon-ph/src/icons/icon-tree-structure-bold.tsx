/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTreeStructureBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 116h48a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12h-4a36 36 0 0 0-36 36v20H84v-4a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h24v20a36 36 0 0 0 36 36h4v12a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12h-4a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h4v12a20 20 0 0 0 20 20M60 140H36v-24h24Zm112 24h40v40h-40Zm0-112h40v40h-40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTreeStructureBold))
export { Memo as IconTreeStructureBold }
