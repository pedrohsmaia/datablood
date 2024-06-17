/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodesandboxLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m225.6 62.65-88-48.18a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.18a20 20 0 0 0 10.4-17.54V80.19a20 20 0 0 0-10.4-17.54M164 152v47.72l-24 13.14v-77.75l72-39.42v22.92l-41.76 22.86A12 12 0 0 0 164 152m-78.24-10.53L44 118.61V95.69l72 39.42v77.75l-24-13.14V152a12 12 0 0 0-6.24-10.53m-2.62-80.34 39.1 21.4a11.95 11.95 0 0 0 11.52 0l39.1-21.4L199 75.45l-71 38.87-71-38.87ZM128 36.57l19.87 10.88L128 58.33l-19.87-10.88ZM44 146l24 13.14v27.47l-24-13.17Zm144 40.61v-27.5L212 146v27.47Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodesandboxLogoBold))
export { Memo as IconCodesandboxLogoBold }
