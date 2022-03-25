import { AiFillFacebook, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";


const Footer = () => {
	return (
		<div className="footer">
            <AiFillFacebook className='facebookicon'/>
			<AiFillYoutube className='youtubeicon'/>
            <AiFillTwitterSquare className='twittericon'/>
			
			<p>Follow us</p>
		</div>
	);
};

export default Footer;
