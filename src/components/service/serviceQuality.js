import { Link } from "react-router-dom";

export default function ServiceQuality() {
  const options = [
    { label: 'Elementary', description: '$150 - $220 per person' },
    { label: 'Luxuriate', description: '$220 - $270 per person'},
    { label: 'High-end', description: '$270 - $320 per person'},
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4 mt-5">Open to discovering ...</h1>
      <div className="landingbuttons mt-4">
        <div className="d-grid gap-2 col-6 mx-auto mt-5">
          {options.map((option, index) => (
            <Link to="/diet-restrictions" key={index} style={{ textDecoration: 'none' }}>
              <button className="landing-btn" type="button">
                {option.label}: {option.description}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
