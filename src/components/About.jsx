import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					I am a 19 year old Web3 Developer who is learning various new technologies
					if you loved my project and wanna contact me here are my social just dm me!
				</p>
				<div className="flex gap-4 mt-3">
					<a href='mailto:chamarnumber102@gmail.com' className="text-md md:text-lg underline decoration-1">
						<FontAwesomeIcon icon={faEnvelope} className="mr-2 px-3 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500" style={{ fontSize: '24px' }}  />
					</a>
					<a href="https://twitter.com/MaushishYadav" target="_blank" rel="noopener noreferrer" className="text-md md:text-lg underline decoration-1">
						<FontAwesomeIcon icon={faTwitter} className="mr-2 text-gray-700 px-3 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500" style={{ fontSize: '24px' }} />
					</a>
					<a href="https://github.com/maushish" target="_blank" rel="noopener noreferrer" className="text-md md:text-lg underline decoration-1">
						<FontAwesomeIcon icon={faGithub} className="mr-2 text-gray-700 px-3 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400" style={{ fontSize: '24px' }} />
					</a>
					<a href="https://www.linkedin.com/in/maushish-yadav-6a2b1a251/" target="_blank" rel="noopener noreferrer" className="text-md md:text-lg underline decoration-1">
						<FontAwesomeIcon icon={faLinkedin} className="mr-2 text-gray-700 px-3 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" style={{ fontSize: '24px' }} />
					</a>
				</div>
			</div>
			<img src={myImg} alt="Maushish" className="w-full md:w-6/12 rounded-lg object-cover" />
		</div>
	);
}

export default About;
