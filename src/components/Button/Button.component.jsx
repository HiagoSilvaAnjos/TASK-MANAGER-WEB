import PropTypes from 'prop-types';
import { tv as TailwindVariants } from 'tailwind-variants';

const Button = ({ children, color, size, className, ...rest }) => {
  const button = TailwindVariants({
    base: 'flex items-center justify-center gap-2 rounded-md px-4 font-semibold transition hover:opacity-75',
    variants: {
      color: {
        primary: 'bg-brand-primary text-white',
        secondary: 'bg-brand-light-gray text-brand-dark-blue',
        ghost: 'bg-transparent text-brand-dark-gray',
      },
      size: {
        small: 'py-1 text-xs',
        large: 'py-2 text-sm',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'small',
    },
  });

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
