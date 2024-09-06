import styled from "styled-components";
import Typing from "../../components/common/Typing";
import { useEffect, useState } from "react";
import theme from "../../themes/theme";

const Thankyou = () => {
	const [isTyping, setIsTyping] = useState(false);
	useEffect(()=> {
		setIsTyping(true)
	})
  return <Wrap>
	<Typing 
		text={"THANK YOU"}
		isTyping={isTyping}
	/>
	
		<div className="contact-box">
			<h4 className="contact-tit">Contact Me</h4>
			<div className="contact-text">
			<span>E-mail : mouom11@naver.com</span>
			<span>Github : https://github.com/hyeeons</span>
			</div>
			
		</div>
		<div className="bottom-box">
			<h4>&copy;LeeHyunJeong All Rights Reserved</h4>
		</div>
	
  </Wrap>;
};

const Wrap = styled.div`
	height: 100vh;

	p {
		font-size: 90px;
		font-weight: 800;
		padding-top: 15%;
		/* display: block;
		font-size: 90px;
		font-weight: 800;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translateX(-50%); */
	}

.contact-box {
	width: 50%;
	height: 300px;
	background-color: white;
	margin: 0 auto;
	border-radius: 10px;
	position: relative;
	}
.contact-tit {
	padding: 20px 0;
	text-align: center;
	font-size: 27px;
	font-weight: 600;
	color: ${theme.colors.grayDefault};
}
.contact-text {
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	gap: 10px;

	span {
		font-size: 15px;
	}
}
.bottom-box {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	padding-bottom: 10px;
	color: ${theme.colors.gnbLine};
	font-weight: 400;
}
	


`
export default Thankyou;
