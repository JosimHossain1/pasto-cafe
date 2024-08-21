const Crafted = () => {
  const craftedData = [
    {
      image: 'https://pastocafe.com/wp-content/uploads/2024/05/Artboard-14.png',
      title: 'Coffee & Beverage',
      description: 'Taste our premium beverages for every mood',
    },
    {
      image: 'https://pastocafe.com/wp-content/uploads/2024/08/3077223-200.png',
      title: 'Bakery and Pasty',
      description: 'Serving all-day snacks and pastries',
    },
    {
      image: 'https://pastocafe.com/wp-content/uploads/2024/08/open-book.png',
      title: 'Read & Sip',
      description:
        'A perfect blend where literature meets our finest espresso creations',
    },
    {
      image: 'https://pastocafe.com/wp-content/uploads/2024/08/5311700-200.png',
      title: 'Gift Corner',
      description:
        'Discover the perfect gifts for any occasion from our signature collection',
    },
  ];

  return (
    <div
      className='group hero relative'
      style={{
        backgroundImage: 'url(https://i.ibb.co/8sVRXNR/coffee-bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='hero-overlay bg-black bg-opacity-30 absolute inset-0'></div>
      <div className='hero-content'>
        <div className='py-20 sm:px-10 md:flex items-center md:space-x-10'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-y-20 md:gap-x-10 w-full pt-10 md:pt-0'>
            {craftedData.map((crafted) => (
              <div
                className='border rounded-lg shadow-lg p-4 backdrop-blur-3xl'
                key={crafted.title}
              >
                <img
                  src={crafted.image}
                  alt={crafted.title}
                  className='border bg-white -mt-16 w-20 h-20 mx-auto rounded-full p-2'
                />
                <h3 className='text-xl text-white poppins-bold my-2'>
                  {crafted.title}
                </h3>
                <p className='text-white poppins-regular'>
                  {crafted.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crafted;
