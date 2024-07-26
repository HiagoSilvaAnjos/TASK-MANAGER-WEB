import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', ...rest }) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00ADB5] text-white';
    }

    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]';
    }
  };

  return (
    <button
      {...rest}
      className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition hover:opacity-75 ${getVariantClasses()}`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.string,
};
