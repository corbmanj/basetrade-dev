import React from 'react'

export default function Modal (props) {

  const stopIt = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="modal-background" onClick={props.closeModal}>
      <div className="modal-container modal-alert" onClick={stopIt}>
        <div className="modal-close" onClick={props.closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <polygon points="19.82 5.59 18.41 4.18 12 10.59 5.59 4.18 4.18 5.59 10.59 12 4.18 18.41 5.59 19.82 12 13.41 18.41 19.82 19.82 18.41 13.41 12 19.82 5.59"></polygon>
          </svg>
        </div>
        <div className="modal-header">
          <h4>{props.modalObj.shortName || 'Modal Title'}</h4>
        </div>
        <div className="modal-body modal-body-with-header">
          <div><b>Age: </b>{props.modalObj.age}</div>
          <div><b>Race: </b>{props.modalObj.race}</div>
          <div><b>Country: </b>{props.modalObj.nationality}</div>
          <div><b>Team: </b>{props.modalObj.team}</div>
        </div>
        <div className="modal-actions">
          <a
            href="#"
            onClick={props.closeModal}
            data-test-id="reset-modal-cancel-button"
            className="modal-button primary"
          >Close
          </a>
        </div>
      </div>
    </div>
  )
}