/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEnvelopeBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-96 83.72L62.85 68h130.3Zm-35.21.28L44 172.72V83.28Zm17.76 16.28 9.34 8.57a12 12 0 0 0 16.22 0l9.34-8.57 47.7 43.72H62.85ZM163.21 128 212 83.28v89.44Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEnvelopeBold))
export { Memo as IconEnvelopeBold }
