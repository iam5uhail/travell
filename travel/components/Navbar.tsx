import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/Constants";
import Button from "./Button";

const Navbar = () => {
	return (
		<div className='flexBetween max-container padding-container relative z-30 py-5'>
			<Link href='/'>
				<Image
					src={"/hilink-logo.svg"}
					alt='homelogo'
					width={74}
					height={29}
				/>
			</Link>
			<ul className='hidden h-full gap-12 lg:flex'>
				{NAV_LINKS.map((nav: any) => (
					<Link
						href={nav.href}
						key={nav.key}
						className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 hover:font-bold transition-all'
					>
						{nav.label}
					</Link>
				))}
			</ul>
			<div className='hidden lg:flex'>
				<Button
					type='button'
					title='Login'
					icon='/user.svg'
					variant='btn_dark_green'
				/>
			</div>
			<Image
				src={"menu.svg"}
				alt='menu'
				width={32}
				height={32}
				className='inline-block cursor-pointer lg:hidden'
			/>
		</div>
	);
};

export default Navbar;
