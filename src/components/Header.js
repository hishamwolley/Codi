import React, { useState, useEffect, useRef } from "react";

import { ReactComponent as CodiTypless } from "../CodiLogo-notype.svg";

const Header = () => {
	const [scrollPosition, setScrollPosition] = useState();
	const [scrollProgressPos, setScrollProgressPos] = useState(
		"scrollProgressContainer1"
	);

	const progressRef = useRef();
	const headerRef = useRef();

	const listenScrollEvent = (event) => {
		scrollProgress();

		if (progressRef.current.getBoundingClientRect().top < 0) {
			return setScrollProgressPos("scrollProgressContainer2");
		}
		if (headerRef.current.getBoundingClientRect().bottom >= 0) {
			return setScrollProgressPos("scrollProgressContainer1");
		}
	};

	const scrollProgress = () => {
		const scrollPx = document.documentElement.scrollTop;
		const winHeightPx =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
		setScrollPosition(scrolled);
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => window.removeEventListener("scroll", listenScrollEvent);
	});

	return (
		<>
			<header ref={headerRef}>
				<nav className="headerNav">
					<ul>
						<li>
							<CodiTypless style={{ width: "50px", marginRight: "0.5rem" }} />
						</li>
						<li>
							<p className="headerText">About</p>
						</li>
						<li>
							<p className="headerText">Programmes</p>
						</li>
						<li>
							<p className="headerText">Our Alumni</p>
						</li>
					</ul>
					<ul>
						<li>
							<p className="headerText"> Blog</p>
						</li>
						<li>
							<a href="#" className="headerText">
								Looking for Talent?
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<div
				className={scrollProgressPos}
				ref={progressRef}
				style={{
					backgroundColor: "#dbdbe3",
					display: "flex",
					alignItems: "center",
				}}
			>
				<div
					style={{
						backgroundColor: "#007cba",
						// height: "0.75rem",
						height: "5px",
						width: scrollPosition,
					}}
				></div>
			</div>
		</>
	);
};

export default Header;
