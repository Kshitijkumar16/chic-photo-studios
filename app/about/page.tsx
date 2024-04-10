import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Instagram from "@/components/sections/Instagram";
import Intro from "@/components/sections/Intro";
import Navbar from "@/components/sections/Navbar";
import PhCourses from "@/components/sections/PhCourses";
import React from "react";

const page = () => {
	return (
		<div className='relative bg-black '>
			{/* Navbar */}
			<div className='fixed top-0 z-10 flex justify-center w-full mix-blend-difference'>
				<Navbar />
			</div>
			<Intro />
			<CTA />
			<PhCourses />
			<Instagram />
			<FAQ />
			<Contact />
		</div>
	);
};

export default page;
