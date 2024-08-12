/* eslint-disable react/prop-types */
export default function HostInfo({ name, image, description, socialLinks }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold mb-2 text-start">HOSTED BY</h2>
      <div className="flex items-center justify-center mb-2 flex-col h-full w-full">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover " // Adjust size and ensure it fits within the square
        />
        <span className="font-bold text-center">{name}</span>
        <p className="text-sm text-center mt-2">{description}</p>
        {socialLinks && (
          <div className="flex justify-center mt-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1"
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-5 h-5" // Adjust size as needed
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
