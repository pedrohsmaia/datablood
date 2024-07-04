/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEraserBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 204h-75l86.84-86.84a28 28 0 0 0 0-39.6l-41.41-41.37a28 28 0 0 0-39.6 0L28.19 154.82a28 28 0 0 0 0 39.6l30.06 30.07a12 12 0 0 0 8.49 3.51H216a12 12 0 0 0 0-24M163.8 53.16a4 4 0 0 1 5.66 0l41.38 41.38a4 4 0 0 1 0 5.65L160 151l-47-47ZM71.71 204l-26.55-26.55a4 4 0 0 1 0-5.65L96 121l47 47-36 36Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEraserBold))
export { Memo as IconEraserBold }
