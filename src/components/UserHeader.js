import React from 'react';
import { connect } from 'react-redux';
//import mapStateToProps from "react-redux/es/connect/mapStateToProps";
//Be careful, editor automatically can add the import.

class UserHeader extends React.Component {

    render() {
        //const user = this.props.users.find((user) => user.id === this.props.userId);
        const { user } = this.props;

        if (!user){
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user : state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps) (UserHeader);