/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBandaids = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m184.57 128 27.71-27.72a40 40 0 1 0-56.56-56.56L128 71.43l-27.72-27.71a40 40 0 1 0-56.56 56.56L71.43 128l-27.71 27.72a40 40 0 1 0 56.56 56.56L128 184.57l27.72 27.71a40 40 0 1 0 56.56-56.56ZM167 55a24 24 0 1 1 34 34l-27.72 27.72-33.97-33.97Zm-5.09 73L128 161.94 94.06 128 128 94.06ZM55 89a24 24 0 1 1 34-34l27.72 27.72-33.97 33.97Zm34 112a24 24 0 1 1-34-34l27.72-27.72 33.94 33.94Zm112 0a24 24 0 0 1-34 0l-27.72-27.72 33.94-33.94L201 167a24 24 0 0 1 0 34m-85-73a12 12 0 1 1 12 12 12 12 0 0 1-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBandaids))
export { Memo as IconBandaids }
