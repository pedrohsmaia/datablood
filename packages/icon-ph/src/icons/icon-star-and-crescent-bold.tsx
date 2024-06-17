/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStarAndCrescentBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M157.46 195.72a76 76 0 0 1 0-135.44 12 12 0 0 0 0-21.37 100 100 0 1 0 0 178.18 12 12 0 0 0 0-21.37M112 204a76 76 0 0 1 0-152 77.2 77.2 0 0 1 13.57 1.19 100.14 100.14 0 0 0 0 149.62A77.2 77.2 0 0 1 112 204m136.75-87-24.28-10.5-2.12-27.42a12 12 0 0 0-21.22-6.72l-17 20.58-25.26-6.25a12 12 0 0 0-13.22 17.73L159.54 128l-13.88 23.58a12 12 0 0 0 13.22 17.73l25.26-6.25 17 20.58a12 12 0 0 0 9.26 4.36 11.88 11.88 0 0 0 3.62-.56 12 12 0 0 0 8.34-10.52l2.12-27.42 24.27-10.5a12 12 0 0 0 0-22m-40.44 13.35a12 12 0 0 0-7.21 10.09l-.39 5-2.87-3.44a12 12 0 0 0-9.25-4.36 11.76 11.76 0 0 0-2.88.35l-4.89 1.21 3-5.07a12 12 0 0 0 0-12.18l-3-5.07 4.89 1.21a12 12 0 0 0 12.13-4l2.87-3.48.39 5a12 12 0 0 0 7.21 10.09l5.4 2.33Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStarAndCrescentBold))
export { Memo as IconStarAndCrescentBold }
