import { Link } from "react-router-dom";


export default function CuisineType() {
  return (
    <div className="cuisinesec mt-5 py-2">
      <h1 className="mt-5">We cuisine a menu that&apos;s ...</h1>
      <div className="flex flex-col space-y-2 w-full max-w-xs">
        {[
          { label: 'Local', description: 'Exploring the rich tapestry of Kenyan and international cuisines in Nairobi', image: '/images/buffet-style.png' },
          { label: 'Italian', description: 'Italian cuisine with a menu featuring pasta, risotto, and authentic Italian flavors', image: '/images/buffet-style.png' },
          { label: 'Middle Eastern', description: 'exotic spices and unique flavors, from countries like Lebanon and Morocco', image: '/images/plated-dinner.png' },
          { label: 'French', description: 'French cuisine with a selection of gourmet dishes, pastries, and exquisite flavors', image: '/images/cocktail-reception.png' },
          { label: 'Mediterranean', description: 'Mediterranean with dishes inspired by Greece, Italy, Spain, and more.', image: '/images/buffet-style.png' },
          { label: 'Asian', description: 'Diverse options from Chinese, Japanese, Thai, and other Asian cuisines', image: '/images/plated-dinner.png' },
          { label: 'Latin American', description: 'Bold tastes of Latin America, Mexico, Brazil, and Caribbean-inspired dishes', image: '/images/cocktail-reception.png' },
          { label: 'Surprise Me', description: 'Leave it to the chef to surprise you with a curated selection of dishes', image: '/images/buffet-style.png' },
        ].map((option, index) => (
            <div className='landingbuttons' key={index}>
                <div className="cuisinebtn">
                <Link to="/kitchen-ware" style={{ textDecoration: 'none'}}><button className="landing-btn" style={{width: '45rem'}} type="button">{option.label} <br/> {option.description}</button></Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
