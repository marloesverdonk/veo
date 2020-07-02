import React from 'react'
import Carousel from "react-bootstrap/Carousel"

function VEOCarousel() {
    return (
          <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static1.squarespace.com/static/5b7c56e255b02c683659fe43/5bad28439140b74439a8acba/5bad3b3beef1a16ae0138438/1580845045125/children-raise.png/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/5af5e1a15b409b1b1a0e6362/1533654296368-YAPG9F22T112V4L31XMY/ke17ZwdGBToddI8pDm48kKRlb1Dz43isOX_aryn_RgkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnDGAaGcBCHjq3w-VoNEeRZ2HFP5cdlzKZiPlctFAeCeDVOlaDRMFskayEC4hK1AMrQ/image-asset.jpeg?format=1000w/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR74IRqEL2vVEvuOOsTLsromSGMguNA-cvz6nn57gjSfuhdZmb-&usqp=CAU/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default VEOCarousel;