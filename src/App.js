import React from "react";
import Header from "./components/Header";
import "./app.css";
// import image from "./d595c7f49ba409e.jpeg";
import Announcement from "./components/Announcement";
const App = () => {
	return (
		<>
			<Announcement />
			<Header />
			{/* <main
				className="bannerOverflow"
				style={{
					position: "relative",
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					height: "75vh",
					maxWidth: "100vw",
				}}
			>
				<article
					style={{
						position: "relative",
						top: "25%",
						color: "#fff",
						textAlign: "center",
					}}
				>
					<h1 style={{ color: "#fff", fontSize: "3rem" }}>
						Programming for a Better Future
					</h1>
					<p
						style={{
							// marginTop: "3rem",
							margin: "1rem auto 0",
							maxWidth: "400px",
						}}
					>
						Our mission is to use coding and digital skills to enable inclusion
						and employment, and as a catalyst for social innovation and
						diversity. We are a combination between a coding bootcamp and a
						leadership course, based in Beirut and now Tripoli. Our aim is to
						get marginalised youth to participate in the growing needs of the
						local ICT and software sector.
					</p>
				</article>
			</main> */}
		</>
	);
};

export default App;
