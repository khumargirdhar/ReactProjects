function ProfilePicture() {

    const imageURL = './src/assets/profile-pic.png';
    
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={handleClick} src={imageURL} alt="" />    
    );
}

export default ProfilePicture