import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'soft';
type ButtonSize = 'sm' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
}

function buttonClassName({
  variant = 'primary',
  size,
  icon,
  className,
}: Pick<ButtonProps, 'variant' | 'size' | 'icon' | 'className'>) {
  return [
    'btn',
    `btn-${variant}`,
    size && `btn-${size}`,
    icon && 'btn-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export function Button({
  variant = 'primary',
  size,
  icon,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, icon, className })}
      {...props}
    />
  );
}

export { buttonClassName };
