import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Dilki Silva",
        date: "1 March 2025",
        image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/487405759_1708537189771462_6285729957843964122_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mjqVod0nA1gQ7kNvwFTNwL-&_nc_oc=AdmjwwT9pLB-M_AsDc8svfVIy68V4ix-cVavaJBRVK21HIkgL27Olqx0OE6K3bU8KkAV1WX2pL-WtuqhsXAr-CNG&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=pLzEWfmzp1Q77j_USfM5hA&oh=00_AfGSw0D6LVzoI-BeuVaeLLjr3Xp8IxlJPXSqyEsljcE-jQ&oe=68042D6D",
        content: "Highly recommend Baking Bliss Cakes ♥️🥹Best customer service and the cake is the tastiest and best 😍Thank you so much Baking Bliss 😍",
        rating: 5,
        reviewLink: "https://www.facebook.com/share/p/18w9Gt5ZCf/"
    },
    {
        name: "Yasassri Sathsarani",
        date: "12 May 2024",
        image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/472815611_1155334036150628_5599024256073786165_n.jpg?stp=cp6_dst-jpg_s100x100_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WAiA9pphQvIQ7kNvwGulnPR&_nc_oc=Adkk2g5ifKN586TUq4ubCrfx4JD2MTvXwRtDn9Fl3j2Et-bTkRuwzG2-lrF8uBj6ybRiBlUTr5lJDBXYwHJ7ICbx&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=k90JxReqWWlHoowuYRr5kw&oh=00_AfGPmSxIa6aDRJLGUG5IL0N0cAd4NetPAkfEUoch1FlbNg&oe=680456CD",
        content: "One of the best places to order your sweet treats around Colombo / Negombo Area.  Never miss to provide a personal customized service. Always worth the money and the taste...",
        rating: 5,
        reviewLink: "https://www.facebook.com/share/p/16QEBTjbKj/"
    },
    {
        name: "Dulaj Weerakoon",
        date: "4 January 2024",
        image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/467181680_122236819718002902_8717945255297010987_n.jpg?stp=c0.0.721.721a_dst-jpg_s100x100_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_ohc=EAoVUZhf10cQ7kNvwHw2cVo&_nc_oc=AdnqliRfwG5K5bOb9tSXF96DooVJZq506MuMGAd5tfb3Zb4KzJG5DMmx80-skmw-ZOI8hW_NnP0LZEb8JiZkGheT&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=D2irw57u9rPUl_H8KHdIug&oh=00_AfGUPKF6noFQtzs52C3xwtU4qSWezqjIRWcN4ajQrFK37w&oe=68043634",
        content: "Thank you Baking bliss for making my gfs birthday memorable, it was more than what I expected. Amazing cake & gift basket. She loved it! 🥰❤️",
        rating: 5,
        reviewLink: "https://www.facebook.com/share/p/1HeZnFYymB/"
    },
    {
        name: "Sajith Perera",
        date: "26 December 2023",
        image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/488475307_1212833827124791_5785789482143400419_n.jpg?stp=cp6_dst-jpg_s100x100_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=tOk2GHC5nDsQ7kNvwGni1PH&_nc_oc=AdkVWLoINjaBrKqr2nHlZu_COX6zHfNkwDiB7M1WbshMOid8MavRGRkcQZjsXLvoY5NrAJQkekD8BnFaqec_qVkj&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=BsOeD0f96ZbpOKgCCbM4hw&oh=00_AfHxxNFGJpKe2qjhncZ3Sx6uX6ARwesMHepynPZmqwu4lg&oe=680438BD",
        content: "I highly recommend Baking bliss 💯✔️. Thank you so much for this hamper. Very much worth for money. 💯😍 I Would like to recommend anyone without any doubt and appreciate your customer service. 🫶❤️",
        rating: 5,
        reviewLink: "https://www.facebook.com/share/p/18Xr24X88P/"
    },
    {
        name: "Shalini Ranisha",
        date: "22 September 2023",
        image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/490272193_3785566854923330_7960988899857523340_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=o9BgILCHGZ4Q7kNvwHhLemY&_nc_oc=AdkrXS6wIGFkQnu00gnqBWvURFJxWp45HaNnNIGUSw-iMTWBCsgBT4_S13uto9XuFZju1OwsRBJ4R-dc3l3qsPEm&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=IGoQgaMGHIIo-rzqPVZFgA&oh=00_AfGBNpkgmZI5CNJuT7P6VLQXH0lJoFTs2Zv9PmKe8gUcEg&oe=680440E2",
        content: "I highly recommend Baking bliss as the quality of the cake, neatness, tast all are up to standard. 👌🏽Thank you so much for the all amazing cakes. You have done it perfectly.❤️🥰 Would recommend anyone without a doubt...",
        rating: 5,
        reviewLink: "https://www.facebook.com/share/p/12LhQrTdMSm/"
    },
    {
        name: "Dilani Samalika",
        date: "5 December 2022",
        image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/338388966_774027147204078_4325073849762592859_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=6gYJ4N30M48Q7kNvwHmVdcJ&_nc_oc=Adlkiz6SEqDilRKbxuoLPCcffHnqggVu-hmi6-5E2PW5ISH5IunIQtgyUP0mJksU9Gxbb8kTIDD5txXlz871_Ny_&_nc_zt=24&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=PQxDliMCYxuytnhWusHORg&oh=00_AfH3PBw-OR-bfmAP5K5Q5S7cklrAoldGPX0wM0EbgaivaQ&oe=68044247",
        content: "Thanks a ton for your support on my Hodaamma's Birthday 🥰. Got it done with very short notice , and it was a bit complicated , but result was exactly what I wanted!!!!!!! ❤️❤️❤️🤩I really appreciate your customer service...",
        rating: 5,
        reviewLink: "https://www.facebook.com/share/p/1BzpwzmwFt/"
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p className="text-gray-600">Join our community via social media</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (

                    <a
                        key={index}
                        href={testimonial.reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.date}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.content}"</p>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 