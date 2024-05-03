import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "layout";
import React from "react";

function MainLayout() {
	return (
		<LayoutWrapper>
			<div id="wrapper">
				<div id="template-content">
                  <Outlet/>
                </div>
			</div>
		</LayoutWrapper>
	);
}

export default MainLayout;
