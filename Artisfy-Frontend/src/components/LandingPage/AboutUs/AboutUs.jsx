import "./_aboutus.scss";
import MusicBusiness from '../../../images/mb.png';
import BeatMeaking from '../../../images/bm.jpg';
import FotoSession from '../../../images/fs.png';
import { useState } from "react";



const AboutUs = () => {

    const [items] = useState([
        {
            id: 1,
            position: 'left',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi, blanditiis, doloremque iste distinctio temporibus,itaque doloribus accusantium aliquam quia incidunt labore quasi quisquam asperiores! Vero ab rerum eligendi nam excepturi!",
            photo: MusicBusiness

        },
        {
            id: 2,
            position: 'right',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi, blanditiis, doloremque iste distinctio temporibus,itaque doloribus accusantium aliquam quia incidunt labore quasi quisquam asperiores! Vero ab rerum eligendi nam excepturi!",
            photo: BeatMeaking
        },
        {
            id: 3,
            position: 'left',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi, blanditiis, doloremque iste distinctio temporibus,itaque doloribus accusantium aliquam quia incidunt labore quasi quisquam asperiores! Vero ab rerum eligendi nam excepturi!",
            photo: FotoSession
        }
    ])

    return (
        <section className="aboutus container">
            <h2  className="aboutus-title">About Us</h2>
            {
                items.map(item => (
                    <div data-aos="zoom-out" className="aboutus-item" key={item.id}>
                        <div className={`background-image ${item.position === 'left' ? 'bgLeft' : 'bgRight'}`}>
                            <img src={item.photo} alt="foto" className={`${item.position === 'left' ? 'imgLeft' : 'imgRight'}`}></img>
                        </div>
                        <div className="texto">
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default AboutUs;