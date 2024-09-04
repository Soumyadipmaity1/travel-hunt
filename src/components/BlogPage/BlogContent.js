import React, { useState } from 'react';

const initialBlogs = [
  {
    id: 0,
    category: 'Travel',
    title: 'Wanderlust in India: Discovering Hidden Gems Across the Subcontinent',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  
{
    id: 1,
    category: 'Travel',
    title: 'Wanderlust in India: Discovering Hidden Gems Across the Subcontinent',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 2,
    category: 'Food',
    title: 'From Himalayas to Beaches: A Complete Guide to India\'s Diverse Landscapes',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 3,
    category: 'Festivals',
    title: 'Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 4,
    category: 'Travel',
    title: 'Wanderlust in India: Discovering Hidden Gems Across the Subcontinent',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 5,
    category: 'Food',
    title: 'From Himalayas to Beaches: A Complete Guide to India\'s Diverse Landscapes',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 6,
    category: 'Festivals',
    title: 'Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },{
    id: 7,
    category: 'Travel',
    title: 'Wanderlust in India: Discovering Hidden Gems Across the Subcontinent',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 8,
    category: 'Food',
    title: 'From Himalayas to Beaches: A Complete Guide to India\'s Diverse Landscapes',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 9,
    category: 'Festivals',
    title: 'Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
  {
    id: 10,
    category: 'Festivals',
    title: 'Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  }, {
    id: 11,
    category: 'Festivals',
    title: 'Meet Coffee Tonic, the Sensation of Drinking Coffee-Flavored Soda',
    date: 'August 19, 2022',
    duration: '4 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
];

const PopularBlogs = [
  {
    id: 10,
    category: 'Popular',
    title: 'Exploring the Unseen: A Journey into Unique Experiences',
    date: 'August 19, 2022',
    duration: '5 Min',
    imageUrl: 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp',
  },
];

const BlogComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedBlogs, setDisplayedBlogs] = useState(initialBlogs.slice(0, 10));
  const [showLoadMore, setShowLoadMore] = useState(true);

  const filterBlogs = (category) => {
    setSelectedCategory(category);
    if (category === 'Popular') {
      setDisplayedBlogs(PopularBlogs.slice(0, 10));
      setShowLoadMore(PopularBlogs.length > 10);
    } else {
      const filteredBlogs = initialBlogs.filter(blog => category === 'All' || blog.category === category);
      setDisplayedBlogs(filteredBlogs.slice(0, 10));
      setShowLoadMore(filteredBlogs.length > 10);
    }
  };

  const loadMoreBlogs = () => {
    if (selectedCategory === 'Popular') {
      const currentLength = displayedBlogs.length;
      const newBlogs = PopularBlogs.slice(currentLength, currentLength + 10);
      setDisplayedBlogs([...displayedBlogs, ...newBlogs]);
      setShowLoadMore(PopularBlogs.length > displayedBlogs.length + 10);
    } else {
      const filteredBlogs = initialBlogs.filter(blog => selectedCategory === 'All' || blog.category === selectedCategory);
      const currentLength = displayedBlogs.length;
      const newBlogs = filteredBlogs.slice(currentLength, currentLength + 10);
      setDisplayedBlogs([...displayedBlogs, ...newBlogs]);
      setShowLoadMore(filteredBlogs.length > displayedBlogs.length + 10);
    }
  };

  return (
    <div className="container text-white mx-auto sm:px-20 p-6">
      <div className="flex sm:space-x-4 space-x-3 mb-8">
        {['All','Popular', 'Travel', 'Food', 'Festivals', ].map((category) => (
          <button
            key={category}
            onClick={() => filterBlogs(category)}
            className={`sm:px-4 px-3 py-2 font-semibold rounded text-sm sm:text-base ${selectedCategory === category ? 'bg-[#1E2F22] text-white ' : 'bg-[#EEF8E1] text-black'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        <div className="space-y-6">
          {displayedBlogs.map(blog => (
            <div key={blog.id} className="flex items-start space-x-4 border-b border-gray-400 py-5">
              <img src={blog.imageUrl} alt={blog.title} className="w-48  object-cover rounded" />
              <div>
                <h3 className="sm:text-xl font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.duration} • {blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showLoadMore && (
        <button onClick={loadMoreBlogs} className="mt-8 px-6 py-2 border text-sm rounded bg-gray-800 text-white">
          Load More
        </button>
      )}
    </div>
  );
};

export default BlogComponent;



