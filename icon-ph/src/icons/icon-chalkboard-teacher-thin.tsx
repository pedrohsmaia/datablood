/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChalkboardTeacherThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h13.39a4 4 0 0 0 3.61-2.29 52 52 0 0 1 94 0 4 4 0 0 0 3.61 2.29H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4h-58.92a60.38 60.38 0 0 0-34.68-29.07 36 36 0 1 0-36.8 0A60.38 60.38 0 0 0 50.92 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-116-28a28 28 0 1 1 28-28 28 28 0 0 1-28 28m92-92v96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h12V84H68v12a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChalkboardTeacherThin))
export { Memo as IconChalkboardTeacherThin }
