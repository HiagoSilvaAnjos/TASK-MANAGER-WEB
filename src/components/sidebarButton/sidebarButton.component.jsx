// eslint-disable-next-line react/prop-types
const SidebarButton = ({ children, variant }) => {
  const handleVariantStyle = () => {
    if (variant == 'selected') {
      return 'bg-brand-primary bg-opacity-15 text-brand-primary';
    }

    if (variant == 'unselected') {
      return 'text-brand-dark-blue';
    }
  };

  return (
    <>
      <a
        href="#"
        className={`flex items-center gap-2 rounded-lg px-6 py-3 ${handleVariantStyle()}`}
      >
        {children}
      </a>
    </>
  );
};

export default SidebarButton;
