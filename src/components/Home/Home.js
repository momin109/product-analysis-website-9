import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewsContext } from '../../App';
import Cart from '../Cart/Cart';

const Home = () => {
    const [reviews] = useContext(ReviewsContext);
    const navigate = useNavigate();
    return (
        <div className='my-20  mx-10 ml-36'>
            <div className='flex justify-between'>
                <img className='w-60' src={require('../images/Headphone.jpg')} />
                <div className='m-36'>
                    <h2 className='text-3xl font-bold'>HeadPhone</h2>
                    <h2 className='text-2xl font-bold'>Edifier K830 3.5mm Headphone Black </h2>
                    <p>Edifier K830 3.5mm headphone comes with Single Port. This headphone is featured with Bendable microphone gives you complete control, Adjustable headband for a secure, comfortable fit with Volume controls located on headset wire. This new headphone is also Featuring with a removable microphone, you can easily use the K830 as headphones. </p>
                    <button className='text-3xl bg-lime-500 p-1 rounded-lg'>Live Demo</button>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='text-center text-3xl mb-10'>Customer Reviews(3)</h1>
                <div className='grid grid-cols-3 '>
                    {
                        reviews.slice(0, 3).map(review => <Cart
                            key={review.id}
                            review={review}
                        ></Cart>)
                    }
                </div>
                <button className='font-xl font-bold  bg-pink-500 mt-10 py-1 px-2 rounded-lg ml-96 ' onClick={() => navigate('/reviews')}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;