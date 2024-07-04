/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitlabLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M226.27 118.11 206.38 42a7.94 7.94 0 0 0-15.16-.75L172.57 92H83.43L64.78 41.24a7.94 7.94 0 0 0-15.16.76l-19.89 76.11a53.16 53.16 0 0 0 20.44 56.68l73.27 51.76a7.9 7.9 0 0 0 9.12 0l73.27-51.76a53.16 53.16 0 0 0 20.44-56.68m-169-74 19.62 53.27a4 4 0 0 0 3.75 2.62h94.72a4 4 0 0 0 3.75-2.62l19.57-53.22 17 65L128 171.11l-87.67-61.94Zm-19.84 76 .7-2.7L121.07 176l-27.66 19.54-38.63-27.29a45.11 45.11 0 0 1-17.31-48.11ZM128 220l-27.66-19.54L128 180.9l27.66 19.54Zm73.22-51.73-38.63 27.29L134.93 176l82.9-58.56.7 2.7a45.11 45.11 0 0 1-17.31 48.11Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitlabLogoThin))
export { Memo as IconGitlabLogoThin }
