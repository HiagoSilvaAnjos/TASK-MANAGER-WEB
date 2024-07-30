import PropTypes from 'prop-types';

const Button = ({
  children,
  size = 'small',
  variant = 'primary',
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-brand-primary text-white';
    }

    if (variant === 'secondary') {
      return 'bg-brand-light-gray text-brand-dark-blue';
    }

    if (variant === 'ghost') {
      return 'bg-transparent text-brand-dark-gray';
    }
  };

  const getSizeclasses = () => {
    if (size === 'small') {
      return 'py-1 text-xs';
    }
    if (size === 'large') {
      return 'py-2 text-sm';
    }
  };

  return (
    <button
      {...rest}
      className={`flex items-center justify-center gap-2 rounded-md px-4 font-semibold transition hover:opacity-75 ${getSizeclasses()} ${getVariantClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
