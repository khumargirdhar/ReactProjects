import ProfilePic from './assets/profile-pic.png'

function Card() {
    return(
        <div className="card">
            {/* <img src={ProfilePic} alt="profile picture" /> */}
            <img className='card-image' src="https://via.placeholder.com/150" alt="profile picture" />
            <h2 className='card-title'>Khumar Girdhar</h2>
            <p className='card-text'>MCA student @ CDAC, Noida</p>
        </div>
    );
}

export default Card 