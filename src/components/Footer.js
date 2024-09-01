import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { title: 'Quick Link', items: ['Home', 'About Us', 'Services', 'Product'] },
    { title: 'Blog', items: [
        { text: 'People Saying About Footer.', date: '8 Nov, 2021' },
        { text: 'People Saying About Footer.', date: '8 Nov, 2021' }
      ] 
    },
    { title: 'Contact', items: [
        { icon: <FaMapMarkerAlt className="text-[#AFF4C6] text-xl mr-2" />, text: '44 Danwers, NY City, USA, 70-102' },
        { icon: <FaEnvelope className="text-[#AFF4C6] text-xl mr-2" />, text: 'Lamaro@Lamaroyc.Us' },
        { icon: <FaPhoneAlt className="text-[#AFF4C6] text-xl mr-2" />, text: '91+585-656-658' }
      ] 
    }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, ariaLabel: 'Facebook' },
    { icon: <FaTwitter />, ariaLabel: 'Twitter' },
    { icon: <FaInstagram />, ariaLabel: 'Instagram' },
    { icon: <FaYoutube />, ariaLabel: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 px-5 sm:px-10">
      <div className="container mx-auto text-center lg:text-start grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        
        <div>
          <h3 className="text-3xl font-bold mb-4">TravelHunt</h3>
          <p className="mb-4">
            The proper Footer on proper time can preserve you protection. We assist you make sure everybody forward.
          </p>
          <div className="flex space-x-4 mx-auto lg:justify-start justify-center">
            {socialIcons.map(({ icon, ariaLabel }, idx) => (
              <a href="#" aria-label={ariaLabel} key={idx} className="text-[#AFF4C6] text-2xl">
                {icon}
              </a>
            ))}
          </div>
        </div>
        
        {links.map((link, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-[#AFF4C6]">{link.title}</h3>
            <ul>
              {link.items.map((item, i) => (
                <li className="mb-2" key={i}>
                  {link.title === 'Contact' ? (
                    <div className="flex items-center lg:justify-start justify-center">
                      {item.icon} {item.text}
                    </div>
                  ) : link.title === 'Blog' ? (
                    <div>
                      <a href="#" className="hover:text-[#AFF4C6]">{item.text}</a>
                      <br/><span className="text-gray-400 text-sm">{item.date}</span>
                    </div>
                  ) : (
                    <a href="#" className="hover:text-[#AFF4C6]">{item}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto text-center text-gray-400 mt-8">
        © 2023 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
