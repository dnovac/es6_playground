import React, {Component} from 'react';

class Gallery extends Component {
    render() {

        let alternate = 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204';

        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a
                                key={index}
                                className="book"
                                href={infoLink}
                                target="_blank">
                                <div className="book-img">
                                    <img
                                        src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                                        alt="book image"/>
                                </div>

                                <div className="book-text">
                                    {title}
                                </div>
                            </a>

                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;
