const MenuCategory = () => {
  const projects = [
    {
      image:
        'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Coffee Menu',
      description: 'Enjoy our aromatic coffees, perfect for any time of day.',
    },
    {
      image:
        'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Tea menu',
      description:
        'Enjoy our green tea, Lemon Tea, perfect for any time of day.',
    },
    {
      image:
        'https://images.pexels.com/photos/1475/food-vegetables-italian-restaurant.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'All Day treat menu',
      description: 'Serving all-day snacks and pastries.',
    },
    {
      image:
        'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Beverage menu',
      description: 'Taste our premium beverages for every mood.',
    },
  ];

  return (
    <div
      className='py-6 md:py-10 lg:py-20 px-5 md:px-10 lg:px-22 gradient-bg1
     '
    >
      <div className='text-center'>
        <h2 className='text-3xl font-bold mb-2'>Our Menu Category</h2>
        <p className='text-md poppins-regular px-10 lg:w-1/2 mx-auto mb-12'>
        "Our Menu offers a range of premium items to delight your taste buds. Enjoy each crafted to perfection for any time of day."
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-5'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-white border dark:text-white flex shadow-md rounded-md overflow-hidden'
          >
            <img
              className='w-36 md:w-52 h-full object-cover rounded'
              src={project.image}
              alt={project.title}
            />
            <div className='p-4'>
              <div className='font-bold md:text-xl mb-2 text-[#6F4E37]'>
                {project.title}
              </div>
              <p className='text-slate-700 dark:text-white text-sm md:text-md font-regular'>
                {project.description}
              </p>
              <button className='flex items-center text-sm md:text-md poppins-regular mt-4'>
                See Menu <span className='ml-2'></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
