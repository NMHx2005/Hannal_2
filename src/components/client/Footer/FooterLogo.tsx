import { Carousel } from 'antd';
import './footer.scss';

const FooterLogo = () => {
    const partnerLogos = [
        {
            id: 1,
            src: "https://storage.googleapis.com/a1aa/image/twRnWBlbn7T70ThMMrH7N8PEGxmaleaHzxckstmfhv4.jpg",
            alt: "FLC Group logo"
        },
        {
            id: 2,
            src: "https://storage.googleapis.com/a1aa/image/8vi7YE693XFdjtCgHS9sU1htVVfgyZ1ohwI5NHst72g.jpg",
            alt: "Hung Thinh Corporation logo"
        },
        {
            id: 3,
            src: "https://storage.googleapis.com/a1aa/image/NXYoq_RHaddiMOYs9DXy0aUCIUhXIaMFz3ZHlBLa8r8.jpg",
            alt: "Nam Long logo"
        },
        {
            id: 4,
            src: "https://storage.googleapis.com/a1aa/image/q57bG-b2of7Ee0zj0Aho5yHwHwXojKRNQLy4gm1a0Qg.jpg",
            alt: "Nova Land logo"
        },
        {
            id: 5,
            src: "https://storage.googleapis.com/a1aa/image/8U0_ALYz5Gq2Mln-hWI4CWzbsCJmeTqnYJY7BlUPj44.jpg",
            alt: "Vinhomes logo"
        }
    ];

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        draggable: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className="footer">
            <div className="footer__logo-section">
                <div className="container">
                    <Carousel {...carouselSettings}>
                        {partnerLogos.map(logo => (
                            <div key={logo.id} className="partner-logo">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default FooterLogo;