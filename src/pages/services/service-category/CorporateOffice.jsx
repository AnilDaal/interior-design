import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import "../service.css";
import Footer from "../../../components/footer/Footer";

const randomImages = [
  {
    url: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHR1cm5rZXklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cm5rZXklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

const CorporateOffice = () => {
  const [imageUrl, setImageUrl] = useState(randomImages[0].url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageUrl = (url) => {
    setImageUrl(url);
  };

  return (
    <>
      <div className="container">
        <Header />
        {/* <hr /> */}
        <div
          style={{
            height: "100px",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
        />
        {/* <div className="service ">
          <button>
            <Link to="/services/corporate-office">
              Corporate Office Interior Contractor in India
            </Link>
          </button>
          <button>
            <Link to="/services/turnkey-interior">
              Turnkey Interiors Contractor in India
            </Link>
          </button>
          <button>
            <Link to="/services/interior-design">
              Interior Design Consultant in India
            </Link>
          </button>
          <button>
            <Link to="/services/office-furniture">
              Office Furniture In India
            </Link>
          </button>
          <button>
            <Link to="/services/gypsum-partition">
              Gypsum Partition Contractor In India
            </Link>
          </button>
          <button>
            <Link to="/services/gypsum-false">
              Gypsum False Ceiling Contractor In India
            </Link>
          </button> */}
        {/* </div> */}
        <div className="service-image-container">
          <div className="service-image-container-left">
            <h2>Corporate Office Interior Contractor in India</h2>
            <p>
              In case you are discovering that your commercial space has messed
              up, you can turn it into an astonishing place with the team of
              Interior Karwalo. The Corporate Office Interior Contractor in
              India will ensure you design your corporate space in a fully
              bespoke manner!
            </p>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
          <div className="service-image-container-right">
            <img src={imageUrl} alt="" />
            <div>
              {randomImages.map((item) => (
                <img
                  key={item.url}
                  src={item.url}
                  onMouseEnter={() => handleImageUrl(item.url)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="category--all-container">
          <div>
            <h2>Corporate Office Interior Contractor in India</h2>
            <p>
              In case you are discovering that your commercial space has messed
              up, you can turn it into an astonishing place with the team of
              Interior Karwalo. The Corporate Office Interior Contractor in
              India will ensure you design your corporate space in a fully
              bespoke manner!
              <br />
              We, the Interior Karwalo, are establishing ourselves in the
              Interior Karwalo industry to create space for our clients, which
              they deserve.
            </p>
          </div>
          <div>
            <h3>Add the sense of a co-working community with us!</h3>
            <p>
              Professional corporate office interior designers ensure to set the
              tone of your company's culture. We will help you to contribute to
              the community sense, which brings your employees together!
              Astonishingly, turn your office/workspace with the Interior
              Karwalo team. We can revamp your ideas or concepts and make them
              true. With us, you can create the ideal work environment that you
              have ever dreamed of! Give your commercial space a life with the
              team of our in-house interior designers! Whether you want to keep
              it simple or add a contemporary or modern touch, our mindful
              designers will help you!
              <br />
              In this competitive world, you can only lead your business when
              you have every necessary resource. Giving your workers a lavish
              and astonishing place aids professionalism and productivity. Every
              worker spends at least 8 to 9 hours in their office workspace and
              wants to surround themselves with like-minded people.
              <br />
              Co-working space design is all about fostering the feeling of
              collaboration with the business. Creating a functional & appealing
              workspace is the dream of every owner. Designing a co-working
              space based on your business type can be challenging, right? Take
              a deep breath & relax because we are here to present you with the
              best commercial living space per your desired level.
            </p>
          </div>
          <div>
            <h3>Designing the lavish co-working space design!</h3>
            <p>
              Do you want to get the perfect balance of modern & contemporary
              workspace? Open co-working spaces are becoming a trend now. With
              the revamp of your commercial space, you can increase interest &
              productivity.
              <br />
              Work with our team of interiors & create a meaningful and
              conceptual co-working space that fits the flexible work culture.
              Without any compromise, we'll design a corporate interior space in
              Delhi for you. Our team will visit your space & inspect the area
              to build strategies. The eye-popping hues and lavish furniture
              with the new touch of accents can upgrade your space. Pick the
              hues which make you feel better. Changing the shades can also give
              your space an entirely new look. We promise to turn your space
              into heaven by adding the perfect balance of resources.
            </p>
          </div>
          <div>
            <h3>Add the elements which tone up your commercial space</h3>
            <p>
              Adding elements can bring bigger changes to your commercial space
              look! The sofa is the biggest turning element of your look, so
              pick the right one! Utilising a vast size of sofa can make your
              room look smaller. Therefore, choosing the right size of sofa can
              make your space look great.
              <br />
              Some individuals choose wallpapers, while others choose wall
              colours to create an extraordinary surface. Based on your budget,
              we'll decide which looks great in your space. However, painting
              your space with plain warm hues can perfectly define the work
              culture.
              <br />
              A spacious storage room ensures your things are kept in a good
              place. A commercial space should be designed in a way that it
              looks flawless & mess-free. By adding simple yet elegant elements,
              you can turn the look & improve the workmanship, Hire our team of
              interior designers and add enthusiasm & confidence to your working
              space.
              <br />
              Our team has expert office furniture designers who know which
              shape of furniture goes best in your space. With them, you can add
              lighting to your room. Utilise a couple of thoughts and share them
              with us! Our experts will filter those ideas and add more from
              their side to turn your dreams into reality!
              <br />
              Our team has expert office furniture designers who know which
              shape of furniture goes best in your space. With them, you can add
              lighting to your room. Utilise a couple of thoughts and share them
              with us! Our experts will filter those ideas and add more from
              their side to turn your dreams into reality!
            </p>
          </div>

          <div>
            <h3>Why should you contact us?</h3>
            <div>
              <h4>Well-considered design</h4>
              <p>
                The extensive range of designer teams ensures to create the
                stunning solution with their highest level of experience &
                skills.
              </p>
            </div>
            <div>
              <h4>Create a personalised space</h4>
              <p>
                Our team offers a personalised solution by listening &
                understanding the requirements of clients. We promise you will
                love the results & be happy with the outcome!
              </p>
            </div>
            <div>
              <h4>Peaceful delivery</h4>
              <p>
                All the little instructions shared by the clients are taken care
                of by our team attentively, which aids the chances of a peaceful
                outcome.
              </p>
            </div>
            <div>
              <h4>Seamless solution</h4>
              <p>
                From the initial concept to the final completion, our creative
                team will look after your project from the beginning to the end.
                We promise to deliver you a seamless range of construction.
              </p>
            </div>
            <div>
              <h4>Value to your investment</h4>
              <p>
                By working with professional interior designers like us, you'll
                get the right value for your investment. We have the preferred
                range of supporting experts to help you until we deliver the
                project.
              </p>
            </div>
          </div>

          <div>
            <h3>Add the elements which tone up your commercial space</h3>
            <p>
              Adding elements can bring bigger changes to your commercial space
              look! The sofa is the biggest turning element of your look, so
              pick the right one! Utilising a vast size of sofa can make your
              room look smaller. Therefore, choosing the right size of sofa can
              make your space look great.
              <br />
              Some individuals choose wallpapers, while others choose wall
              colours to create an extraordinary surface. Based on your budget,
              we'll decide which looks great in your space. However, painting
              your space with plain warm hues can perfectly define the work
              culture.
              <br />
              A spacious storage room ensures your things are kept in a good
              place. A commercial space should be designed in a way that it
              looks flawless & mess-free. By adding simple yet elegant elements,
              you can turn the look & improve the workmanship, Hire our team of
              interior designers and add enthusiasm & confidence to your working
              space.
              <br />
              Our team has expert office furniture designers who know which
              shape of furniture goes best in your space. With them, you can add
              lighting to your room. Utilise a couple of thoughts and share them
              with us! Our experts will filter those ideas and add more from
              their side to turn your dreams into reality!
              <br />
              So, do you want to get all these delightful experiences? Contact
              us if you are seeking a Corporate Office Interior Contractor in
              India. Drop your needs to the Interior Karwalo mail or call us for
              more inquiries.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CorporateOffice;
