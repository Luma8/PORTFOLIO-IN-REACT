import '../Styles/home.scss';
import Typical from 'react-typical';

const Home = () => {
    return (
        <div className='w-100'>
            <div className="home-div d-flex align-items-center justify-content-between">
                <div className='w-50'></div>
                <div className='d-grid'>
                    <p className='enf-p-m mb-0'>Hello,</p>
                    <p className='enf-p color-active mb-0'>I'm Lucas
                        <br />
                        <span className='enf-p'>Front-end Web Developer</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;