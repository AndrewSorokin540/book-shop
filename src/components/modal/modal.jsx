import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions';
import './modal.scss';

class Modal extends React.Component {

    render() {
        if (!this.props.isModalOpen) {
            return null
        }
        return (
            <div className='modal'>
                <div className="modal-content">
                    <div className="modal-header">
                        <button className='modal-close' onClick={this.props.closeModal}>&times;</button>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ modal: { isModalOpen } }) => ({ isModalOpen })

const mapDispatchToProps = { closeModal }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
