/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBankLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M24 102h26v68H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12h-18v-68h26a6 6 0 0 0 3.14-11.11l-104-64a6 6 0 0 0-6.28 0l-104 64A6 6 0 0 0 24 102m38 0h36v68H62Zm84 0v68h-36v-68Zm48 68h-36v-68h36ZM128 39l82.8 51H45.2Zm118 169a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h224a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBankLight))
export { Memo as IconBankLight }
