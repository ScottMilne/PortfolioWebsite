import "./Modal.css";
import Modal from '@material-ui/core/Modal';
import React, {useState} from "react";

function ModalView() {

    const body = (
        <div className="modalBody">
            <h2 id="modalTitle">Text in a modal</h2>
            <p id="modalDesc">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
        </div>
    );

    const [open,
        setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" className="modalButton" onClick={handleOpen}>
                More Info
            </button>
            <Modal
                className="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modalTitle"
                aria-describedby="modalDesc">{body}
            </Modal>
        </div>
    );
}
export default ModalView;
