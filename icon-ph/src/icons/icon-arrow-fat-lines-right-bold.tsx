/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatLinesRightBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m240.49 119.51-96-96A12 12 0 0 0 124 32v36h-4a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h4v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12h-4V92h4a12 12 0 0 0 12-12V61l67 67ZM52 80v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0m40 0v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatLinesRightBold))
export { Memo as IconArrowFatLinesRightBold }
