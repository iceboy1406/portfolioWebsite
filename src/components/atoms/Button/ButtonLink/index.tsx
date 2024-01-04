import Button, { ButtonProps } from 'components/atoms/Button'
import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string
  linkClassName?: string
  openInNewPage?: boolean
}

const ButtonLink = ({
  href,
  value,
  onClick = () => {},
  size = 'normal',
  style = 'solid',
  color = 'primary',
  radius = 'rounded',
  openInNewPage = false,
  className,
  linkClassName
}: ButtonLinkProps) => {
  return (
    <Link href={href} passHref target={openInNewPage ? '_blank' : '_self'} className={linkClassName}>
        <Button
          value={value}
          color={color}
          radius={radius}
          size={size}
          style={style}
          className={className}
        />
    </Link>
  )
}

export default ButtonLink
export type { ButtonLinkProps }
