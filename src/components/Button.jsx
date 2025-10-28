/**
 * Button Component - Reusable button with variants
 *
 * @param {Object} props
 * @param {string} props.children - Button text/content
 * @param {string} props.variant - Button style: 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {function} props.onClick - Click handler
 * @param {string} props.type - Button type: 'button', 'submit', 'reset'
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.className - Additional classes
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  // Size variants
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  // Color variants
  const variants = {
    primary: 'bg-garage-gradient-to-br text-white hover:opacity-90 focus:ring-green-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 focus:ring-gray-500',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white',
    ghost: 'text-white hover:bg-white/10 focus:ring-white',
  }

  const buttonClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}
