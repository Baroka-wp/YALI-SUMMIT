export default function Speakers() {
    const speakers = [
      {
        name: "Dr. Sarah Johnson",
        role: "Leadership Expert",
        organization: "YALI Network",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Prof. John Smith",
        role: "Innovation Specialist",
        organization: "Tech Africa",
        image: "/api/placeholder/300/300"
      }
    ];
  
    return (
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Intervenants</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center">{speaker.name}</h3>
                <p className="text-center text-gray-600">{speaker.role}</p>
                <p className="text-center text-gray-500">{speaker.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
