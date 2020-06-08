import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import faker from 'faker';

const RandomImage = () => {
    const [image, setImage] = useState(faker.image.avatar());

    const updateImg = () => { setImage(faker.image.avatar()) }

    return (
        <spam>
            <img src={image} alt="avatar Random"/>
            <p>Lautaro la siguiente acción acabará con el mundo :O</p>
            <button className="ui button secondary" onClick={updateImg}>Next</button>
        </spam>
    );
};

export default RandomImage;