const DropdownItem = ({label, onClick }) => {
  return (
    <center onClick = {onClick}>
      <a>{label}</a>
    </center>
  );
};

export default DropdownItem;
