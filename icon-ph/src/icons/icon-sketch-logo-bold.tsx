/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSketchLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m249 96.1-56-64a12 12 0 0 0-9-4.1H72a12 12 0 0 0-9 4.1l-56 64a12 12 0 0 0 .26 16.09l112 120a12 12 0 0 0 17.54 0l112-120a12 12 0 0 0 .2-16.09M213.55 92H182l-30-40h26.55ZM71.88 116l21.19 53-49.46-53Zm86.4 0L128 191.69 97.72 116ZM104 92l24-32 24 32Zm80.12 24h28.27l-49.46 53ZM77.45 52H104L74 92H42.45Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSketchLogoBold))
export { Memo as IconSketchLogoBold }
