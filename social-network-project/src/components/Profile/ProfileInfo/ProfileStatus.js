import React from 'react';
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activatedEditMode() {
        this.setState( {
            editMode: true,
        })
    }

    deactivatedEditMode() {
        this.setState( {
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus