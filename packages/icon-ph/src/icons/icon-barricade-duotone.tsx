/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBarricadeDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 80v68l-76-76h68a8 8 0 0 1 8 8M32 72a8 8 0 0 0-8 8v4l76 76h72L84 72Z"
          opacity={0.2}
        />
        <Path d="M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 64.69L175.31 80H224ZM80.69 80l72 72h-49.38L32 80.69V80ZM32 103.31 80.69 152H32ZM224 152h-48.69l-72-72h49.38L224 151.32z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBarricadeDuotone))
export { Memo as IconBarricadeDuotone }
