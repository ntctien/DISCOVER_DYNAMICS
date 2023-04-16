import Popup from 'reactjs-popup';
import LogInPopup from '../../pages/SignInPopup'

const DropdownItem = ({label}) => {
  return (
    <center>
      <div>
            <Popup trigger=
                {<button> {label} </button>}
                modal nested>
                  <LogInPopup/>
            </Popup>
        </div>
    </center>
  );
};

export default DropdownItem;
