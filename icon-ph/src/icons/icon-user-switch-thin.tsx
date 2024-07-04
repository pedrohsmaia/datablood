/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserSwitchThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m250.83 130.83-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 1 1 5.66-5.66L220 142.34V128A92 92 0 0 0 53.25 74.34a4 4 0 0 1-6.5-4.68A100 100 0 0 1 228 128v14.34l17.17-17.17a4 4 0 1 1 5.66 5.66m-41.6 55.51A100 100 0 0 1 28 128v-14.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0l24 24a4 4 0 0 1-5.66 5.66L36 113.66V128a91.69 91.69 0 0 0 26.83 64.87 75.61 75.61 0 0 1 44.51-34 44 44 0 1 1 41.32 0 75.57 75.57 0 0 1 44.52 34.07 91.34 91.34 0 0 0 9.56-11.24 4 4 0 1 1 6.49 4.68ZM128 156a36 36 0 1 0-36-36 36 36 0 0 0 36 36m0 64a92.23 92.23 0 0 0 59.14-21.57 68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserSwitchThin))
export { Memo as IconUserSwitchThin }
