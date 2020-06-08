import React from 'react';

const Message = props => {
    const {children , clase} = props;
    return <p className={clase}>{children}</p>;
}

export default Message;