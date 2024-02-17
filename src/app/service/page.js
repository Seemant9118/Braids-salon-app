import Navbar from "@/util-components/Navbar";
import Footer from "@/util-components/Footer";
import ServiceCard from "@/util-components/Service-Card";
import knotlessBraids from '../../../assets/knotlessbraids.jpg';
import goddessBraids from '../../../assets/goddessbraids.jpg';
import senegaleseTwists from '../../../assets/senegaleseTwists.jpg';
import marleyTwists from '../../../assets/marleyTwists.jpg';
import BoxBraids from '../../../assets/boxBraids.jpg';
import cornRows from '../../../assets/cornRows.jpg';
import crochetBraids from '../../../assets/crochetBraids.jpg';
import PickandDropBraids from '../../../assets/PickandDropBraids.jpg';
import FeedinBraids from '../../../assets/FeedinBraids.jpg';
import KnotlessBohoBraids from '../../../assets/KnotlessBohoBraids.jpg';




export default function Service() {

    const services = [
        { id: 1, title: 'Knotless Braids', img: knotlessBraids, desc: 'A braiding technique where the braids start without a knot at the base, resulting in a more natural and less tension-filled look.' },
        { id: 2, title: 'Goddess Braids', img: goddessBraids, desc: 'Larger, more intricate braids that are often styled in various lengths and thicknesses.' },
        { id: 3, title: 'Senegalese Twists', img: senegaleseTwists, desc: 'Twists created using two strands of hair, typically smaller in size and versatile in styling.' },
        { id: 4, title: 'Marley Twists', img: marleyTwists, desc: 'Twists using Marley hair extensions for a thicker, more textured appearance.' },
        { id: 5, title: 'Box Braids', img: BoxBraids, desc: 'Small to medium-sized square or rectangular-shaped braids, commonly using synthetic hair extensions.' },
        { id: 6, title: 'Cornrows', img: cornRows, desc: 'Flat braids closely to the scalp, often styled in various patterns or designs.' },
        { id: 7, title: 'Crochet Braids', img: crochetBraids, desc: 'Extensions added using a crochet technique, allowing for quicker installation and versatility in styles.' },
        { id: 8, title: 'Pick and Drop Braids', img: PickandDropBraids, desc: 'Alternating sections of braided and loose hair, creating a more natural look.' },
        { id: 9, title: 'Feed-in Braids', img: FeedinBraids, desc: 'Incorporating extensions gradually into the natural hair for a seamless, natural look.' },
        { id: 10, title: 'Knotless Boho Braids', img: KnotlessBohoBraids, desc: 'A blend of knotless braids and a bohemian styling approach, often incorporating beads or accessories.' },
    ];

    return (
        <>
            <Navbar />
            <div className="py-10 text-center font-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl">Our Services</div>
            <div className="lg:px-10 md:px-5 px-2 pt-2 pb-10 grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-3 md:grid-rows-4 sm:grid-cols-2 sm:grid-rows-5 grid-cols-1 grid-rows-10 gap-5">
                {
                    services.map((service) => (
                        <ServiceCard key={service.id} title={service.title} img={service.img} desc={service.desc} />
                    ))
                }
            </div>

            <Footer />
        </>

    )
}