import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
        <main>
            <h1>Home</h1>
            {/* <p>Welcome to Book Yeet!</p>
            <p>We are driven by Community</p>
            <p>Get more from your books</p> */}
            <div>
            <Link to="/how-it-works"><button>How it Works</button></Link>
            <Link to="/find-books"><button>Find Books</button></Link>
            <Link to="/share-books"><button>Share Books</button></Link>
            </div> 
        </main> 
        </>
    )
}



export default Home;