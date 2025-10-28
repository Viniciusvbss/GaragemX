import { forwardRef } from 'react'

/**
 * Input Component - Reusable input field with variants
 *
 * @param {Object} props
 * @param {string} props.label - Label text
 * @param {string} props.type - Input type: 'text', 'email', 'password', 'number', etc.
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.error - Error message
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.variant - Style variant: 'default', 'filled'
 * @param {string} props.className - Additional classes
 * @param {boolean} props.required - Required field
 */
const Input = forwardRef(({
  label,
  type = 'text',
  placeholder = '',
  error,
  disabled = false,
  variant = 'default',
  className = '',
  required = false,
  ...props
}, ref) => {
  // Base styles
  const baseStyles = 'w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  // Variant styles
  const variants = {
    default: `bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-green-500 ${
      error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
    }`,
    filled: `bg-gray-100 border-transparent text-gray-900 placeholder-gray-500 focus:bg-white focus:border-green-500 focus:ring-green-500 ${
      error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
    }`,
  }

  const inputClasses = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />

      {error && (
        <p
          id={`${props.id}-error`}
          className="mt-2 text-sm text-red-600 flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
