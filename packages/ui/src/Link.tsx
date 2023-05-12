import { Link as SolitoLink, LinkProps as SolitoLinkProps } from 'solito/link'
import { Button, ButtonProps, SizableText, TextProps } from 'tamagui'

export type LinkProps = Omit<SolitoLinkProps, 'passHref' | 'as'> &
  TextProps & {
    target?: any
    rel?: any
    title?: any
  }

export const Link = ({
  href = '',
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  children,
  ...props
}: LinkProps) => {
  const linkProps = { href, replace, scroll, shallow, prefetch, locale }
  return (
    <SolitoLink {...linkProps}>
      <SizableText tag="span" {...props}>
        {children}
      </SizableText>
    </SolitoLink>
  )
}

export type ButtonLinkProps = Pick<
  SolitoLinkProps,
  'href' | 'replace' | 'scroll' | 'shallow' | 'prefetch' | 'locale'
> &
  ButtonProps & {
    target?: any
    rel?: any
    title?: any
  }

export const ButtonLink = ({
  href = '',
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  children,
  ...props
}: ButtonLinkProps) => {
  const linkProps = { href, replace, scroll, shallow, prefetch, locale }
  return (
    <SolitoLink style={{ textDecoration: 'none' }} {...linkProps}>
      <Button tag="span" {...props}>
        {children}
      </Button>
    </SolitoLink>
  )
}
