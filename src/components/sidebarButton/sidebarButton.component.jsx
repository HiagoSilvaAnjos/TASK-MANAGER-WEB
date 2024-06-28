// eslint-disable-next-line react/prop-types
const SidebarButton = ({ children, variant }) => {
  const handleVariantStyle = () => {
    if (variant == 'selected') {
      return 'bg-[#E6F7F8] text-[#00ADB5]';
    }

    if (variant == 'unselected') {
      return 'text-[#35383E]';
    }
  };

  return (
    <>
      <a href="#" className={`rounded-lg px-6 py-3 ${handleVariantStyle()}`}>
        {children}
      </a>
    </>
  );
};

export default SidebarButton;
