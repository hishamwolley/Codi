import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Announcement = () => {
	const [height, setHeight] = useState("2rem");
	return (
		<section
			style={{
				position: "relative",
				height: height,
				backgroundColor: "#007cba",
				transition: "1s ease",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				textAlign: "center",
				padding: "0 10%",
				boxShadow: "0px 1px 10px 3px rgba(0, 0, 0, 0.25)",
			}}
		>
			<div
				style={{
					height: "2rem",
					width: "100%",
					justifyContent: "center",
					display: "flex",
					alignItems: "center",
				}}
			>
				<p style={{ color: "#fff", display: height ? "block" : "none" }}>
					Applications in Beirut & Tripoli are now open{" "}
					<span
						style={{
							cursor: "pointer",
							color: "#ffbf0e",
							fontWeight: "700",
							textDecoration: "underline",
						}}
					>
						{" "}
						Apply Now!
					</span>
				</p>
			</div>
			<RiCloseLine
				className="announcementClose"
				display={height ? "block" : "none"}
				color="#fff"
				fontSize="1.5rem"
				onClick={() => {
					setHeight(0);
				}}
			/>
		</section>
	);
};

export default Announcement;
