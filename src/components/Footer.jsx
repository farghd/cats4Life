import { AiFillFacebook, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";


const Footer = () => {
	return (
		<div className="footer">
            <AiFillFacebook className='facebookicon'></AiFillFacebook>
            <AiFillTwitterSquare className='twittericon'></AiFillTwitterSquare>
			<AiFillYoutube className='youtubeicon'></AiFillYoutube>
			<p>Follow us</p>
		</div>
	);
};

export default Footer;
